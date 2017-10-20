$.ajax({
    type:'get',
    url:'/content/getSchedule',
    data:{
        page:'0',
        pageSize:'13',
        email:'1666188122@qq.com'
    },
    dataType:'json',
    async:false,
    success:function (result) {
        //alert(JSON.stringify(result));
        showSchedule(result.data);

    },
    error:function (result) {
    }
});
function showSchedule(data) {
    $.each(data,function (i,value) {
        // alert(JSON.stringify(value));
        var html='              <li title="'+value["update_time"]+'">\n' +
            '                        <div>\n' +
            '                            <time>'+value["id"]+'</time>\n' +
            '                            '+value["content"]+'\n' +
            '                            <a class="schedule-btn"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></a>\n' +
            '                        </div>\n' +
            '                    </li>';
        $('#schedule').append(html);
    });
};


var items = document.querySelectorAll(".timeline li");
 
// code for the isElementInViewport function
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}