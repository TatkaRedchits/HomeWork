!function(i){i.fn.slider=function(t){var e={imgWidth:100,quantity:5,margin:25},n=(i.extend(e,t),(e.imgWidth+e.margin)*e.quantity-e.margin),r=i('<div class="carousel-hider">').prependTo(".carousel-wrapper");r.css("width",n+"px"),r.append(this),this.find(".carousel-element").css("marginRight",e.margin+"px"),this.find(".carousel-img").css("width",e.imgWidth+"px");var a=i('<a href="#" class="carousel-btn-left">‹</a>').insertBefore(".carousel-hider"),s=i('<a href="#" class="carousel-btn-right">›</a>').insertAfter(".carousel-hider"),c=this,l=e.imgWidth+e.margin,h=0,u=this.find("li").length,d=-((u-e.quantity)*l),f=0;return a.click(function(){h!=f&&(h+=l,c.animate({left:h+"px"},500))}),s.click(function(){h!=d&&(h-=l,c.animate({left:h+"px"},500))}),this}}(jQuery),$(function(){$(".carousel-list").slider({imgWidth:200,quantity:3,margin:20})});