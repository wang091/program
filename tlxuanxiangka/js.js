var tlboxs=document.getElementById('tl1');
var tlbox=tlboxs.getElementsByClassName('tlbox');
var title=tlboxs.getElementsByClassName('title');
var contentWidth=590;
var titleWidth=60;
for(var i=0;i<title.length;i++){
   
    title[i].index=i;
    title[i].onclick=function(){
        n=this.index;
        for(var i=0;i<tlbox.length;i++){
            if(i<= n){
                tlbox[i].style.left=i*titleWidth+'px';
            }else{
                tlbox[i].style.left=i*titleWidth+contentWidth+'px';
            }
            
        }
    }
}
// 点击的序号为n则
// tlbox序号小雨等于n的时候
// tlbox的left值计算公式为序号*titleWidth
// tlbox序号大于n 时候
// tlbox的left值计算公式为序号*titleWidth+contentWidth
// 点击第0个标题
// 0 650 710 770
// // 点击第1个标题
// 0 60 710 770
// // 点击第2个标题
// 0 60 120 770
// 点击第3个标题
// 0 60 120 180
// 