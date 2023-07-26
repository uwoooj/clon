$(function(){
    $('.cate_wrap a').click(function () {
        var tab_id = $(this).attr('data-tab');
 
        $('.tab-link').removeClass('on');
        $('.tab-content').removeClass('on');
 
        $(this).addClass('on');
        $("#" + tab_id).addClass('on');
       
})

})