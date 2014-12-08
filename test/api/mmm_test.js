'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
require('../../server.js');

describe('MMM Test', function() {
  it('should return a mean median and mode', function(done) {
    chai.request('http://localhost:3000')
      .post('/calculate')
      .send({numbers: '1 2 3 3 4 5'})
      .end(function(err, data) {
        chai.expect(err).to.be.null;
        chai.expect(data.body.mean).to.eql(3);
        chai.expect(data.body.median).to.eql(3);
        chai.expect(data.body.mode).to.eql(3);
        done();
      });
  });
});
