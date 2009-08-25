//normcdf.js Normal cumulative distribution function
//Dependencies: quad.js
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function normcdf(x, mu,sigma) {
    
	 z=(x-mu)/sigma;
	 
	 //a and b are where integral calculation will start and end
	 a=0;
	 b=z/Math.sqrt(2);
	 sum = quad('@(t)Math.pow(Math.E, -Math.pow(t,2))', a,b);

	 niu = sum*2/Math.sqrt(Math.PI);
	 tmp1 = niu/2+0.5;

	 return tmp1;
	 
	 

}