window.onload = function () {
  var liArr = document.getElementById("fenlei2").getElementsByTagName("li");
  var spanArr = document.getElementById("act").getElementsByTagName("div");
  
  for(var i=0;i<liArr.length;i++){
    liArr[i].index = i;
    liArr[i].onmouseover = function () {            
    for(var j=0;j<liArr.length;j++){
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
}