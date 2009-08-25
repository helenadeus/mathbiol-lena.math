//linspace.js Generate linearly spaced vectors
//Helena F. Deus (helenadeus@gmail.com)
//200809

function linspace(d1,d2,n) {
		
	j=0;
	var L = new Array();
	
	while (j<=(n-1)) {
	
		var tmp1 = j*(d2-d1)/(Math.floor(n)-1);
		var tmp2 = Math.ceil((d1+tmp1)*10000)/10000;
		L.push(tmp2);
		j=j+1;
	}
	
	return L;
 }