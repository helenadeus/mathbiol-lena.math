//interp1.js is part of mathbiol.org; Please see documentation there
//Helena F. Deus (helenadeus@gmail.com)
//200809

function interp1(x,y,p){
	//interp1 calculates p by linear interpolation of x and y
	//Helena F Deus, 01 Apr 2009 **helenadeus@gmail.com**
	if(x.length!=y.length)
	{
		return false;
	}
	else {
		x.sort();
		big_a=[];small_a=[];big_b=[];small_b=[];
		//start by finding the closest points
		for (var i=0; i<x.length; i++) {
			if(x[i]>p)
			{
			big_a.push(x[i]);
			big_b.push(y[i]);
			}
			if(x[i]<=p)
			{
			small_a.push(x[i]);
			small_b.push(y[i]);
			}
		}

		//the points of interest will be the last of small and the first of big
		a = [small_a[small_a.length-1], big_a[0]];
		b = [small_b[small_b.length-1], big_b[0]];
		q=b[0]+(p-a[0])*((b[1]-b[0])/(a[1]-a[0]));

		return q;
	}
}