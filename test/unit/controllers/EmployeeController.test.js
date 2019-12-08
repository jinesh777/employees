var request = require('supertest');
//function is there checking
describe('EmployeeController.get_employees', function() {

  describe('#get_employees()', function() {
    it('should redirect to /getEmployees', function (done) {
      request(sails.hooks.http.app)
      .get('/getEmployees')
     
      .expect(200,done);
      
    });
  });

});
//save employee request if the field is invalid
describe('EmployeeController.save_employees', function() {

  describe('#save_employees()', function() {
    it('should redirect to /createEmployees', function (done) {
      request(sails.hooks.http.app)
      .post('/createEmployees')
      .send({ name: 'test', password: 'test' })
      .expect(400,done);

      
    });
  });

});

//correct request
describe('EmployeeController.save_employees', function() {

  describe('#save_employees()', function() {
    it('should redirect to /createEmployees', function (done) {
      request(sails.hooks.http.app)
      .post('/createEmployees')
      .send({"email":"jinesh3@jsdjshjd.com","name":"jsdsdhsjh","phone":"9898086001","department":"IT"})
      .expect(200,done);
    });
  });

});


//correct request
describe('EmployeeController.update_employee', function() {

  describe('#update_employee()', function() {
    it('should redirect to /updateEmployees', function (done) {
      request(sails.hooks.http.app)
      .put('/updateEmployees')
      .send({"email":"jinesh3@jsdjshjd.com","name":"jsdsdhsjh","phone":"9898086001","department":"IT -software"})
      .expect(200,done);
    });
  });

});

describe('EmployeeController.delete_employee', function() {

  describe('#delete_employee()', function() {
    it('should redirect to /deleteEmployee', function (done) {
      request(sails.hooks.http.app)
      .delete('/deleteEmployee')
      .send({"email":"jinesh3@jsdjshjd.com"})
      .expect(200,done);
    });
  });

});



