//for the project page, mapping for projects tables

var Sequelize=require('sequelize');
var seq=require("./connection.js");


exports.projects=seq.define('projects',{
	id: {
		type:Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement:true
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
			
	
	},

	shortDescription: {
		type:Sequelize.STRING,
		field:'short_desc',
		allowNull:true	
	
	}	
});
