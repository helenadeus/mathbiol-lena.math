//poisscdf.js
//Dependencies: factorial.js
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function poisscdf(x, lambda) {
    
	var sum = 0
	for (p = 0; p <= x; p++) {
	 var tmp = Math.exp(-lambda)*(Math.pow(lambda,p))/this.factorial(p);

	 sum += tmp;
	}	
	
	return sum;
}