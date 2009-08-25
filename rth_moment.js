//rht_moment.js Calculates the rth_moment
//Dependencies: mean
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function rth_moment(data, r) {
    var sum = 0;
	mean_ = mean(data);
	for (dt = 0; dt < data.length; dt++) {
	     sum += Math.pow(data[dt]-mean_, r);
	}
	var S2 = sum/data.length;
	return S2;
}