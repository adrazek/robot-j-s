var should = require('chai').should(),
	robotlibz = require('../index'),
	test = robotlibz.test;

describe('#escape', function() {
	it('test the robotlibz test function', function() {
		test().should.equal('library testing');
	});
});
