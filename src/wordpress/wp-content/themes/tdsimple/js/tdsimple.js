;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
	$.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;
  });

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);

/*
 * jQuery RefineSlide plugin v0.3
 * http://github.com/alexdunphy/refineslide
 * Requires: jQuery v1.7+
 * Copyright 2012, Alex Dunphy
 * MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Includes: jQuery imagesLoaded plugin v2.0.1
 * http://github.com/desandro/imagesloaded
 * MIT License. by Paul Irish et al.
 */
;(function(d,f,g,b){var c={transition:"cubeV",fallback3d:"sliceV",controls:"thumbs",thumbMargin:3,autoPlay:false,delay:5000,transitionDuration:800,startSlide:0,keyNav:true,captionWidth:50,arrowTemplate:'<div class="rs-arrows"><a href="#" class="rs-prev"></a><a href="#" class="rs-next"></a></div>',onInit:function(){},onChange:function(){},afterChange:function(){}};function h(k,j){this.$slider=d(k).addClass("rs-slider");this.settings=d.extend({},c,j);this.$slides=this.$slider.find("> li");this.totalSlides=this.$slides.length;this.cssTransitions=i.cssTransitions();this.cssTransforms3d=i.cssTransforms3d();this.currentPlace=this.settings.startSlide;this.$currentSlide=d(this.$slides[this.currentPlace]);this.inProgress=false;this.$sliderWrap=this.$slider.wrap('<div class="rs-wrap" />').parent();this.$sliderBG=this.$slider.wrap('<div class="rs-slide-bg" />').parent();this.settings.slider=this;this.init()}h.prototype={init:function(){var m=this;this.settings.onInit();this.captions();if(this.settings.controls==="arrows"){this.setArrows()}if(this.settings.keyNav){this.setKeys()}for(var k=0;k<this.totalSlides;k++){d(this.$slides[k]).attr("class","rs-slide-"+k)}if(this.settings.autoPlay){this.setAutoPlay();this.$slider.on("mouseenter",function(){clearTimeout(m.cycling)});this.$slider.on("mouseleave",function(){m.setAutoPlay()})}var j=d(this.$slides).find("img:eq(0)").addClass("rs-slide-image"),l=[];d(j).imagesLoaded(function(){for(var n=0;n<m.totalSlides;n++){l.push(d(j[n]).clone().css({position:"absolute",visibility:"hidden",display:"block"}).appendTo(m.$slider))}setTimeout(function(){m.setup(l)},0)})},setup:function(l){var n=this,m=parseInt(this.$sliderBG.css("padding-left").replace("px",""))+parseInt(this.$sliderBG.css("padding-right").replace("px","")),k=[];var j=l.length;while(j--){k.push(d(l[j]).width());if(n.settings.controls!=="thumbs"){d(l[j]).remove()}}this.$sliderWrap.css("width",Math.floor.apply(Math,k)+m);if(this.settings.controls==="thumbs"){this.setThumbs(l)}this.$currentSlide.css({opacity:1,"z-index":2});this.$sliderBG.prefixes({transform:"translateZ(0)"})},setArrows:function(){var j=this;this.$sliderWrap.append(this.settings.arrowTemplate);d(".rs-next",this.$sliderWrap).on("click",function(k){k.preventDefault();j.next()});d(".rs-prev",this.$sliderWrap).on("click",function(k){k.preventDefault();j.prev()})},next:function(){if(this.currentPlace===this.totalSlides-1){this.transition(0,true)}else{this.transition(this.currentPlace+1,true)}},prev:function(){if(this.currentPlace==0){this.transition(this.totalSlides-1,false)}else{this.transition(this.currentPlace-1,false)}},setKeys:function(){var j=this;d(g).on("keydown",function(k){if(k.keyCode===39){j.next()}else{if(k.keyCode===37){j.prev()}}})},setAutoPlay:function(){var j=this;this.cycling=setTimeout(function(){j.next()},this.settings.delay)},setThumbs:function(l){var n=this,k=(100-((this.totalSlides-1)*this.settings.thumbMargin))/this.totalSlides+"%";this.$thumbWrap=d('<div class="rs-thumb-wrap" />').appendTo(this.$sliderWrap);for(var j=0;j<this.totalSlides;j++){var m=d('<a class="rs-slide-link-'+j+'" />').css({width:k,marginLeft:this.settings.thumbMargin+"%"}).attr({href:"#"});d(l[j]).removeAttr("style").appendTo(this.$thumbWrap).wrap(m)}this.$thumbWrap.children().last().css("margin-right",-10);d(this.$thumbWrap.find("a")[this.settings.startSlide]).addClass("active");this.$thumbWrap.on("click","a",function(p){p.preventDefault();var o=parseInt(d(this).attr("class").split("-")[3]);n.transition(o)})},captions:function(){var k=this,j=this.$slides.find(".rs-caption");j.css({width:k.settings.captionWidth+"%",opacity:0});this.$currentSlide.find(".rs-caption").css({opacity:1});j.each(function(){d(this).prefixes({transition:"opacity "+k.settings.transitionDuration+"ms ease-in-out",transform:"translateZ(0)"})})},transition:function(k,j){if(!this.inProgress){if(k!==this.currentPlace){if(j===b){j=k>this.currentPlace?true:false}this.$nextSlide=d(this.$slides[k]);this.currentPlace=k;this.settings.onChange();new e(this,this.settings.transition,j);if(this.settings.controls==="thumbs"){this.$thumbWrap.find("a").removeClass("active");d(this.$thumbWrap.find("a")[k]).addClass("active")}}}}};function e(k,l,j){this.RS=k;this.RS.inProgress=true;this.forward=j;this.transition=l;this.fallback3d=this.RS.settings.fallback3d;this.init()}e.prototype={fallback:"fade",anims:["cubeH","cubeV","fade","sliceH","sliceV","slideH","slideV","scale","blockScale","kaleidoscope","fan","blindH","blindV"],init:function(){this[this.transition]()},before:function(l){var k=this;this.RS.$currentSlide.css("z-index",2);this.RS.$nextSlide.css({opacity:1,"z-index":1});if(this.RS.cssTransitions){this.RS.$currentSlide.find(".rs-caption").css("opacity",0);this.RS.$nextSlide.find(".rs-caption").css("opacity",1)}else{this.RS.$currentSlide.find(".rs-caption").animate({opacity:0},k.RS.settings.transitionDuration);this.RS.$nextSlide.find(".rs-caption").animate({opacity:1},k.RS.settings.transitionDuration)}if(typeof this.setup==="function"){var j=this.setup();setTimeout(function(){l(j)},40)}else{this.execute()}if(this.RS.cssTransitions){d(this.listenTo).one("webkitTransitionEnd transitionend oTransitionEnd msTransitionend MSTransitionEnd",function(){k.after()})}},after:function(){this.RS.$slider.removeAttr("style");this.RS.$currentSlide.removeAttr("style").css("opacity",0);this.RS.$nextSlide.removeAttr("style").css({"z-index":2,opacity:1});if(typeof this.reset==="function"){this.reset()}if(this.RS.settings.autoPlay){clearTimeout(this.RS.cycling);this.RS.setAutoPlay()}this.RS.$currentSlide=this.RS.$nextSlide;this.RS.inProgress=false;this.RS.settings.afterChange()},fade:function(){var j=this;if(this.RS.cssTransitions){this.setup=function(){j.listenTo=j.RS.$currentSlide;j.RS.$currentSlide.prefixes({transition:"opacity "+j.RS.settings.transitionDuration+"ms ease-in-out"})};this.execute=function(){j.RS.$currentSlide.css({opacity:0})}}else{this.execute=function(){j.RS.$currentSlide.animate({opacity:0},j.RS.settings.transitionDuration,function(){j.after()})}}this.before(function(){j.execute()})},cube:function(q,k,j,o,n,m,l){if(!this.RS.cssTransitions||!this.RS.cssTransforms3d){return this[this["fallback3d"]]()}var p=this;this.setup=function(){p.listenTo=p.RS.$slider;this.RS.$sliderBG.prefixes({perspective:1000});var r={transform:"translateZ("+q+"px)","backface-visibility":"hidden"};p.RS.$currentSlide.prefixes(r);p.RS.$nextSlide.prefixes(r);p.RS.$slider.prefixes({transition:"none","transform-style":"preserve-3d",transform:"translateZ(-"+q+"px)"});p.RS.$nextSlide.css({opacity:1}).prefixes({transform:"translateZ(0px) translateY("+j+"px) translateX("+k+"px) rotateY("+n+"deg) rotateX("+o+"deg)"})};this.execute=function(){var r=[];for(var s=0;s<i.browserVendors.length;s++){r[i.browserVendors[s]+"transition"]=i.browserVendors[s]+"transform "+p.RS.settings.transitionDuration+"ms ease-in-out"}p.RS.$slider.prefixes(r);p.RS.$slider.prefixes({transform:"translateZ(-"+q+"px) rotateX("+m+"deg) rotateY("+l+"deg)"})};this.before(function(){p.execute()})},cubeH:function(){var j=d(this.RS.$slides).width()/2;if(this.forward){this.cube(j,j,0,0,90,0,-90)}else{this.cube(j,-j,0,0,-90,0,90)}},cubeV:function(){var j=d(this.RS.$slides).height()/2;if(this.forward){this.cube(j,0,-j,90,0,-90,0)}else{this.cube(j,0,j,-90,0,90,0)}},grid:function(n,m,l,k,j,o,q){if(!this.RS.cssTransitions){return this[this["fallback"]]()}var p=this;this.setup=function(){var x=(p.RS.settings.transitionDuration)/(n+m);function w(M,T,Q,N,L,R,S,P,K){var O=(P+K)*x;return d('<div class="rs-gridlet" />').css({width:M,height:T,top:Q,left:N,"background-image":"url("+L+")","background-position":"-"+N+"px -"+Q+"px","background-size":R+"px "+S+"px"}).prefixes({transition:"all "+p.RS.settings.transitionDuration+"ms ease-in-out "+O+"ms",transform:"none"})}p.$img=p.RS.$currentSlide.find("img.rs-slide-image");p.$grid=d("<div />").addClass("rs-grid");p.RS.$currentSlide.prepend(p.$grid);var y=p.$img.width(),H=p.$img.height(),s=p.$img.attr("src"),J=Math.floor(y/n),u=Math.floor(H/m),C=y-(n*J),z=Math.ceil(C/n),D=H-(m*u),t=Math.ceil(D/m),I=0;k=k==="auto"?y:k;k=k==="min-auto"?-y:k;j=j==="auto"?H:j;j=j==="min-auto"?-H:j;for(var G=0;G<n;G++){var v=0,B=J;if(C>0){var A=C>=z?z:C;B+=A;C-=A}for(var F=0;F<m;F++){var E=u,r=D;if(r>0){A=r>=t?t:D;E+=A;r-=A}p.$grid.append(w(B,E,v,I,s,y,H,G,F));v+=E}I+=B}p.listenTo=p.$grid.children().last();p.$grid.show();p.$img.css("opacity",0);p.$grid.children().first().addClass("rs-top-left");p.$grid.children().last().addClass("rs-bottom-right");p.$grid.children().eq(m-1).addClass("rs-bottom-left");p.$grid.children().eq(-m).addClass("rs-top-right")};this.execute=function(){p.$grid.children().css("opacity",q).prefixes({transform:"rotate("+l+"deg) translateX("+k+"px) translateY("+j+"px) scale("+o+")"})};this.before(function(){p.execute()});this.reset=function(){p.$img.css("opacity",1);p.$grid.remove()}},sliceH:function(){this.grid(1,8,0,"min-auto",0,1,0)},sliceV:function(){this.grid(10,1,0,0,"auto",1,0)},slideV:function(){this.grid(1,1,0,0,"auto",1,1)},slideH:function(){this.grid(1,1,0,"min-auto",0,1,1)},scale:function(){this.grid(1,1,0,0,0,1.5,0)},blockScale:function(){this.grid(8,6,0,0,0,0.6,0)},kaleidoscope:function(){this.grid(10,8,0,0,0,1,0)},fan:function(){this.grid(1,10,45,100,0,1,0)},blindV:function(){this.grid(1,8,0,0,0,0.7,0)},blindH:function(){this.grid(10,1,0,0,0,0.7,0)},random:function(){this[this.anims[Math.floor(Math.random()*this.anims.length)]]()}};var i={browserVendors:["","-webkit-","-moz-","-ms-","-o-","-khtml-"],domPrefixes:["","Webkit","Moz","ms","O","Khtml"],testDom:function(k){var j=this.domPrefixes.length;while(j--){if(g.body.style[this.domPrefixes[j]+k]!==b){return true}}return false},cssTransitions:function(){if(f.Modernizr&&Modernizr.csstransitions!==b){return Modernizr.csstransitions}return this.testDom("Transition")},cssTransforms3d:function(){if(f.Modernizr&&Modernizr.csstransforms3d!==b){return Modernizr.csstransforms3d}if(g.body.style.perspectiveProperty!==b){return true}return this.testDom("Perspective")}};d.fn.prefixes=function(l){var j=[];for(var m in l){if(l.hasOwnProperty(m)){var k=i.browserVendors.length;while(k--){j[i.browserVendors[k]+m]=l[m]}}}this.css(j);return this};var a="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";d.fn.imagesLoaded=function(q){var n=this,s=d.isFunction(d.Deferred)?d.Deferred():0,r=d.isFunction(s.notify),k=n.find("img").add(n.filter("img")),l=[],p=[],m=[];function o(){var t=d(p),u=d(m);if(s){if(m.length){s.reject(k,t,u)}else{s.resolve(k)}}if(d.isFunction(q)){q.call(n,k,t,u)}}function j(t,u){if(t.src===a||d.inArray(t,l)!==-1){return}l.push(t);if(u){m.push(t)}else{p.push(t)}d.data(t,"imagesLoaded",{isBroken:u,src:t.src});if(r){s.notifyWith(d(t),[u,k,d(p),d(m)])}if(k.length===l.length){setTimeout(o);k.unbind(".imagesLoaded")}}if(!k.length){o()}else{k.bind("load.imagesLoaded error.imagesLoaded",function(t){j(t.target,t.type==="error")}).each(function(t,v){var w=v.src;var u=d.data(v,"imagesLoaded");if(u&&u.src===w){j(v,u.isBroken);return}if(v.complete&&v.naturalWidth!==b){j(v,v.naturalWidth===0||v.naturalHeight===0);return}if(v.readyState||v.complete){v.src=a;v.src=w}})}return s?s.promise(n):n};d.fn.refineSlide=function(j){return this.each(function(){if(!d.data(this,"refineSlide")){d.data(this,"refineSlide",new h(this,j))}})}})(jQuery,window,document);

jQuery(document).ready(function(){
	
	jQuery(".hentry").fitVids();
	
	jQuery('#gotop').click(function() {
		jQuery("html, body").animate({ scrollTop: 0 }, 1000);
	});

	jQuery('.sidebar-button').click(function() {
		
		if(jQuery('.widget-inner').is(':visible')) {
			jQuery('.sidebar-button i').removeClass('foundicon-minus').addClass('foundicon-plus');
			jQuery('.widget-inner').fadeOut().css('width', '0');
		} else {
			var currentBrowserWidth = jQuery( window ).width();
			
			if( currentBrowserWidth > 420 ) {
				sidebarWidth = '420px';
			} else {
				sidebarWidth = currentBrowserWidth.toString() + 'px';
			}
			jQuery('.sidebar-button i').removeClass('foundicon-plus').addClass('foundicon-minus');
			jQuery('.widget-area').css('height','100%');
			jQuery('.widget-inner, .widget').fadeIn(300, function() {
				jQuery('.widget-inner').css('width', sidebarWidth);
			});
		}
	});
	
	/* Toggle */
  	jQuery('.toggle-container').find('h5').click(function() {
  		jQuery(this).parents('.toggle-container').find('.content').toggle();
  	});
  	
  	/* featured slider */
  	jQuery('#slider').refineSlide({
		transition : 'scale',
		controls : 'arrows',
		arrowTemplate         : '<div class="rs-arrows"><a href="#" class="rs-prev"><i class="foundicon-left-arrow"></i></a><a href="#" class="rs-next"><i class="foundicon-right-arrow"></i></a></div>',
		transitionDuration : 400,
		autoPlay           : true
	});
	
	jQuery('table').addClass('responsive');

}); 

jQuery(window).scroll(function(){
	if (jQuery(this).scrollTop() > 200) {
		jQuery('#gotop').fadeIn();
	} else {
		jQuery('#gotop').fadeOut();
	}
}); 