//zeros.js is part of mathbiol.org; Please see documentation there
//Helena F. Deus (helenadeus@gmail.com)
//200809

function zeros(x,y) {
	if(!y)
		y=1;

	var Z = new Array();
	for (var i=0; i<x; i++) {
		if(y>1){
		Z[i] = new Array();
		for (var j=0; j<y; j++) {
			Z[i].push(0);
		}
		}
		else {
			Z.push(0);
		}
	}
 return Z;
 }