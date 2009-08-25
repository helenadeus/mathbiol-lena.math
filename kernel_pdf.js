//kernel_pdf.js is part of mathbiol.org; Please see documentation there
//Helena F. Deus (helenadeus@gmail.com)
//200809

function kernel_pdf(data, binF) {
	
	if(!binF) // number of bins
	{binF = 50;
	}
	var n = data.length;
	//get the data min
	var min = Math.min.apply(Math, data);
	var max = Math.max.apply(Math, data);
	//get the positions of the bins
	var x = linspace(min,max,binF);

	var h =1.06*Math.pow(n,(-1/5));
	h=Math.floor(h*10000)/10000;

	
	var fhat = new Array();
	for (var i=0; i<n; i++) {
		var f = new Array();
		for (var j=0; j<x.length; j++) {
			 
			 var tmp1 = (-1/(2*Math.pow(h,2)));
			 var tmp2 = Math.pow((x[j]-data[i]),2);
			 var tmp3 = tmp1*tmp2;
			 var tmp4 = Math.pow(Math.E, tmp3)/Math.sqrt(2*Math.PI)/h
			 
			 var tmp5 = tmp4/n;
			 if(!fhat[j]) {	fhat[j] = 0};
			 fhat[j] = (fhat[j] + tmp5);
		}
		
	}
	return fhat;
}