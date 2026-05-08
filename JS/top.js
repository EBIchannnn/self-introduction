//各種タグ要素所得
let object1 = document.querySelector("#go_submit");
let object1_height=parseInt(window.getComputedStyle(object1).height);
let object1_top;
function loadObject1Top(){
    object1_top=parseInt(window.getComputedStyle(object1).top);
}
let object1_width;
function getObject1Width(){
    object1_width=parseInt(window.getComputedStyle(object1).width);
}
let object1_left;

let object2 = document.querySelector("#go_self");
let object2_width;
function getObject2Width(){
    object2_width=parseInt(window.getComputedStyle(object2).width);
}
let object2_left;
let object2_top=parseInt(window.getComputedStyle(object2).top);
function getObject2Top(){
    object2_top=parseInt(window.getComputedStyle(object2).top);
}

let title = document.querySelector("h1");
let title_height;
let title_margin_top;
let title_margin_bottom;
let title_height_total;
function getTitleHeight(){
    title_height=parseInt(window.getComputedStyle(title).height);
    title_margin_top=parseInt(window.getComputedStyle(title).marginTop);
    title_margin_bottom=parseInt(window.getComputedStyle(title).marginBottom);
    title_height_total=title_height+title_margin_top+title_margin_bottom;
}
let change=document.querySelector("#change");

// let test=document.querySelector("p");

let box=document.querySelector("#link_box");
let box_width;
function getBoxWidth(){
    box_width=parseInt(window.getComputedStyle(box).width);
}
let box_background_width;

let check=true;
function setObjectLeft(){
    object1_left=box_width/2-object1_width/2;
    object2_left=box_width/2-object2_width/2;
    object1.style.left=object1_left+`px`;
    object2.style.left=object2_left+`px`;
}

window.onresize = resizeWindow;
resizeWindow();
function resizeWindow(){
    getTitleHeight();
    getBoxWidth();
    getObject1Width();
    getObject2Width();
    setObjectLeft();
    box_background_width=box_width/4;
    if(check){
        object1.style.top=title_height_total+22+"px";
        object2.style.top=title_height_total+85+"px";
        object1.disabled=true;
        object2.disabled=false;
    }else{
        object1.style.top=title_height_total+85+"px";
        object2.style.top=title_height_total+22+"px";
        object1.disabled=false;
        object2.disabled=true;
    }
}
change.addEventListener("click",()=>{
    if(check){
        object1.disabled=false;
        object2.disabled=true;
        loadObject1Top();
        move(check,object1_left,object2_left,object1_top+30);
        check=false;
    }else{
        object1.disabled=true;
        object2.disabled=false;
        getTitleHeight();
        move(check,object1_left,object2_left,title_height_total+52);
        check=true;
    }
})
function move(check, centerX1, centerX2,centerY){
    change.disabled=true;
    let height=30;
    let speed=0.01;
    let start1, start2;
    if(check){
        start1=-1.57;
        start2=1.5;
    }else{
        start1=1.57;
        start2=4.71;
    }
    let a=setInterval(function(){
        start1+=speed;
        start2+=speed;
        // object1
        let x1=centerX1+box_background_width*Math.cos(start1);
        let y1=centerY+height*Math.sin(start1);
        object1.style.fontSize=y1/6-((centerY-30)/6-10)+"px";
        object1_width=parseInt(window.getComputedStyle(object1).width);
        object1_left=box_width/2-object1_width/2;
        object1.style.left=`${x1}px`;
        object1.style.top=`${y1}px`;
        // object2
        let x2=centerX2+box_background_width*Math.cos(start2);
        let y2=centerY+height*Math.sin(start2);
        object2.style.fontSize=y2/6-((centerY-30)/6-10)+"px";
        object2_width=parseInt(window.getComputedStyle(object2).width);
        object2_left=box_width/2-object2_width/2
        object2.style.left=`${x2}px`;
        object2.style.top=`${y2}px`;
        // テスト表示
        // test.innerText = `object1 y: ${y1}, object2 y: ${y2}`;
        // 停止条件
        if(x1<object1_left&&check){
            clearInterval(a);
            object2.style.left = box_width / 2 - object2_width / 2 + "px";
            change.disabled=false;
        }else if(x1>object1_left&&!check){
            clearInterval(a);
            object2.style.left = box_width / 2 - object2_width / 2 + "px";
            change.disabled=false;
        }
    },1);
}
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});