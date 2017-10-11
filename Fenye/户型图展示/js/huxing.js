$(function () {
    //html页面显示
    $(".tu>img").hover(function () {
        $(this).parent().find("span").show();//鼠标放在图片上出现删除图标
    },function () {
        $(this).parent().find("span").hide();//鼠标移开图片时隐藏删除图标
    });
    $(".tu>img").parent().find("span").hover(function () {
        $(this).show();//鼠标放在图片上出现删除图标，并且防止出现闪烁

    },function () {
        $(this).hide();//鼠标移开图片时隐藏删除图标，并且防止出现闪烁
    });
    //回收站中关于单选框全选部分
    $('.kuang>input').on('click',function () {
        var j=0;  //回收站中关于单选框旁边的全选数量，默认0；
        if($(this).is(':checked')){
            $(".tu>img").parent().find("span").show();//回收站中当点击全选每个图片单选框部分显示
            $('.dan').prop('checked',true);//回收站中当点击全选每个图片单选框全选
            for(var i=0;i<$('.dan').length;i++){
                if( $('.dan').eq(i).is(':checked')){
                    j=j+1;
                }
            }

        }else {
            $('.dan').prop('checked',false);//回收站中当点击全选每个图片单选框取消全选
            $(".tu>img").parent().find("span").hide();//回收站中每个图片单选框部分隐藏

        }
        $('#quanxuanshuliang').html(j); //回收站中关于单选框旁边的全选数量；
    });
    //回收站中关于单选框图片单选部分
$('.dan').on('click',function () {
    var j=0;
    for(var i=0;i<$('.dan').length;i++){
            if( $('.dan').eq(i).is(':checked')){
                j=j+1;
            }
        }

    $('#quanxuanshuliang').html(j); //回收站中关于单选框旁边的全选数量；
});



    $.ajax({
        type:'get',
        url:'json/chain-city.json',
        success: function (data) {
            var dt=data.city;
            console.log(dt);
        }
    })
})
