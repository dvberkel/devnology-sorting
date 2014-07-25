var Root = (function(){
	var _Root;
	return function(){
		return _Root || (_Root = require('./root'));
	}
})();

function Leaf(){}

Leaf.prototype.add = function(number){
	return new (Root())(number);
}

Leaf.prototype.collect = function(){
	/* do nothing */
}

module.exports = Leaf;
