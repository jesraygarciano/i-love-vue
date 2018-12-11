const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get posts
router.get('/', async (req, res) => {   
    const posts = await loadPostsCollection();
    res.send(await posts.find({}.toArray()));    
});


// Add posts


// Delete Posts



async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://Gart:password1@ds263791.mlab.com:63791/vuemongo', {
        useNewUrlParser: true
    });

    return client.db('vuemongo').collection('posts');
}

module.exports = router;