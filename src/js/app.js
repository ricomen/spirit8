'use strict';
import           slick from 'slick-carousel'
import  mPageScroll2id from 'page-scroll-to-id'
import         mixitup from 'mixitup';

  /**
   *  svg
   */

!function(a,b){"use strict";var c="../img/symbol-sprite.html",d=1;if(!b.createElementNS||!b.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var f,g,e="localStorage"in a&&null!==a.localStorage,h=function(){b.body.insertAdjacentHTML("afterbegin",g)},i=function(){b.body?h():b.addEventListener("DOMContentLoaded",h)};if(e&&localStorage.getItem("inlineSVGrev")==d&&(g=localStorage.getItem("inlineSVGdata")))return i(),!0;try{f=new XMLHttpRequest,f.open("GET",c,!0),f.onload=function(){f.status>=200&&f.status<400&&(g=f.responseText,i(),e&&(localStorage.setItem("inlineSVGdata",g),localStorage.setItem("inlineSVGrev",d)))},f.send()}catch(a){}}(window,document);
(function($){

$(window).on("load", function() {

  /**
   *  mPageScroll2id
   */
  $("a[rel='m_PageScroll2id']").mPageScroll2id();

  /**
   *  slider our-team
   */
  $('.our-team__slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3             
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false        
      }
    } 
  ]
  });

  /**
   *  slider our-clients
   */
   $('.clients__slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3             
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1             
      }
    } 
  ]
  });

  /**
   *  slider testimonials
   */
   $('.testimonials__slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  /**
   *  Sort '.works__list'
   */
  let works = document.querySelector('#works__list');  

  let mixer = mixitup(works, {
    animation: {
        effects: 'fade scale(0.5)'
    },
    selectors: {
      target: '.works__item'
    }
  });

  /**
   *  Menu mobile toggler
   */
  $('.menu__trigger').on('click', function() {
    $(this).toggleClass('menu__trigger--closed');
    $(this).closest('.menu').toggleClass('menu--closed');
  })

   /**
   *  Form
   */
  
  $('form.form').on('submit', function(e) {
    e.preventDefault();    
    if(validateForm()) {
      sendForm($(this));
    } else {
      formAlert('Проверьте правильность заполнения формы!');
    }
  });

  /**
   *  Validate form
   */
  function validateForm(){
    let name = $('form.form input[name="name"]').val();
    let mail = $('form.form input[name="mail"]').val();
    let message = $('form.form textarea[name="message"]').val();

    if( name!=='' && name!==' ' && message!=='' && message!==' ' && mail!=='' && mail!==' ' && mail.match(/@/)) {
      return true;
    } else {      
      return false;
    }
  }

  /**
   *  Show alert message to form
   */
  function formAlert(message) {
    let alertBox = $('.form__message').fadeIn(100);
    let alert = $('.form__message-text');
    alert.html(message);
    setTimeout(function() {
      alertBox.fadeOut('500');
    }, 3000);
  }  

  /**
   * @param  {[object]} node [send form by ajax]   
   */
  function sendForm(node) {
    let form = $(node);
    let message = form.serialize();    
    $.ajax({
      type: 'POST',
      url: 'message.php',
      data: message,
      succes: function(data){
        formAlert('Ваше сообщение отправлено!');
      },
      error: function() {
        formAlert('Не удалось отправить сообщение!');
      }
    });
  }

  /**
   * Button scroll to top
   */
  var t0, scrollTime;

  $('.btn--toTop').hide().on('click', function(event){
    event.preventDefault();
    scrollTime = $(document).scrollTop() / 4;
    $('body').animate({scrollTop:0}, scrollTime);
  });

  $(window).on('scroll', function(){
    clearTimeout(t0);
    t0 = setTimeout(function () {
        showScrollTopButton();
        // console.log('scroll');
      }, 50);
  });

  showScrollTopButton();

  function showScrollTopButton(){
    if ( $(document).scrollTop() >= 500 ) {
      $('.btn--toTop').fadeIn();
    }
    else {
      $('.btn--toTop').fadeOut();
    }
  }

});

})(jQuery);