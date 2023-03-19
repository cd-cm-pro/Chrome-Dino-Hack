// 아래 코드를 복사해서 chrome://dino 들어가서 시작할 때 아래 코드 실행하세요.
// Copy the code below and run the code below when starting chrome://dino.




document.querySelector("#buttons").innerHTML=""
document.querySelector("#buttons").style.opacity="1"
var gameoverdef = Runner.instance_.gameOver
/* input 생성 */
var input = document.createElement('input');
input.type = 'text';
input.id = 'input';
input.placeholder = '속도업 숫자 입력';
document.querySelector("#buttons").appendChild(input);
/* "속도 업" 버튼 만들기 onclick="Runner.instance_.setSpeed(parseInt(input))" */
var button = document.createElement('button');
button.innerHTML = '속도 변경';
button.onclick = function() {
  Runner.instance_.setSpeed(parseInt(input.value));
};
document.querySelector("#buttons").appendChild(button);
/* br생성 */
var br = document.createElement('br');
document.querySelector("#buttons").appendChild(br);
/* "무적 켜기" 버튼 만들기 onclick="Runner.instance_.gameOver = function(){};" */
var button = document.createElement('button');
button.innerHTML = '무적 켜기';
button.onclick = function() {
  Runner.instance_.gameOver = function() {};
};
button.style.left="0px";
document.querySelector("#buttons").appendChild(button);
/* "죽기" 버튼 만들기 onclick="a = confirm("진짜로 죽겠습니까? 그러면 새로고침이 됩니다.");if(a == true){location.reload()}" */
var button = document.createElement('button');
button.innerHTML = '무적 끄기';
button.onclick = function() {
    Runner.instance_.gameOver = gameoverdef
};
document.querySelector("#buttons").appendChild(button);
/* br 만들기 */
var br = document.createElement('br');
document.querySelector("#buttons").appendChild(br);
/* input 만들기 */
var input2 = document.createElement('input');
input2.type = 'text';
input2.id = 'input';
input2.placeholder = '중력 수 입력';
document.querySelector("#buttons").appendChild(input2);
/* "중력 변경" 버튼 만들기 onclick="Runner.instance_.tRex.config.GRAVITY = parseInt(input.value)" */
var button = document.createElement('button');
button.innerHTML = '중력 변경';
button.onclick = function() {
  Runner.instance_.tRex.config.GRAVITY = parseInt(input2.value);
};
document.querySelector("#buttons").appendChild(button);
/* input, button 스타일을 pos:abs; */
var style = document.createElement('style')
style.innerHTML = `
button, input {
position:absolute;
}
button {
width:150px;
left:200px;
}
`
document.body.appendChild(style)
/* document.querySelector("#main-frame-error > div.runner-container").style.transform = 0 */
document.querySelector('#main-frame-error > div.runner-container').style.transform = "none";
