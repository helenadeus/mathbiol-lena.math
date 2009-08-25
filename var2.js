//var2.js  Variance of a distribution
//Dependencies: mean.js - available at mathbiol.org
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20, updated 090824

function var2(data) {
    var sum = 0;
	mean_ = mean(data);
	for (dt = 0; dt < data.length; dt++) {
	     sum += Math.pow(data[dt]-mean_, 2);
	}
	var S2 = sum/(data.length-1);
	return S2;
}

function chunk() {
//trying to upodate different chunks
var chunk = 123;
return chunk;
}