var Leaf = require('./lib/leaf');

module.exports = function(numbers) {
	return collectResultsFrom(sortTreeOf(numbers));
}

function collectResultsFrom (tree) {
	var result = [];
	tree.collect(function(number){
		result.push(number);
	});
	return result;
}

function sortTreeOf(numbers) {
	var tree = new Leaf();
	numbers.forEach(function(number){
		tree = tree.add(number);
	});
	return tree;
}
