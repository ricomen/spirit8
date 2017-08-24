'use strict';
import           slick from 'slick-carousel'
import  mPageScroll2id from 'page-scroll-to-id'
import         mixitup from 'mixitup'

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
        slidesToScroll: 3,
        infinite: true,        
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
        dots: false,
        arrows: true
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
        slidesToScroll: 3,
        infinite: true,        
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
        dots: false,
        arrows: true
      }
    } 
  ]
  });

});

})(jQuery);