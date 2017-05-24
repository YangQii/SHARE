/**
 * Created by Administrator on 2017/5/19.
 */

$(document).ready(function () {
    $("#search_btn").click(function () {
        console.log("点击事件");
        var key_text=$("#key_help").val();
        console.log("输入值:"+key_text);
        if (key_text !=""){
            $.ajax({
                type:"post",
                url:"http://101.200.56.5:8080/ShareService/customerSelect.action",
                dataType:"text",
                data: {
                    "productid":key_text,
                },
                error:function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log("执行错误函数");
                    console.log("XML为："+XMLHttpRequest);
                    console.log("状态："+textStatus);
                    console.log("异常："+errorThrown);

                },
                success:function (data) {
                    console.log("成功");
                    console.log("服务器给的："+data);
                }

            })
        }else{
            console.log("else");
        }
    })
})
