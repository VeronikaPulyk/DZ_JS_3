// 1
var r = [1, 2, 3, 4, 'five', 6, 'seven'];
document.getElementById('step1').onclick = f1;
function f1 (){
	var p = document.getElementById('new');
	var s = '';
	for (var i = 0; i<r.length; i++) {
		if (r[i] != undefined) {
			s += r[i] + ', ';
		} else {
			s += ', ';
		}
		p.innerHTML = r;
	}
}
f1();

// 2
document.getElementById('step2').onclick = f2;
function f2 (){
	var input1 = parseInt(document.getElementById('input1').value);
	var input2 = document.getElementById('input2').value;
	r[input1] = input2;
	f1();
}

// 3
document.getElementById('pop').onclick = f3;
function f3 (){
	r.pop();
	f1();
	}

// 4
document.getElementById('shift').onclick = f4;
function f4 (){

r.shift();
	f1();

}

// 5
document.getElementById('push').onclick = f5;
function f5 (){
r.push("white");
	f1();

}