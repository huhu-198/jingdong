window.onload = function(){
    var liarr = document.getElementsByClassName("fenlei2").getElementsByTagName("li");
    //var spanarr = document.getElementsByClassName("act1");
    
    for(var i = 0;i<liarr.length;i++){
      liarr[i].index = i;
      alert("i");
      liarr[i].onmouseover = function () { //鼠标停留
        for (var j =0;j<liarr.length;j++){  //清空
          liarr[j].className="out1";
         // spanarr[j].className="hid";
        }
        alert(this.className)
        this.className="on1"; //改变该元素的class
        //spanarr[this.index].className="show";
      }
    }
}