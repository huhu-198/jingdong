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
    looking1.className = "show";
  }
  tui2[0].onmouseout = function () {
    looking1.className = "hid";
  }

  var tui3 = document.getElementsByClassName("tui3");
  var looking2 = document.getElementById("looking2");
  tui3[0].onmouseover = function () {
    looking2.className ="show";
  }
  tui3[0].onmouseout = function () {
    looking2.className = "hid";
  }

  var tui4 = document.getElementsByClassName("tui4");
  var looking3 = document.getElementById("looking3");
  tui4[0].onmouseover = function () {
    looking3.className = "show";
  }
  tui4[0].onmouseout = function () {
    looking3.className = "hid";
  }

  /*图片轮换*/
  var zai = 0;
  var hou = 0;
  var guntu = document.getElementById("lunbotu").getElementsByTagName("img");
  var gundians = document.getElementById("bianhao").getElementsByTagName("span");
  var next = document.getElementById("next");
  var prev = document.getElementById("prev");
  var gun = document.getElementById("lunbo");
  


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
      zai = 0;
    }else{
      zai = zai+1;
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
      zai = 4;
    }else{
      zai = zai - 1;
    }
    for(var j = 0; j < gundians.length; j++){
      guntu[j].className = "hid";  
      if(j===zai){
        guntu[j].className = "show";  
      }
    }
  }

  function play(){
    timer = setInterval(function(){
      next.onclick();
    },4000)
  }
  function stop(){
    clearInterval(timer);
  }
  gun.onmouseover = stop;
  gun.onmouseout = play;
  play();
  /*********倒计时**********/
  daojishikaishi();
  setInterval(daojishikaishi,1000);
  function bu0(x){                    //补0
    if(x < 10){
      return "0" + x;
    }else {return x;}
  }
  function daojishikaishi(){
    var now = new Date();
    var thetime = new Date("10 10,2020 20:00:00");
    var t = thetime.getTime()-now.getTime();
    var ts = t/1000;
    var days = 60*60*24;
    var daytrue = ts/days;
    var day = Math.floor(daytrue);
    var hourtrue = (daytrue - day)*24;
    var hour = Math.floor(hourtrue);
    var mintrue = (hourtrue - hour)*60;
    var min = Math.floor(mintrue);
    var strue = (mintrue - min)*60;
    var s = Math.floor(strue);
    var pusht = document.getElementById("t");
    pusht.innerHTML=day + "天" + bu0(hour) + ":" + bu0(min) + ":" + bu0(s);
  }
    /****************图片横向滚动**************/
  var gunleft = document.getElementById("faxian");
  var turn = 1;
  function turnright(){
    if(gunleft.scrollLeft===660 || gunleft.scrollLeft===0){
      turn = 1-turn;                   //左右滚动的实现
    }
    if(turn===1){
      gunleft.scrollLeft++;
    }else if(turn===0){
      gunleft.scrollLeft--;
    }
  }
  gunspeed = setInterval(turnright,30);
  gunleft.onmouseover = function () {
    clearInterval(gunspeed);
  }
  gunleft.onmouseout = function () {
    gunspeed = setInterval(turnright,30);
  }
}



window.onscroll=function () {
  
  /*****回到顶部按钮******/
  var p=0;
  var hui = document.getElementById("hui");
  var righttab = document.getElementById("righttab");
  var h = document.documentElement.scrollTop;
  if(h < 520){
    hui.classList.remove("huifix");
    hui.classList.add("huiab");
    righttab.classList.remove("rightfix");
    righttab.classList.add("rightab");
  }else {
    hui.classList.remove("huiab");
    hui.classList.add("huifix");
    righttab.classList.remove("rightab");
    righttab.classList.add("rightfix");
  }
}
mousescroll(); 
var h = document.documentElement.scrollTop;
var tab = document.getElementById("hearderlist");   
function mousescroll() { 
  var scroll = function (e) { 
    e = window.event; 

    if (e.wheelDelta > 0 & h > 50) {
      hearder.classList.remove("headerab");
      hearder.classList.add("headerfix");
    } 
    if (e.wheelDelta < 0 & h > 50) { 
      hearder.classList.remove("headerfix");
      hearder.classList.add("headerab");
    }         
  }; 
  document.onmousewheel = scroll; 
}
