const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
//ROUTES

var cors = require('cors');
app.use(cors());

// photographer 
var photographer_module = require("./photographer");
const photographer = photographer_module.photographer;


app.get("/photographer-details", async (req, res) => {
    let data = await photographer.find();
    console.log(data);
    res.send(data);
})

app.post("/photographer-details", async (req, res) => {
    console.log(req.body);
    var d = new photographer(req.body);
    var result = await d.save();
    res.send(result);
})

var image_module = require("./photgrapher-image");
const image = image_module.image;


// featured images store  

// app.get("/photographer-details/featured_image", async (req, res) => {
//     let data = await image.find();
//     console.log(data);
//     res.send(data);
// });


app.get("/images", async (req, res) => {
    const result = []
    let data = await image.find();
    // console.log(data);
    for(let i=0;i<data.length;i++){
        let ph = await photographer.findOne({ "_id": data[i].creator_id });
        // console.log("hi")
        console.log(ph)
        console.log("item")
        // console.log(item)
        result.push({
            ...data[i]._doc,
            creator: ph
        })
        console.log("result",result)
    }
    
    res.send(result);
})

app.post("/photographer-details/featured_image", async (req, res) => {
    console.log(req.body);
    var d = new image(req.body);
    var result = await d.save();
    let c_id = result._id 
    console.log(c_id)
    let f_data = await photographer.findOne({ "_id": req.body.creator_id })
    let z= f_data.featured_images
    z.push(c_id)
    console.log(z)
    let s_data = await photographer.updateOne({ "_id": req.body.creator_id }, {
        "$set": {
            "featured_images": z
        }
    });

    
    res.send(result);
})


//user login and sign-up
var user_module = require("./users");
const user = user_module.user;

//user - post
app.post("/user-signup", async (req, res) => {
    console.log(req.body);
    var d = new user(req.body);
    var result = await d.save();
    res.status(200).send(result);
})

//user - login
app.post("/user-login", async (req,res) => {
    email = req.body.email;
    pass = req.body.password;
    let data = await user.findOne({$and:[{email:email},
                                    {password:pass}]});  
    console.log(email);
    console.log(pass);
    console.log(data);
    if (data){
        console.log("succesful");
        return res.status(200).send({user:data,mode:"default"});
    } 
    console.log("unsuccesful");
    return res.status(401).send({message:"Login Failed"});
    
});



//user jobs upload and view
var jobs_module = require("./jobs");
const jobs = jobs_module.jobs;
//user jobs
app.post("/user-jobs-upload", async (req, res) => {
    console.log(req.body);
    var d = new jobs(req.body);
    var result = await d.save();
    res.status(200).send(result);
})

//user jobs view all
app.get("/user-jobs-view", async (req, res) => {
    let data = await jobs.find();
    console.log(data);
    res.send(data);
})


//Jobs quoteation
var quote_module = require("./quotes");
const quote = quote_module.quote;
//quotes of jobs
app.post("/quote-jobs-upload", async (req, res) => {
    //console.log(req.body);
    var d = new quote(req.body);
    var result = await d.save();

    let p_id = result.p_id 
    console.log(p_id)
    let f_data = await jobs.findOne({ "_id": req.body.job_id })
    let z= f_data.p_id
    z.push(p_id)
    console.log(z)
    let s_data = await jobs.updateOne({ "_id": req.body.job_id }, {
        "$set": {
            "p_id": z
        }
    });
    console.log(s_data)
    console.log('hello')
    if (s_data){
        console.log('success')
    } else {
        console.log('false')
    }
    res.status(200).send(result);
})

//quote view all
app.get("/quote-jobs-view", async (req, res) => {
    job_id = req.body.job_id
    let data = await quote.find({job_id:{$eq:job_id}});
    console.log(data);
    res.send(data);
})



// ----------------- for blogs ------------------------

var blog_module = require("./blogs");
const blog = blog_module.blog;


app.get("/blog-view", async (req, res) => {
    let data = await blog.find();
    console.log(data);
    res.send(data);
})

app.post("/blog-new", async (req, res) => {
    console.log(req.body);
    var d = new blog(req.body);
    var result = await d.save();
    res.send(result);
})

app.put("/blog-udpate", async (req, res) => {
    let s_data = await blog.updateOne({ "_id": req.body._id }, {
        "$set": {
            "title": req.body.title,
            "description": req.body.description,
            "tag": req.body.tag
        }
    });
    res.send(s_data);
})

app.delete("/blog-delete", async (req, res) => {
    console.log(req.body._id)
    let d_data = await blog.deleteOne({ _id: req.body._id })
    res.send(d_data);
})

app.get("/blog-view-one/:id", async (req, res) => {
    console.log(req.params.id);
    let data = await blog.findOne({ "_id": req.params.id });
    res.send(data);
})

//connect to DB
mongoose.connect('mongodb+srv://aditya:tcetmumbai@cluster0.cqf55xf.mongodb.net/?retryWrites=true&w=majority'
).then(()=>{console.log('Connected to DB!')});

app.listen(3000);