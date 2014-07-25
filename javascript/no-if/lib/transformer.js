function sign(number)  {
	return (number > 0) - (number < 0);
}

var transformers = {};
transformers[-1] = function(number){ this.right = this.right.add(number); };
transformers[ 0] = function(number){ /* do nothing */ };
transformers[ 1] = function(number){ this.left = this.left.add(number); };

var transformerFor = module.exports = function(m, n){
	return transformers[sign(m - n)];
}
