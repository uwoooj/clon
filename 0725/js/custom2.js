$(function(){


  $('.cata_list a').click(function (e) { //e란 -> 이벤트란뜻
    e.preventDefault(); //이벤트 막기
    $('.menu').toggleClass('on');
   
  

  })
  
})