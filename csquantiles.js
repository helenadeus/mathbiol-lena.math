//csquantiles.js requires interp1, available at http://code.google.com/p/mathbiol
//Helena F Deus (helenadeus@gmail.com), 090820


function csquantiles(x,p){
//Helena F Deus, Apr 4, 2009 ** helenadeus@gmail.com
//given a random vector x and a quantile vector p with size m, csquantiles will interpolate each value of p from x
//needs interp1

//create a vector with the quantiles of x
n=x.length;
x_quant = [];
for (var i=1; i<=n; i++) {
	x_quant.push((i-0.5)/n);
}
//now get the linear interpolation of every p from x_quant. Lookup needs to have the same size
x.sort();
x_int = [];
for (var j=0; j<p.length; j++) {
	x_int.push(interp1(x_quant,x,p[j]));
}
console.log(x_int);
return x_int;

}
