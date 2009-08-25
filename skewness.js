//skewness.js calculate the skewness of a distribution;
//Dependencies: rth_moment, mean - available at mathbiol.org
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function skewness(data) {
   return sk = rth_moment(data, 3)/Math.pow(rth_moment(data, 2), 3/2);
}