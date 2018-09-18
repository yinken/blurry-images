


document.addEventListener('DOMContentLoaded',function(){
  var bodyRect = document.querySelector('.blurred-image-container').getBoundingClientRect(),
    elemRect = document.querySelector('.mask').getBoundingClientRect(),
    offsetY   = elemRect.top - bodyRect.top;
    offsetX   = elemRect.left - bodyRect.left;

console.log('Mask is ' + offsetY + ' vertical pixels from Container');
console.log('Mask is ' + offsetX + ' horizontal pixels from Container');

var mask = document.querySelector('.mask');
var blurredImage = document.querySelector('.blurred-image');

mask.style.top = offsetY+'px';
mask.style.left = offsetX+'px';

//blurredImage.style.transform = "translate("+parseInt(-Math.abs(offsetX) + height/2)+"px,"+parseInt(-Math.abs(offsetY) + width/2)+"px)";

blurredImage.style.transform = "translate3d("+parseInt(-Math.abs(offsetX))+"px,"+parseInt(-Math.abs(offsetY))+"px,0)";

var adjustment = 10;

mask.addEventListener('mouseover',function(){
  this.style.top = (offsetY-adjustment)+'px';
  blurredImage.style.transform = "translate3d("+parseInt(-Math.abs(offsetX))+"px,"+parseInt(-Math.abs(offsetY-adjustment))+"px,0)";
});
mask.addEventListener('mouseout',function(){
  this.style.top = (offsetY)+'px';
  blurredImage.style.transform = "translate3d("+parseInt(-Math.abs(offsetX))+"px,"+parseInt(-Math.abs(offsetY))+"px,0)";
});
});


