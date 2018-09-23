function change1(){
	var d = document.getElementById("d1");
    d.style.backgroundColor = "#a9a9a9";
    window.localStorage.setItem('divBackColor','#a9a9a9');
    var i1 = document.getElementById('i1');
    i1.style.marginTop="-5px";
    document.getElementById('i2').style.marginTop='0px';
    document.getElementById('i3').style.marginTop='0px';
    document.getElementById('i4').style.marginTop='0px';
    document.getElementById('i5').style.marginTop='0px';
    document.getElementById('i6').style.marginTop='0px';
    window.localStorage.setItem('px','i1');
}
function change2(){
	var d = document.getElementById("d1");
    d.style.backgroundColor = "#9370db";
    window.localStorage.setItem('divBackColor','#9370db');
    var i2 = document.getElementById('i2');
    i2.style.marginTop="-5px";
   document.getElementById('i1').style.marginTop='0px';
    document.getElementById('i3').style.marginTop='0px';
    document.getElementById('i4').style.marginTop='0px';
    document.getElementById('i5').style.marginTop='0px';
    document.getElementById('i6').style.marginTop='0px';
    window.localStorage.setItem('px','i2');
}
function change3(){
	var d = document.getElementById("d1");
    d.style.backgroundColor = "#ff0000";
    window.localStorage.setItem('divBackColor','#ff0000');
    var i3 = document.getElementById('i3');
    i3.style.marginTop="-5px";
  document.getElementById('i2').style.marginTop='0px';
    document.getElementById('i1').style.marginTop='0px';
    document.getElementById('i4').style.marginTop='0px';
    document.getElementById('i5').style.marginTop='0px';
    document.getElementById('i6').style.marginTop='0px';
    window.localStorage.setItem('px','i3');
}
function change4(){
	var d = document.getElementById("d1");
    d.style.backgroundColor = "#87cfeb";
    window.localStorage.setItem('divBackColor','#87cfeb');
    var i4 = document.getElementById('i4');
    i4.style.marginTop="-5px";
   document.getElementById('i2').style.marginTop='0px';
    document.getElementById('i3').style.marginTop='0px';
    document.getElementById('i1').style.marginTop='0px';
    document.getElementById('i5').style.marginTop='0px';
    document.getElementById('i6').style.marginTop='0px';
    window.localStorage.setItem('px','i4');
 }
function change5(){
	var d = document.getElementById("d1");
    d.style.backgroundColor = "#ff8d00";
    window.localStorage.setItem('divBackColor','#ff8d00');
    var i5 = document.getElementById('i5');
    i5.style.marginTop="-5px";
    document.getElementById('i2').style.marginTop='0px';
    document.getElementById('i3').style.marginTop='0px';
    document.getElementById('i4').style.marginTop='0px';
    document.getElementById('i1').style.marginTop='0px';
    document.getElementById('i6').style.marginTop='0px';
    window.localStorage.setItem('px','i5');
}
 function change6(){
	var d = document.getElementById("d1");
    d.style.backgroundColor = "#7cfd00";
    window.localStorage.setItem('divBackColor','#7cfd00');
    var i6 = document.getElementById('i6');
    i6.style.marginTop="-5px";
    document.getElementById('i2').style.marginTop='0px';
    document.getElementById('i3').style.marginTop='0px';
    document.getElementById('i4').style.marginTop='0px';
    document.getElementById('i5').style.marginTop='0px';
    document.getElementById('i1').style.marginTop='0px';
    window.localStorage.setItem('px','i6');
 }
 window.onload= function colorLoad()
 {
   document.getElementById("d1").style.backgroundColor=window.localStorage.getItem('divBackColor');
   document.getElementById(window.localStorage.getItem('px')).style.marginTop='-5px';
 }

