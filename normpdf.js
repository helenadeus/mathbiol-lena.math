//normpdf.js  Calculate the normal probability density function given x, mu and sigma 
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function normpdf(x, mu, sigma) {
     tmp1 = -Math.pow((x-mu),2)/(2*Math.pow(sigma, 2));
	 tmp2 = Math.pow(Math.E, tmp1);
	 tmp3 = 1/(sigma*(Math.sqrt(2*Math.PI)));
	 norm = tmp3*tmp2;

	 return norm;
}
