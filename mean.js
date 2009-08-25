//mean.js Calculate the mean of an array
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function mean(data) {
    sum = 0;
	for (d = 0; d < data.length; d++) {
        sum +=data[d];
    }
	avg = sum/data.length;
	return avg;
}