var mongoose = require("mongoose");
conn_str = "mongodb+srv://aditya:tcetmumbai@cluster0.cqf55xf.mongodb.net/?retryWrites=true&w=majority";
//connection to mongodb
mongoose.connect(conn_str, { useNewUrlParser: true , useUnifiedTopology: true})
	.then( () => console.log("Connected successfully...") )
	.catch( (err) => console.log(err) );
    
const imageSchema = new mongoose.Schema({
    id_featured : String,
    description : String,
    creator_id : String
});

// const photographerModel = new mongoose.model("photographerSchema", photographerSchema);
const imageModel = new mongoose.model("Image", imageSchema);
exports.image = imageModel;
