'use strict';
import slick from 'slick-carousel'

!function(a,b){"use strict";var c="../img/symbol-sprite.html",d=1;if(!b.createElementNS||!b.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var f,g,e="localStorage"in a&&null!==a.localStorage,h=function(){b.body.insertAdjacentHTML("afterbegin",g)},i=function(){b.body?h():b.addEventListener("DOMContentLoaded",h)};if(e&&localStorage.getItem("inlineSVGrev")==d&&(g=localStorage.getItem("inlineSVGdata")))return i(),!0;try{f=new XMLHttpRequest,f.open("GET",c,!0),f.onload=function(){f.status>=200&&f.status<400&&(g=f.responseText,i(),e&&(localStorage.setItem("inlineSVGdata",g),localStorage.setItem("inlineSVGrev",d)))},f.send()}catch(a){}}(window,document);


/**
 * slider
**/