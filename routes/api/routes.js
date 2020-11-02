const express = require("express");
const router = express.Router();

const loginRoute = require('./login');
const ingredientsRoute = require('./ingredients');




router.use('./ingredients', ingredientsRoute)
router.use('./login', loginRoute);

router.get('/posts', async (req,res) => {
    const posts = await Post.find()
    res.send(posts)
})

router.post('/posts', async (req, res) =>{
    const post = new Post ({
        user: [{
            name: String,
            password: String,
            mealPlan: {
                date: Date,
                consumedB: Boolean,
            },
            breakfast: {},
            consumedL: Boolean,
            lunch: {},
            consumedD: Boolean,
            dinner: {},
        }]
    })
    await post.save()
    res.send(post)
})

router.get('/posts/:id', async (req, res) => {
    const post = await Post.findOne ({ _id: req.params.id })
    res.send(post)
})
router.get('/posts/:id', async (req, res) => {
    try {
        constpost = await Post.findOne({ _id: req.params.id })
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: 'Post does not exist' })
    }
})

router.patch('/posts/:id', async (req,res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id })
        if (req.body.title) {
            post.title = req.body.title
        }
        if (req.body.content) {
            post.content = req.body.content
        }
        await post.save()
        res.send(post)
    } catch {
        res.status(404)
        res.send ({
            error: "Post doesnt't exist"
        })
    }
})
module.exports = router;