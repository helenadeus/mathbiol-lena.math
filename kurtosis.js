//kurtosis.js: Calculate the kurtosis of a distribution
//Dependencies: mean.js, rth_moment.js - available at mathbiol.org
//Helena F. Deus (helenadeus@gmail.com)
//09-08-20

function kurtosis(data) {
    return kur = rth_moment(data, 4)/Math.pow(rth_moment(data, 2), 2);
}