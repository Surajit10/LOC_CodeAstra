var mongoose = require("mongoose");

conn_str = "mongodb+srv://aditya:tcetmumbai@cluster0.cqf55xf.mongodb.net/?retryWrites=true&w=majority";
//connection to mongodb
mongoose.connect(conn_str, { useNewUrlParser: true , useUnifiedTopology: true})
	.then( () => console.log("Connected successfully...") )
	.catch( (err) => console.log(err) );
    
const blogSchema = new mongoose.Schema({
    "id": String,
    "title": String,
    "description": String,
    "category" : String,
    "tag": String,
    "image_url":String
},{ timestamps: true });

// const photographerModel = new mongoose.model("photographerSchema", photographerSchema);
const blogModel = new mongoose.model("blogs", blogSchema);
exports.blog = blogModel;