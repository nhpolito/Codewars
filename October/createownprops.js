let arr = [1,2,3,4]

Array.prototype.myForEach = function( cb ) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this)
    }
}

arr.myForEach(x => console.log(x)