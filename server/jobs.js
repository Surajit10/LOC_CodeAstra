var mongoose = require("mongoose");

conn_str = "mongodb+srv://aditya:tcetmumbai@cluster0.cqf55xf.mongodb.net/?retryWrites=true&w=majority";
//connection to mongodb
mongoose.connect(conn_str, { useNewUrlParser: true , useUnifiedTopology: true})
	.then( () => console.log("Connected successfully...") )
	.catch( (err) => console.log(err) );
    
const jobsSchema = new mongoose.Schema({
   "email":String,
   "title":String,
   "requirements":String,
   "p_id":Array,
   "date":String,
   "time":String,
   "minimum":String,
   "maximum":String
});

// const photographerModel = new mongoose.model("photographerSchema", photographerSchema);
const JobsModel = new mongoose.model("Jobs", jobsSchema);
exports.jobs = JobsModel;