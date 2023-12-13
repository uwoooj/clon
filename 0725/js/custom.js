$(function(){

  let menu = [
      {
        title : 'signature',
        summary:'셀렉토 감성과 재미를 듬뿍 담아 낸, 셀렉토에서<br> 맛볼 수 있는 시그니처 음료',
        // item:{
        //   {name:'음료_메뉴', image:'../img/c-signature-item-01'}
        //  { name:'음료_메뉴', image:'../img/c-signature-item-02'}
        //   {name:'음료_메뉴', image:'../img/c-signature-item-03'}
        // },
        cub : [
          {images : './img/c-signature-item-01.png'},
          {images : './img/c-signature-item-02-1.png'},
          {images : './img/c-signature-item-03-1.png'}
        ],
        to:[
          {name:'시럽_바닐라빈', image:'./img/c-topping-01.png'},
          {name:'시럽_카라멜', image:'./img/c-topping-02.png'},
          {name:'우유_오트밀', image:'./img/c-topping-03.png'},
          {name:'크림_흑임자', image:'./img/c-topping-04.png'}
        ],
        photo:'./img/c-signature-item-00.png'
      },
      {
        title : 'beverage',
        summary:'고객의 라이프 스타일에 맞춰 더욱 다양하게 즐길<br>수 있는 셀렉토의 음료 라인업',
        cub : [
          {images : './img/c-beverage-item-01.png'},
          {images : './img/c-beverage-item-02.png'},
          {images : './img/c-beverage-item-03.png'},
        
        ],
        to:[
          {name:'시럽_카라멜', image:'./img/c-topping-02.png'},
          {name:'우유_오트밀', image:'./img/c-topping-03.png'},
          {name:'크림_흑임자', image:'./img/c-topping-04.png'}
        ],
        photo:'./img/c-signature-item-01.png'
      },
      {
        title : 'coffee',
        summary:'셀렉토는 품질 좋은 원두를 선별해, 최적의 로스팅 포인트로<br>더욱 섬세하게 균형잡힌 풍미의 커피를 고객에게 선사합니다.',
        cub : [
          {images : './img/c-coffee-item-01.png'},
          {images : './img/c-coffee-item-02.png'},
          {images : './img/c-coffee-item-03.png'},
        ],
        to:[
          {name:'우유_오트밀', image:'./img/c-topping-03.png'},
          {name:'크림_흑임자', image:'./img/c-topping-04.png'},
        ],
        photo:'./img/c-coffee-item-00.png'
      },
      {
        title : 'cookie',
        summary:'남녀노소, 어디서나 맛있게! 셀렉토 시그니처 수제 쿠키',
        cub : [
          {images : './img/cookie_1.png'},
          {images : './img/cookie_2.png'},
          {images : './img/cookie_3.png'},
        ],
        to:[
          {name:'시럽_바닐라빈', image:'./img/c-topping-01.png'},
          {name:'시럽_카라멜', image:'./img/c-topping-02.png'},
          {name:'우유_오트밀', image:'./img/c-topping-03.png'},
          {name:'크림_흑임자', image:'./img/c-topping-04.png'},
        ],
        photo:'./img/c-cookie-item-00.png'
      },

  ];
  

  var swiper = new Swiper(".slide01", {
    autoplay: true,
  });

  var swiper = new Swiper(".slide02", {
      
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet : function(index, className){
        return (
          `<li class="${className}"><span >${menu[index].title}</span></li>`
      );
      }
    },

    on:{
      slideChange:function(e){
        menuChange(e.realIndex)
      }
    }
  });

  var swiper = new Swiper(".slide03", {
    slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        
      },
    });
    let menuChange = function(idx){
        let seletor = menu[idx];
        let tag='',to='';
        seletor.cub.forEach(function(v){
          tag += `<li>
                    <a href="">
                      <figure>
                        <img src="${v.images}" alt="">
                      </figure>
                    </a>
                  </li>`

        })
        seletor.to.forEach(function(v){
          to +=`
                        <figure>
                            <img src="${v.image}" alt="">
                            <figcaption class="desc">${v.name}</figcaption>
                          </figure>
          `
        })


        let info = `<div class="inn">
                      <div class="tit"> <h3>${seletor.title}</h3> </div>
                      <div class="txt">
                        ${seletor.summary}
                      </div>
                      <div class="item_con">
                        <div id="sig" class="con on">
                          <ul class="item_list">
                            ${tag}
                          </ul>
                        </div>

                      </div>

                      <div class="recomm">
                        <div class="toping">
                          <p class="title">추천 토핑류</p>
                        </div>

                        <div class="best_wrap">
                          ${to}
                        </div>
                      </div>
                    </div>`
                    // $('.sig_img img').attr('src',seletor.photo)   
        $('.sig_img').find('img').attr('src',seletor.photo)
        $('.test').html(info);
    }

    menuChange(0)
    // window.scrollTo(0, 0);

    $(".btn").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });


    jQuery(document).ready(function ($) {
      $(".counter").counterUp({
        delay: 10,
        time: 1000,
      });
    });




    $(document).ready(function(){
              
      // 'divAdd'라는 id를 가진 object에 'addCl'이라는 class를 추가
      $(".cate btn button").click(function(){
          $(this).addClass("addCl");
      });
      
      // 'divRe'라는 id를 가진 object에 'test'이라는 class를 제거
      $("#divRe").click(function(){
          $(this).removeClass("test");
      });
  });



  




$('.m-buger').click(function (e) { //e란 -> 이벤트란뜻
  e.preventDefault(); //이벤트 막기
  $('.side-menu').removeClass('on');
  $('.side-menu').addClass('on');
  $('.m-buger').addClass('on');
  $('main').addClass('active')

})

$('.close').click(function (e) { //e란 -> 이벤트란뜻
  e.preventDefault(); //이벤트 막기
  $('.side-menu').removeClass('on');
  $('.m-buger').removeClass('on');
  $('.menu_wrap').addClass('on');
  $('main').removeClass('active')
})


$('.gnb').hover(function(e){
  $('.head_wrap').addClass('on')
})

$('.gnb').on('mouseleave',function(){
  $('.head_wrap').removeClass('on')
})

$('.head_wrap').on('mouseenter',function(){
  $('.head_wrap').addClass('on')
})

$('.head_wrap').on('mouseleave',function(){
  $('.head_wrap').removeClass('on')
})




if (window.matchMedia("(min-width: 1500px)").matches) {
  $('.menu_wrap').addClass('on');
  /* 뷰포트 너비가 400 픽셀 이상 */
} else {
  /* 뷰포트 너비가 400 픽셀 미만 */
}


$('.item li').click(function (e) { //e란 -> 이벤트란뜻
  e.preventDefault(); //이벤트 막기
  $('.sub').toggleClass('on');
 

})



})
