if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector || 
                                Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1); 
        return null;
    };
}

document.addEventListener('DOMContentLoaded',function(){
  blurryTiles();
  window.onresize = blurryTiles;
});

function blurryTiles() {
  var masks = Array.from(document.querySelectorAll('.mask'));

  masks.forEach(function(el){
      var container = el.closest('.tile.is-ancestor'),
          containerRect = container.getBoundingClientRect();
      var elemRect = el.getBoundingClientRect(), 
          offsetY = elemRect.top - containerRect.top, 
          offsetX = elemRect.left - containerRect.left;
      console.log(offsetY,offsetX);
      var blurredImage = el.querySelector('.blurred-image');
      blurredImage.style.transform = "translate3d("+parseInt(-Math.abs(offsetX))+"px,"+parseInt(-Math.abs(offsetY))+"px,0)";
      blurredImage.style.height = container.offsetHeight+'px';
      blurredImage.style.width = container.offsetWidth+'px';
  });
}