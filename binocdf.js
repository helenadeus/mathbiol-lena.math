//binocdf.js   Binomial cumulative distribution function
//Dependencies: combinations.js, factorial.js
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20, updated 090824

function binocdf(x,n,p) {
   
   var sum = 0; 
   
   for (b = 0; b <= x; b++) {
   
  var tmp = combinations(n,b)*Math.pow(p,b)*Math.pow((1-p),(n-b));
   
   sum += tmp;
   }
   
  
   return sum;
}