var expect = require('must');

var Leaf = require('../lib/leaf');
var Root = require('../lib/root');

describe('Leaf', function(){
	it ('must exist', function(){
		expect(Leaf).to.exist();
	});

	it ('must be a function', function(){
		expect(Leaf).to.be.a.function();
	});

	describe('construction', function(){
		var leaf;

		beforeEach(function(){
			leaf = new Leaf();
		});

		it('must exist', function(){
			expect(leaf).to.exist();
		});
	});

	describe('collect', function(){
		var leaf;

		beforeEach(function(){
			leaf = new Leaf();
		});

		it('must not be called', function(){
			var called = false;

			leaf.collect(function(){ called = true; });

			expect(called).to.be.false();
		});
	});

	describe('add', function(){
		var leaf;

		beforeEach(function(){
			leaf = new Leaf();
		});

		it('must return', function(){
			expect(leaf.add(0)).to.exist();
		});

		it('must return different tree', function(){
			var result = leaf.add(1);

			expect(result).to.not.equal(leaf);
		});
	});
});

describe('Root', function(){
	it ('must exist', function(){
		expect(Root).to.exist();
	});

	it ('must be a function', function(){
		expect(Root).to.be.a.function();
	});

	describe('construction', function(){
		var root;

		beforeEach(function(){
			root = new Root(0);
		});

		it('must exist', function(){
			expect(root).to.exist();
		});
	});

	describe('collect', function(){
		var root;

		beforeEach(function(){
			root = new Root(0);
		});

		it('must be called', function(){
			var called = false;

			root.collect(function(){ called = true; });

			expect(called).to.be.true();
		});

		it('must pass constructor argument', function(){
			var number = undefined;

			root.collect(function(n){ number = n; });

			expect(number).to.be(0);
		});
	});

	describe('add', function(){
		var root;

		beforeEach(function(){
			root = new Root(0);
		});

		it('must return', function(){
			expect(root.add(0)).to.exist();
		});

		it('must return identical object', function(){
			var result = root.add(1);

			expect(result).to.be.equal(root);
		});
	});

	describe('collect order', function(){
		var tree;

		beforeEach(function(){
			tree = new Leaf();

			[2,3,1].forEach(function(number){
				tree = tree.add(number);
			});
		});

		it('must be sorted', function(){
			var result = [];

			tree.collect(function(number){ result.push(number); });

			expect(result).to.eql([1,2,3]);
		});
	})
});
