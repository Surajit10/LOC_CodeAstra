var mongoose = require("mongoose");

conn_str = "mongodb+srv://aditya:tcetmumbai@cluster0.cqf55xf.mongodb.net/?retryWrites=true&w=majority";
//connection to mongodb
mongoose.connect(conn_str, { useNewUrlParser: true , useUnifiedTopology: true})
	.then( () => console.log("Connected successfully...") )
	.catch( (err) => console.log(err) );
    

    const quoteSchema = new mongoose.Schema({
        "job_id":String,
        "p_id":String,
        "quote":String
     });

     const QuoteModel = new mongoose.model("quote", quoteSchema);
     exports.quote = QuoteModel;