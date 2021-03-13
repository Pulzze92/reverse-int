module.exports = function reverse (n) {
	let a = Math.abs(n).toString();
   let b = a.split('');
   let c = b.reverse();
   let d = c.join('');
   return d;
}
