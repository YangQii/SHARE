/**
 * Created by Administrator on 2017/5/20.
 */
$(document).ready(function () {
    // console.log("succ");
    $("#btn2").click(function () {
        var un=$("#name").val();
        var pw=$("#password").val();
        $.ajax({
            type:"post",
            url:"http://101.200.56.5:8080/ShareService/login.action",
            data:{
                name: un,
                password: pw,
            },
            dataType:"text",
            error:function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(XMLHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);
            },
            success:function (status) {
                console.log("返回值为："+status);
            }
        });
    })
})