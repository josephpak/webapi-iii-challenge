const express = require('express');

const Posts = require('../helpers/postDb')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.get()
        res.status(200).json(posts)
    } catch {
        res.status(500).json({
            message: 'Error retrieving the posts'
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
       const post = await Posts.getById(req.params.id)
       if (post) {
        res.status(200).json(post)
       } else {
           res.status(404).json({
               message: 'Post not found'
           })
       } 
    } catch {
        res.status(500).json({
            message: 'Error retrieving the post'
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const post = await Posts.insert(req.body);
        res.status(201).json(post)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Error adding the post'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const count = await Posts.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({
                message: 'The post has been deleted'
            })
        } else {
            res.status(404).json({
                message: 'The post could not be found'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error deleting the post'
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const check = await Posts.update(req.params.id, req.body)
        if (check === 1) {
            res.status(200).json(check)
        } else {
            res.status(404).json({
                message: 'The post could not be found'
            })
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error updating the post'
        })
    }
})

module.exports = router;