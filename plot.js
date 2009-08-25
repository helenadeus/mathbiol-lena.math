//plot.js is part of mathbiol.org; Please see documentation there
//Helena F. Deus (helenadeus@gmail.com)
//200809

function plot(x,y,ctx){
	//plot(x,y,ctx) creates a plot canvas and plot x and y or a vector x against its indexes as y
	//ctx is the canvas element where plot is going to be placed
	//x and y are the vectors to plot


if(!y){
	y=[];
	for (var i in x) {
		y.push(i);
	}
}

if(x.length!=y.length){
alert("x and y must have the same length.");
}
//create the canvas
if(!ctx)
	{ctx=document.createElement('canvas');
	ctx.width='1000';
	ctx.height='800';
	ctx.setAttribute('style','position: absolute; top: 10px; left: 40px; z-index: 1');
	
	
	document.body.appendChild(ctx);
	var context = ctx.getContext('2d');
		context.fillStyle = "black";
		context.strokeRect(0,0,ctx.width,ctx.height);
	}

//create the axis
//y-axis example



yn=y.length;//this is the number of ticks for x
y_max = Math.max.apply( Math, y);
y_min = Math.min.apply( Math, y);
y_jump = (y_max-y_min)/yn;
height_jump = ctx.height/yn;
k=0;
for (var yy=y_max; yy>y_min; yy=yy-y_jump) {
	var dY = document.createElement("div");
		dY.setAttribute("style","overflow: hidden; position: absolute; top: "+(height_jump*k)+"px; left: 0px; font-size: 12px; z-index: 10; color: black; text-align: right; width: 30px;");
		dY.innerHTML = Math.round(yy*100)/100;
		document.body.appendChild(dY);
		//also draw a line for the y axis at this point
		context.beginPath();
		context.moveTo(0,(height_jump*k));
		context.lineTo(ctx.width,(height_jump*k));
		context.fillStyle = "grey";
		context.stroke();

	k++;
}


//find the x-axis max and mix
xn=x.length-1;//this is the number of ticks for x
x_max = Math.max.apply( Math, x);
x_min = Math.min.apply( Math, x);
x_jump = (x_max-x_min)/xn;
width_jump = ctx.width/xn
j=0;


for (var xx=x_min; xx<=x_max; xx=xx+x_jump) {
var dX = document.createElement("div");
	dX.setAttribute("style","overflow: hidden; position: absolute; text-align: center; width: 20px; top: "+(parseFloat(ctx.style.top)+ctx.height)+"px; left: "+(parseFloat(ctx.style.left)+width_jump*j-5)+"px; font-size: 12px; color: black;");
	dX.innerHTML = Math.round(xx*100)/100;
	document.body.appendChild(dX);
	j++;
}

//and now... finally... plot!
//and now... finally... plot!
for (var pp=0; pp<x.length; pp++) {
		var x_point = x[pp]*ctx.width/x_max;
		var y_point = ctx.width-(y[pp]*ctx.height/y_max);
		
		var radius = 2;
		var startAngle = 0;
		var endAngle = Math.PI*2;
		var clockwise = true;

		context.strokeStyle = "blue";
		context.arc(x_point,y_point,radius,startAngle,endAngle,true);
		context.stroke();
	}
}