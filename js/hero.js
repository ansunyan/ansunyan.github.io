//Parallax hero
window.addEventListener('scroll', scrollFunc);

function scrollFunc() {
    var windowScroll = this.scrollY; 

    var $fallingCereal = document.getElementsByClassName('hero-top')[0];
    $fallingCereal.style.transform = 'translateY(-' + windowScroll/70 + '%)';

//    var $cerealBowl = document.getElementsByClassName('character')[0];
//    $cerealBowl.style.transform = 'translateY(' + windowScroll/50 + '%)';

    var $sunray = document.getElementsByClassName('bubbles')[0];
    $sunray.style.transform = 'translateY(' + windowScroll/25 + '%)';

}