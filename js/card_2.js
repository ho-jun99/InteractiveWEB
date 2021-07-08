

window.onload = () => {
  let _cards = document.querySelectorAll(".cardItem");
  let allBtn = document.querySelectorAll("button");
  let windowWidth, windowHeight;
  let pageNum = 0;


  for( let i=0; i<allBtn.length; i++ ){
    allBtn[i].onclick = () => {
      pageNum = i;
      console.log(i);
      shuffleCard();
    }
  }

  window.addEventListener('resize',()=>{
    resize();
  });

  let resize = () => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    cardSetting();
  }

  TweenMax.from("h1", 1, {
    top : -50,
    autoAlpha :0,
    ease : Power3.easeOut,
  });

  allBtn.forEach((item,index)=>{
    TweenMax.from(item, .4, {
      top : 100,
      autoAlpha :0,
      ease : "elastic.out(1, 0.3)",
      delay : index * .1,
    })
  })

  TweenMax.set("section", {perspective: 400});
  let shuffleCard = () => {
    if(pageNum == 0 ) {
      cardSetting();
    }else if ( pageNum == 1) {
      cardRandom();
    }else if (pageNum == 2) {
      type2();
    }else if (pageNum ==3) {
      type3();
    }

  }

  let type3 = () => {
    _cards.forEach(function(item, i){
          TweenMax.to(item, .7, {
              top : windowHeight / 2 + i * 30 - 100,
              left : windowWidth / 2 - i * 80 ,
              rotationX : 0,
              rotationY : -10 * i,
              rotationZ : 20 * i,
              ease : Power4.easeInOut, 
              delay : i * .15
          })
      })
  }

  let type2 = () => {
      _cards.forEach(function(item, i){
          TweenMax.to(item, 1, {
              top : Math.random() * (windowHeight - 300) + 100,
              left : Math.random() * (windowWidth - 300) + 100, 
              rotationX : "random(-60,60)", //Math.random()*30 
              rotationY : "random(-60,60)", 
              rotationZ : "random(-90,90)",
              //scale : Math.random() * .6 + .6,
              ease : Power4.easeInOut, 
              delay : "random(0,.5)"
          })
      })
  }


  let cardSetting = () => {
    _cards.forEach((item,index)=>{
      TweenMax.to( item, .5, {
        top : windowHeight / 2 - (index * 40),
        left : windowWidth / 2 + (index * 40 - 200),
        rotationX : 0,
        rotationY : 0,
        rotationZ : 0,
        ease : Power3.easeInOut,
        delay : index * .2
      });
    });
  }

  let cardRandom = () => {
        _cards.forEach(function(item, i){
            TweenMax.to(item, .3, {
              top : Math.random() * (windowHeight - 300) + 100,
              left : Math.random() * (windowWidth - 300) + 100, 
                rotationX : Math.random()*180,
                rotationY: Math.random()*180,
                rotationZ: 0,
                ease : "rough", 
                delay : i * .1
            });
        });
  }

  resize();

}