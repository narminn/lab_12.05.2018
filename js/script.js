var sliderImg=["img/1.jpg","img/2.jpg","img/3.jpg","img/1.jpg","img/2.jpg"];
var sliderText=["Nurlan","Elvin","Emin","Naib","Mustafa"];

var pencere=document.querySelector(".pencere");
var lent=document.querySelector(".lent");
lent.style.width=600*sliderImg.length+"px";

for (var i = 0; i < sliderImg.length; i++) {
  var item=document.createElement("div");
  // item.setAttribute("class","item");
  item.className="item";
  var img=document.createElement("img");
  // img.setAttribute("src",sliderImg[i]);
  img.src=sliderImg[i];
  var text=document.createElement("div");
  text.setAttribute("class","text");
  var p=document.createElement("p")
  p.innerHTML=sliderText[i];
  lent.appendChild(item);
  item.appendChild(img);
  item.appendChild(text);
  text.appendChild(p);
}



var left=document.querySelector(".left");
var right=document.querySelector(".right");
left.addEventListener("click",pullLeft);
right.addEventListener("click",pullRight);
var count=0;
function pullRight(){
  if(count==sliderImg.length-1){
    count=0;
    lent.style.left=-(600*count)+"px";
  }
    else{
      count++;
      lent.style.left=-(600*count)+"px";

    }
    console.log(count);
  }
  function pullLeft(){
    if(count==0){
      count=sliderImg.length-1;
      lent.style.left=-(600*count)+"px";
    }
    else{
      count--;
      lent.style.left=-(600*count)+"px";

}
    console.log(count);
  }
