window.onload = () => {
  let bottom = document.querySelector(".bottom");
  let top = document.querySelector(".top");
  let scroll;
  let starBg = document.querySelector(".starBg");
  let title = document.querySelector(".title");
  let topBtn = document.querySelector(".topBtn");

    setTimeout(()=>{
    window.scrollTo({
      top : bottom.offsetTop,
      behavior : 'smooth',
    });
  },1500)

  
  let _text;
  for(let i=0; i < title.querySelectorAll('div').length; i++){
    _text = title.querySelectorAll('div')[i];
    console.log("Text : " + _text);

    TweenMax.from(_text, 1, {
      autoAlpha:0,
      delay : Math.random()*0.5,
      ease: Power3.easeInOut,
    });
  }

  TweenMax.from( ".bottom", 2.5, {
        scale : .7,
        y:100,
        delay : 1,
        ease:Power3.easeInOut 
    });
  
  window.addEventListener("scroll", (event)=>{
    scroll = window.scrollY;
    console.log(scroll);
    starBg.style.transform = "translateY("+ -scroll/3 +"px)";
    title.style.transform = "translateY("+ scroll/1.7 +"px)";
  });

  

  topBtn.onclick = ()=>{
    window.scrollTo({
      top : top.offsetTop,
      behavior : 'smooth',
    });
  }






}