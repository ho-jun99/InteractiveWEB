

window.onload = () => {
  let _cards = document.querySelectorAll(".cardItem");
  let RandomBtn = document.querySelectorAll("button")[0];
  let ResetBtn = document.querySelectorAll("button")[1];
  let windowWidth, windowHeight;


  RandomBtn.onclick = () => {
    console.log("clicked Random");
    cardRandom();
  }

  ResetBtn.onclick = () => {
    console.log("clicked Reset");
    cardSetting();
  }


  window.addEventListener('resize',()=>{
    resize();
  });

  let resize = () => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    cardSetting();
  }

  let cardSetting = () => {
    _cards.forEach((item,index)=>{
      TweenMax.to( item, .5, {
        top : windowHeight / 2 - (index*40),
        left : windowWidth / 2 + (index*40 - 200),
        rotation : 0,
        ease : Power3.easeInOut,
        delay : index * .2
      });
    });
  }

  let cardRandom = () => {
        _cards.forEach(function(item, i){
            TweenMax.to(item, .7, {
                top : Math.random() * windowHeight,
                left : Math.random() * windowWidth, 
                rotation : Math.random()*180, 
                ease : Power4.easeInOut, 
                delay : i * .1
            });
        });
  }

  resize();

}