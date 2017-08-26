var slideImg = [{
  img: "img/slideshowBilder/1.jpg"
}, {
  img: "img/slideshowBilder/2.jpg"
}, {
  img: "img/slideshowBilder/3.jpg"
}, {
  img: "img/slideshowBilder/4.jpg"
}, {
  img: "img/slideshowBilder/5.jpg"
}, {
  img: "img/slideshowBilder/6.jpg"
}, {
  img: "img/slideshowBilder/7.jpg"
}, {
  img: "img/slideshowBilder/8.jpg"
}, {
  img: "img/slideshowBilder/9.jpg"
}, {
  img: "img/slideshowBilder/10.jpg"
}, {
  img: "img/slideshowBilder/11.jpg"
}, {
  img: "img/slideshowBilder/12.jpg"
}, {
  img: "img/slideshowBilder/12.jpg"
}, {
  img: "img/slideshowBilder/14.jpg"
}, {
  img: "img/slideshowBilder/16_Markus.jpg"
}, {
  img: "img/slideshowBilder/18_Ronny.jpg"
}, {
  img: "img/slideshowBilder/19.jpg"
}, {
  img: "img/slideshowBilder/20.jpg"
}, {
  img: "img/slideshowBilder/21.jpg"
}, {
  img: "img/slideshowBilder/22.jpg"
}, {
  img: "img/slideshowBilder/23.jpg"
}, {
  img: "img/slideshowBilder/24.jpg"
}, {
  img: "img/slideshowBilder/25.jpg"
}, {
  img: "img/slideshowBilder/26.jpg"
}, {
  img: "img/slideshowBilder/27_Thomas.jpg"
}, {
  img: "img/slideshowBilder/28_Thomas.jpg"
}, {
  img: "img/slideshowBilder/29_Geri.jpg"
}, {
  img: "img/slideshowBilder/30_Geri.jpg"
}, {
  img: "img/slideshowBilder/30_Roman.jpg"
}, {
  img: "img/slideshowBilder/31_Roman.jpg"
}, {
  img: "img/slideshowBilder/Logo.jpg"
}, {
  img: "img/slideshowBilder/xx.jpg"
}];

function createSlideArray() {
  slideImg.sort(function(a, b){return 0.5 - Math.random()});
  for (let i = 0; i < slideImg.length; i++) {
    console.log(slideImg[i].img);
    document.getElementById("slideshowContainer").innerHTML += "<li><img class=\"img-responsive\"src=\"" + slideImg[i].img + "\"></li>";
  }
  $(document).ready(function() {
    $('.bxslider').bxSlider({
      auto: true,
      autoControls: true,
      randomStart:true,
      pager: false
    });
  });
}
