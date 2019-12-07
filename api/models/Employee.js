module.exports = {
	tableName: "employees",
	attributes: {
		id: {
			type: "number",
			autoIncrement: true,
			columnType: "int",
			isInteger: true
		},
		name:{
			type: "string",
			columnType: "varchar",
			maxLength: 20,
			required: true
		},
		email: {
			type: "string",
			columnType: "varchar",
			maxLength: 200,
			required: true,
			unique: true

		},
		phone: {
			type: "number",
			columnType: "int",
			required: true,
			      unique: true


		},
		department: {
			type: "string",
			columnType: "varchar",
			maxLength: 200,
			required: true
		}

	}
};
