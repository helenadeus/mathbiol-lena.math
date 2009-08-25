//quad.js
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function quad(handle, a,b) {
     var toInt = handle.match(/@\([a-zA-Z0-9_]\)/);
	 var func = handle.replace(toInt[0],'');
	 agsf=toInt[0].replace('@(','').replace(')','');	 //not x to avoid overlapping the value
	 
	 //we isolated the variable, now let's replace it in the function	 
	 sum = 0;
	 dx = (b-a)/100000;
	 var q = a;
	 while (Math.abs(q) < Math.abs(b)) {
	     eval(agsf+'='+q);
		 sum = sum + eval(func)*dx;
		 q=q+dx;
	 }
	 
	 return sum;
}