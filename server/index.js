const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { urlencoded } = require("body-parser");
// const aboutRoute = require("./routes/about");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors);
app.use(express.static("public"));

// app.use("/about", aboutRoute);

mongoose.connect("mongodb://127.0.0.1:27017/blgDB");
/////// database schema its gonna have different headings and paragraphs I know the no of headings and pragraphs vaary also we gotta include images don't know how , I just wanna be done and see the overall picture once.
const blogSchema ={
    title : String,
    tagline : String,
    heading1 : String,
    paragraph1: { type: String, text: true },
    heading2: String,
    paragraph2 : String,
    heading3: String,
    paragraph3: String,  
}
const Blog = mongoose.model("Blog", blogSchema);

///////////////  /  this is the home route ///
// const homeSchema = {
//     title: String,
//     paragraph1: String,
//     paragraph2: String,
//     paragraph3: String,
//     image : String

// }

///// ///// ////// ////// /blog Route  /////
app.route("/blog")
.get(cors(),(req, res) => {
        Blog.find(function (err, blogArticles) {
            if (!err) {
                res.send(blogArticles);
            }
            else {
                console.log(err);
            }
        });
    })
.post(function(req,res){
    const newBlog = new Blog({
        title : req.body.title ,
        tagline : req.body.tagline ,
        heading1 : req.body.heading1,
        paragraph1: req.body.paragraph1,
        heading2: req.body.heading2,
        paragraph2 : req.body.paragraph2,
        heading3: req.body.heading3,
        paragraph3: req.body.paragraph3
    });
    newBlog.save();
    res.send("added a new object!");
})
.delete(function(req,res){
    Blog.deleteMany({_id : "63b55819ea4a790528cbe147"} ,function(err){
        if(!err){
            res.send("Deleted the id mentioned!");
            }else{
                res.send(err);
            }
        }
    );

});
/////// //////  /blog/id  particular article route ////
app.route("/blog/:id")
.get(cors(), function(req,res){
       Blog.find({_id: req.params.id}, function(err,article){
        if(!err){
            res.send(article);
        }else{
            console.log(err);
        }
       }); 
});

//// ///////////// //////   /about  about page content ///
const aboutSchema ={
    title : String,
    tagline : String,
    paragraph1: String,
    paragraph2 : String  
}
const About = mongoose.model("About", blogSchema);
app.route("/about")
.get(cors(), function(req,res){
    About.find(function (err, aboutPage) {
        if (!err) {
            res.send(aboutPage);
        }
        else {
            console.log(err);
        }
    });
})
.post(async (req,res) => {
        try {  
            const newAbout = new About({
            title : req.body.title ,
            tagline : req.body.tagline ,
            paragraph1: req.body.paragraph1,
            paragraph2 : req.body.paragraph2
        });
    
        const user = await newAbout.save();
        res.status(200).json(user);
            
        } catch (error) {
            res.status(500).json(err);
        }
})
.delete((req,res)=> {
        About.deleteMany({_id : "63b562862cc5145d5f475202"} ,function(err){
        if(!err){
            res.send("Deleted the id mentioned!");
            }else{
                res.send(err);
            }
        }
    );
});
    
////// Server Port
app.listen("8000",function(){
    console.log("Server is running in Port 8000");
});