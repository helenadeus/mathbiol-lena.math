//cov.js Calculate the co-variance of a distribution
//Dependencies: mean.js - available at mathbiol.org
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function cov(x,y) {
    var sum	= 0;
	if(x.length!=y.length)
		{alert("sorry... x and y must have the same length for cov to work :-(");}
	else {
	    var n = x.length;
		var mean_x = mean(x);
		var mean_y = mean(y);
		
		for (co = 0; co < n; co++) {
	        sum += (x[co]-mean_x)*(y[co]-mean_y);
	    }

		var cov_ = sum/(n-1);
		return cov_;
	}
}