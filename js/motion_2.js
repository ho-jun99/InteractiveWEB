

window.onload = () => {
  let album = document.querySelectorAll(".album");
  let prevBtn = document.getElementsByTagName("button")[0];
  let nextBtn = document.getElementsByTagName("button")[1];
  let contentWrap = document.querySelector(".contentWrap");
  let diskinner = document.querySelectorAll(".disk_inner");
  let curPageNum = 0;
  let totalPage = album.length-1;
  let pointBtn = document.querySelectorAll(".pointWrap li");

  let bgArray = new Array();
bgArray[0] = ["#0272a4","#f6a564"];
bgArray[1] = ["#b6bfc8","#36595b"];
bgArray[2] = ["#e58e82","#6f569f"];

  let albumChangFunc = () => {
    for(let i=0; i<=totalPage; i++){
      album[i].classList.remove("active");
      pointBtn[i].classList.remove("active");
    }
    album[curPageNum].classList.add("active");
    pointBtn[curPageNum].classList.add("active");
    contentWrap.style.background = "linear-gradient(120deg,"+ bgArray[curPageNum][0] +", "+ bgArray[curPageNum][1] + ")";
    diskinner[curPageNum].style.background = bgArray[curPageNum][1];
  }

  for(let i=0; i<= totalPage; ++i){
    console.log("running");
    pointBtn[i].onclick = () => {
      curPageNum = i;
      albumChangFunc();
      console.log("curPageNum : " + curPageNum)
    }
  }

  nextBtn.addEventListener("click",()=> {
    if(curPageNum < totalPage){
      curPageNum++;
    } else{
      curPageNum =0;
    }
    console.log(curPageNum);
    albumChangFunc();
  });

  

  prevBtn.addEventListener("click",()=>{

    if(curPageNum <= 0 ){
      curPageNum = totalPage;
    }else {
      curPageNum--;
    }
    console.log(curPageNum);
    albumChangFunc();
  });

  albumChangFunc();

}


