//combinations.js Calculate the k combinations of set of length n
//Dependencies: factorial.js
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function combinations(n,k) {
  operator = factorial(n);
  denominator = factorial(k)*factorial((n-k));
  
  return (operator/denominator);
}