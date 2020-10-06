window.onload = function () {
  var liArr = document.getElementById("fenlei2").getElementsByTagName("li");
  var spanArr = document.getElementById("act").getElementsByTagName("div");
  
  for(var i = 0;i < liArr.length;i++){
    liArr[i].index = i;
    liArr[i].onmouseover = function () {            
      for(var j = 0; j < liArr.length; j++){
      spanArr[j].className = "hid";
    }
      spanArr[this.index].className = "show";
    }
    liArr[i].onmouseout = function(){
      spanArr[this.index].className = "hid";
    }

  }
  var erweima = document.getElementById("ma");
  var mahou = document.getElementById("mahou");
  erweima.onmouseover = function () {
    mahou.className = "show";
  }
  erweima.onmouseout = function () {
    mahou.className = "hid";
  }

  var tui2 = document.getElementsByClassName("tui2");
  var looking1 = document.getElementById("looking1");
  tui2[0].onmouseover = function () {
    looking1.className="show";
  }
  tui2[0].onmouseout = function () {
    looking1.className = "hid";
  }

  var tui3 = document.getElementsByClassName("tui3");
  var looking2 = document.getElementById("looking2");
  tui3[0].onmouseover = function () {
    looking2.className="show";
  }
  tui3[0].onmouseout = function () {
    looking2.className = "hid";
  }

  var tui4 = document.getElementsByClassName("tui4");
  var looking3 = document.getElementById("looking3");
  tui4[0].onmouseover = function () {
    looking3.className="show";
  }
  tui4[0].onmouseout = function () {
    looking3.className = "hid";
  }

  /*图片轮换*/
  var zai = 0;
  var hou = 0;
  var guntu = document.getElementById("lunbotu").getElementsByTagName("img");
  var gundians = document.getElementById("bianhao").getElementsByTagName("span");
  var next=document.getElementById("next");
  var prev=document.getElementById("prev");
  var gun = document.getElementById("lunbotu");
  


  for(var i = 0; i < gundians.length; i++){
    gundians[i].index = i;
    gundians[i].onmouseover = function(){
      for(var j = 0; j < gundians.length; j++){
        guntu[j].className = "hid";       
      }
      guntu[this.index].className = "show";
      zai = this.index;
    }
  }
  next.onclick=function(){  //next点击
    if(zai===4){
      zai=0;
    }else{
      zai=zai+1;
    }
    for(var j = 0; j < gundians.length; j++){
      guntu[j].className = "hid";  
      if(j===zai){
        guntu[j].className = "show";  
      }
    }
  }
  prev.onclick=function(){  //prev点击
    if(zai===0){
      zai=4;
    }else{
      zai=zai-1;
    }
    for(var j = 0; j < gundians.length; j++){
      guntu[j].className = "hid";  
      if(j===zai){
        guntu[j].className = "show";  
      }
    }
  }

  function play(){
    timer=setInterval(function(){
      next.onclick();
    },4000)
  }
  function stop(){
    clearInterval(timer);
  }
  gun.onmouseover = stop;
  gun.onmouseout = play;
  play();




  
  
  
    
  
    
  
  

  
  /*var liArr = document.getElementById("fenlei2").getElementsByTagName("li");
    var spanArr = document.getElementById("act").getElementsByTagName("div");
    for(var i = 0;i < liArr.length;i++){
      liArr[i].index = i;
      liArr[i].onmouseover = function () {            
        for(var j = 0; j < liArr.length; j++){
          spanArr[j].className = "hid";
        }
        spanArr[this.index].className = "show";
      }
      liArr[i].onmouseout = function(){
      spanArr[this.index].className = "hid";
    }*/
}