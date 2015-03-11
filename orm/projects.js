//for the project page, all the database orm

var Sequelize=require('sequelize');
var seq=require("./connection.js");


exports.project=seq.define('projects',{
	id: {
		type:Sequelize.INTEGER,
		primaryKey:true
	},
	name: {
		type:Sequelize.STRING,
		allowNull:false	
	
	},

	startDate: {
		type:Sequelize.DATE,
		field:'start_date',	
		allowNull:false	
	},
	
	endDate: {
		type:Sequelize.DATE,
		field:'end_date'
	
	},

	url: {
		type:Sequelize.STRING
			
	
	}	
});
