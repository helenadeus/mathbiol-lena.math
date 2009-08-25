//factorial.js Calculate x!
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function factorial(x) {
    var fact = 1;
	var i=1;
	while(i<=x)
	{
	fact = fact*i;
	i++;
	}
	return fact;
}