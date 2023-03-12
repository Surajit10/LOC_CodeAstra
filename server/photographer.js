var mongoose = require("mongoose");
conn_str = "mongodb+srv://aditya:tcetmumbai@cluster0.cqf55xf.mongodb.net/?retryWrites=true&w=majority";
//connection to mongodb
mongoose.connect(conn_str, { useNewUrlParser: true , useUnifiedTopology: true})
	.then( () => console.log("Connected successfully...") )
	.catch( (err) => console.log(err) );
    
const photographerSchema = new mongoose.Schema({
    "name": String,
    "email_id": String,
    "phone_no": String,
    "password": String,
    "website_url":String,
    "style": String,
    "Awards & recognition":String,
    "Other Information":String,
    "Profile Review": String,
    "Star_Rating":Number,
    "profile_image_id":String,
    "banner_image_id":String,
    "featured_images" : Array
});

// const photographerModel = new mongoose.model("photographerSchema", photographerSchema);
const photographerModel = new mongoose.model("Photographer", photographerSchema);
exports.photographer = photographerModel;
