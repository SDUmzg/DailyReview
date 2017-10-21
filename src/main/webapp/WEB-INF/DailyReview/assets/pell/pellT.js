function ensureHTTP (str) {
    return /^https?:\/\//.test(str) && str || `http://${str}`
}

var editor = window.pell.init({
    element: document.getElementById('pell'),
    styleWithCSS: false,
    actions: [
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'heading1',
        'heading2',
        'paragraph',
        'quote',
        'olist',
        'ulist',
        'code',
        'line',
        {
            name: 'zitalic',
            icon: 'Z',
            title: 'Zitalic',
            result: () => window.pell.exec('italic')
        },
        {
            name: 'image',
            result: () => {
                const url = window.prompt('Enter the image URL')
                if (url) window.pell.exec('insertImage', ensureHTTP(url))
            }
        },
        {
            name: 'link',
            result: () => {
                const url = window.prompt('Enter the link URL')
                if (url) window.pell.exec('createLink', ensureHTTP(url))
            }
        }
    ],
    onChange: function (html) {
        document.getElementById('text-output').innerHTML = html
        document.getElementById('html-output').textContent = html
    }
})