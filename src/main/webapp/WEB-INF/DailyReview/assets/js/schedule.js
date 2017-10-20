$(function () {
    $('#schedule a').on('click',function (event) {
        // alert(JSON.stringify(event));
        var id = $(this).parent().children("time").text();
        var checked = confirm('确认编号 : ' + id + '已完成?');
        if (checked == true){
            $(this).parent().parent().css('display','none');
            $.ajax({
                type:'get',
                url:'/content/disableSchedule',
                data:{
                    id:id
                },
                dataType:'json',
                async:true,
                success:function (data) {
                    //{"total":1,"state":"success","data":6}
                }
            });
        }
    });
})