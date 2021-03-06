const express = require('express');

const cors = require('cors');

const Users = require('../helpers/userDb')

const router = express.Router();


router.get('/', cors(), async (req, res) => {
    try {
        const users = await Users.get()
        res.status(200).json(users)
    } catch {
        res.status(500).json({
            message: 'Error retrieving the users'
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
       const user = await Users.getById(req.params.id)
       if (user) {
        res.status(200).json(user)
       } else {
           res.status(404).json({
               message: 'User not found'
           })
       }
       
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Error retrieving the post'
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const user = await Users.insert(req.body);
        res.status(201).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Error adding the user'
        })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const count = await Users.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({
                message: 'The user has been deleted'
            })
        } else {
            res.status(404).json({
                message: 'The user could not be found'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Error deleting the user'
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const check = await Users.update(req.params.id, req.body)
        if (check === 1) {
            res.status(200).json(check)
        } else {
            res.status(404).json({
                message: 'The user could not be found'
            })
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error updating the user'
        })
    }
})

router.get('/:id/posts', async (req, res) => {
    try {
        const userPosts = await Users.getUserPosts(req.params.id)
        res.status(200).json(userPosts)
    } catch {
        res.status(500).json({
            message: 'Error getting posts for this user'
        })
    }
})

module.exports = router;