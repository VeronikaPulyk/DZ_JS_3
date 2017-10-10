// 1
document.getElementById('step1').onclick = f1;
function f1 (){
var r = ['red', 'green', 'blue'];
var p = document.getElementById('new');
p.innerHTML = r;
}

// 2
document.getElementById('step2').onclick = f2;
function f2 (){
var color = ['red', 'green', 'blue'];
var i = document.getElementById('input1').value;
var r = document.getElementById('input2').value;
var p = document.getElementById('new');
p.innerHTML = alert(i+'='+r);
}

// 3
document.getElementById('pop').onclick = f3;
function f3 (){
var r = ['red', 'green', 'blue'];
r.pop();
var p = document.getElementById('new');
p.innerHTML = r;
}

// 4
document.getElementById('shift').onclick = f4;
function f4 (){
var r = ['red', 'green', 'blue'];
r.shift();
var p = document.getElementById('new');
p.innerHTML = r;
}

// 5
document.getElementById('push').onclick = f5;
function f5 (){
var r = ['red', 'green', 'blue'];
r.push("white");
var p = document.getElementById('new');
p.innerHTML = r;
}