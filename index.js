Array.prototype.interpolationSearch = function(item) {
    let lo = 0;
    let hi = this.length - 1;
    while(lo <= hi && item >= this[lo] && item <= this[hi]) {
        let pos = lo + Math.floor((hi-lo)*(item-this[lo])/(this[hi]-this[lo]));

        if (this[pos] == item) {
            return pos;
        }
 
        if (this[pos] < item) {
            lo = pos + 1;
        } else {
            hi = pos-1;
        }
    }
    return -1;
}