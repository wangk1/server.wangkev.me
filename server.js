var app=require('express')();

//Handles project page requests
app.get('/project/:name/:number',function(req,res){
	if(req.params.name==="all") {
		//grab the data from the database	
			


	} else {
		//we are requesting more info on the single project	
			

	}
	res.send("hello");
	
	
});


app.listen(3000);
console.log("Server started");
