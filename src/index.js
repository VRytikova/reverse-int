module.exports = function reverse (n) {
    if(n>0) {
        let reverseInt = String(n);
        let arrayInt = reverseInt.split('');
        let newArrayInt = arrayInt.reverse();
        return Number(newArrayInt.join(''));
    } else{
        let reverseInt = String(-n);
        let arrayInt = reverseInt.split('');
        let newArrayInt = arrayInt.reverse();
        return Number(newArrayInt.join(''));
    }
}
