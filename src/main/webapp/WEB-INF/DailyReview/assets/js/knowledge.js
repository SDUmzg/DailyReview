var knowledgeList=null;
var listNum=0;
var sum=0;
$(function () {
    $.ajax({
        type:'get',
        url:'/content/getKnowledge',
        data:{
            page:'0',
            pageSize:'15',
            email:'1666188122@qq.com'
        },
        dataType:'json',
        async:false,
        success:function (result) {
            // alert(JSON.stringify(result));
            if (result['total']!=0){
                sum = result['total'];
                knowledgeList = result['data'];
                console.log(result);
            }
        }
    });
    if (sum >0){
        startKnowledge(sum-1);
        $('#remeberLeft').click(function () {
            if (listNum==sum-1){
                listNum=0;
            }else {
                listNum++;
            }
            startKnowledge(listNum);
        });
        $('#remeberRight').click(function () {
            if (listNum==0){
                listNum=sum-1;
            }else {
                listNum--;
            }
            startKnowledge(listNum);
        });
    };
    $('#answer a').click(function () {
        if ($(this).text()=='查看解答'){
            $('#answer p').css('display','block');
            $(this).text('隐藏解答');
        }else {
            $('#answer p').css('display','none');
            $(this).text('查看解答');
        }

    });


});
function startKnowledge(id) {
    $('#answer p').css('display','none');
    id = id%sum;
    var question = knowledgeList[id]['question'];
    var answer = knowledgeList[id]['answer'];
    console.log(question);
    console.log(answer);
    $('#question p').text(question);
    $('#answer p').text(answer);
}