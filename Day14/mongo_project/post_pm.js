const connectToDatabase = require("./db");
const express = require("express");
const { mongoose, deleteModel } = require ("mongoose");

const router = express.Router();

const postSchema = new mongoose.Schema({
    posttitle: String,
    postcontent: String,
    url: String,
});


const Post = mongoose.model("post",postSchema);

//* add new post
router.post("/addPost",async(req,res)=>
{
    try{
        await connectToDatabase();
        const newPost = new Post(req.body);
        await newPost.save();
        res.send({newPost});
        return newPost;
    }catch (error){
        console.log(error);
        throw error;
    }
})

//* retrieve all posts
router.get("/getAllPost", async (req, res) => {

    console.profile('get all posts')

    try {
        await connectToDatabase();
        Post.find().then((posts) => {
            res.json(posts);
        })
    } catch(err){
        res.status(500).json({err : "Failed to retrieve attributes"})
    }

    console.profileEnd();
})

//* retrieve one post by id
router.get("/getPostById/:id", async (req, res) => {
    try {
        await connectToDatabase();
        console.log(req.params.id);

        Post.find({_id: req.params.id}).then((posts) => {
            res.json(posts)
        });


    } catch(err){
        res.status(500).json({err : "Failed to retrieve attributes"})
    }
})

//* update one post by id
router.put("/editPost/:id", async (req, res) => {
    try {
        await connectToDatabase();
        
        const updatePost = await Post.findByIdAndUpdate( 
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatePost) {
            return res.status(404).json({error: "Post not found"});
        }
        res.json(updatePost);

    } catch(err){
        res.status(400).json({error : err.message,})
    }
})

//* delete post
router.delete("/delete/:id", async (req, res) => {
    try{
        console.log(req.params.id);

        const deletePost = await Post.findByIdAndDelete(req.params.id);

        if(!deletePost){
            return res.status(404).json({error: "Post not found"});
        }

        res.json({message : "Post deleted successfully"});

    }catch(err){
        res.status(500).json({ error : err.message});
    }
    
})

module.exports = router;