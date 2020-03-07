
function permute(str) {
    var ret = [];
    if (str.length == 1) return [str];
    if (str.length == 2) return [str, str[1]+str[0]];

    str.split('').forEach(function (chr, idx, arr) {
        var sub = [].concat(arr); // "clone" arr
        sub.splice(idx, 1);
        permute(sub.join('')).forEach(function (perm) {
        ret.push(chr+perm);
        });
    });

    return ret;
}

// Complete the biggerIsGreater function below.
function biggerIsGreater(w) {
    var ret = permute(w);
    ret.sort();
    if( (ret[ret.indexOf(w)+1] == w) || (ret.indexOf(w) >= ret.length) ){
        return 'no answer'  
    }else{
        return (ret[ret.indexOf(w)+1])
    }
}
