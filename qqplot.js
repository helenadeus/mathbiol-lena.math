//qqplot.js is part of mathbiol.js; please find documentation and examples there
//Dependencies:  csquantiles.js; interp1.js
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function qqplot(x,y,ctx) {

	if(!ctx)
		{ctx=document.createElement('canvas');
		ctx.width='400';
		ctx.height='400';
		document.body.appendChild(ctx);
		}

	if(!y){
		alert('Please input y');
	}
	else {
		var ctx2d = ctx.getContext('2d');
		m = x.length;
		n = y.length;
		
		x=x.sort();max_x=x[x.length-1];
		y=y.sort();max_y=y[y.length-1]

		
		if(m==n){
		for (var i=0; i<m; i++) {
			var x_point = ctx.width-(x[i]*ctx.width/max_x);
			var y_point = y[i]*ctx.height/max_y;
			var radius = 3;
			var startAngle = 0;
			var endAngle = Math.PI*2;
			var clockwise = true;

			ctx2d.arc(x_point,y_point,radius,startAngle,endAngle,true);
			ctx2d.stroke();
		}
		}
		else {
			//build p with the associated quantiles using the larger one
			if(m>n) {
			var larger = x;
			var smaller = y;
			}
			else {
			var	larger = y;
			var smaller = x;
			}
			p=[];
			for (var l=1; l<=smaller.length; l++) {
				  p.push((l-0.5)/smaller.length);
			}
			xs=csquantiles(larger,p);

		}
	}
}
