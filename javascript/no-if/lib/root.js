var Leaf = require('./leaf');
var transformerFor = require('./transformer');

var Root = module.exports = function(number){
	this.number = number;
	this.left = new Leaf();
	this.right = new Leaf();
}

Root.prototype.add = function(number){
	var transformer = transformerFor(this.number, number).bind(this);
	transformer(number);
	return this;
}

Root.prototype.collect = function(callback){
	this.left.collect(callback);
	callback(this.number);
	this.right.collect(callback);
}
