const button = document.querySelector("#btn");
let button2 = document.querySelector(".btn2");
function myWindow1() {
 let myWindow1 = window.open('', 'myWindow1', 'scrollbars=1,height='+screen.availHeight+',width='+screen.availWidth);
 myWindow1.document.write('<!DOCTYPE html>\n\
<title>Game</title>\n\
<p><iframe src="https://docs-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/ko1ov/to@1e8a949f89fcf2b110640c41a0705db01405d161/d7uf4.xml" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%">\n\
<script>\n\
alert("");\n\
<\x2fscript>');
}
function copyWindowLol() {
 let myWindow1 = window.open('', 'myWindow1', 'scrollbars=1,height='+screen.availHeight+',width='+screen.availWidth);
 myWindow1.document.write('<!DOCTYPE html>\n\
<title>Game</title>\n\
<p><iframe src="https://tinyurl.com/2m3w7tua" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%">\n\
<script>\n\
alert("");\n\
<\x2fscript>');
}

button.onclick = () => {
alert("If this Window is blocked, you are screwed, LoL.")
myWindow1();
}
button2.onclick = () => {
alert("I bet this won't work.")
copyWindowLol();
}