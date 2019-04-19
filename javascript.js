<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>测试实例</title>

</head>
 
<body>
<!-- <button onclick="myFunction()">点我</button> -->
<p>点击按钮检测年纪</p>
年纪：<input id="age" value="18"/>
<button onclick="myFunction()">点击按钮</button>
<p id="demo"></p>

<p>如果时间早于20:00，会获得问候"Good day".</p>
<button onclick="myFunction()">点击这里</button>
<p id="demo"></p>




</body>
<script>
// function myFunction()
// {
    // alert("我不知道怎么跟你解释，因为我是一只小猫咪");
// }

function myFunction()
{
	var age,voteable;
	age=document.getElementById("age").value;
	voteable=(age<18)?"年纪太小":"年纪已达到";
	document.getElementById("demo").innerHTML=voteable;
}


function myFunction(){
	var x="";
	var time=new Date().getHours();
	if (time<20){
		x="Good Day";
	}
	else{
		x="Good evening"
	}
	document.getElementById("demo").innerHTML=x;
}      //if语句

cars=["bmw","volvo","saab","ford"]
for (var i=0;i<vars.length;i++){
	document.write(cars[i]+"<br>");
}




</script>
</html>
