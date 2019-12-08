
describe('Employee', function() {
  it ('should not be empty', function(done) {
    Employee.find().exec(function(err, data) {
      data.length.should.be.eql(0);

      done();
    });
  });
});
