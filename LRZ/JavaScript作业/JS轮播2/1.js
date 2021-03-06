window.onload = function () {
    var scroll = document.getElementById('scroll');
    var ul = scroll.children[0];    
    var timer = null;
    var leader = 0;
    var target = 0;
    timer = setInterval(autoPlay, 10);
    
    function autoPlay() {
        target--;

        target <= -1200 ? target = 0 : target;
        leader = leader + (target - leader) / 10;
        ul.style.left = leader + "px";
    }

    scroll.onmouseover = function(){
        clearInterval(timer);
    }
    scroll.onmouseout = function(){
        timer = setInterval(autoPlay, 10);
    }
}