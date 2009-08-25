//std.js: Calculate the standard deviation of a distribution
//Dependencies: mean.js - available at mathbiol.js
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function std(data) {
    var sum = 0; 
	mean_ = mean(data);
	for (dt = 0; dt < data.length; dt++) {
         sum += Math.pow((data[dt]-mean_),2);
    }

	var stdev = Math.pow(((1/(data.length-1))*sum),1/2);
	return stdev;
}