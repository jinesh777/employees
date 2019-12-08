/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	//get employee data
  get_employees:async function(req,res,next){
		var userexists = await Employee.find();
		if (!userexists) {
			res.send({
		    	DES_CODE: "EMP00",
	        	status: 'failed',
	        	description: 'failure to get Employees'
      		}); 
		}else{
			
				res.send({
			    	DES_CODE: "EMP03",
		        	status: 'success',
		        	description: 'Employees List',
		        	details: userexists});	
			}
		
	},
	//to save employee to employee table
	// phone number should be unique
	// Email should be unique
	// phone number length should be 10 digits
	save_employees:async function(req,res,next){
		var post_data = req.allParams();
		
		if ( !_.isString( req.param('email') ) ) {
  			return res.badRequest();
		}
		if ( !_.isString( req.param('phone') ) ) {
  			return res.badRequest();
		}
			if ( !_.isString( req.param('name') ) ) {
  			return res.badRequest();
		}
			if ( !_.isString( req.param('department') ) ) {
  			return res.badRequest();
		}


		
		var emailExists = await Employee.find({ email: post_data.email });
		var phone = await Employee.find({ phone: post_data.phone });
		
		if (emailExists.length>0){
			res.send({
		    	DES_CODE: "UVD02",
	        	status: 'failed',
	        	description: 'your email are already exists'
      		}); 
		}
		
		//console.log(post_data.phone.size);
		if(post_data.phone.toString().length!=10){
			res.send({
		    DES_CODE: "UVD02",
	        status: 'failed',
	        description: 'please enter valid phone number'
      		}); 
		}

         let check = await Employee.create({
          email: post_data.email,
          name: post_data.name,
          phone: post_data.phone,
          department: post_data.department
        });

     	
     	res.send({
	    DES_CODE: "UVD03",
        status: 'sucess',
        description: 'Sucessfully created the employee'
  		}); 


	},
	//delete employee function to delete the employee
	delete_employee:async function(req,res,next){
		var post_data = req.allParams();
		if (post_data && typeof post_data != 'undefined') {
			var employee_delete =await Employee.destroy({ email: post_data.email});

	     	res.send({
		    DES_CODE: "UVD03",
	        status: 'success',
	        description: 'Sucessfully deleted the employee'
	  		}); 

		}else{
				res.send({
		    			DES_CODE: "EMP00",
	        			status: 'failed',
	        			description: 'failure to delete employee'
      			}); 
		}

	},
	//update employee details
	update_employee:async function(req,res,next){
		var post_data = req.allParams();
	
		if(post_data.phone.length!=10){
			res.send({
		    DES_CODE: "UVD02",
	        status: 'failed',
	        description: 'please enter valid phone number'
      		}); 
		}

		var updatedEmployee = await Employee.updateOne({  email: post_data.email }).set({
          name: post_data.name,
          phone: post_data.phone,
          department: post_data.department
        });
		
		res.send({
	    DES_CODE: "UVD03",
        status: 'sucess',
        description: 'Sucessfully updated the employee'
  		}); 

	}


};

