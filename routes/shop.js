const express = require('express');
const router = express.Router();
const Shop = require('../models/Shop');


//GET ALL SHOP DATA
router.get('/', async (req, res) => {
    try {
        const shop = await Shop.find();
        res.json(shop);
    } catch (err) {
        res.json(err)
    }
})


//GET A SPECIFIC SHOP DATA BY ID
router.get('/:id', async (req, res) => {
    try {
        const shop = await Shop.findById(req.params.id);
        res.json(shop);
    } catch (err) {
        res.json(err)
    }
})


//POST SHOP DATA
router.post('/', async (req, res) => {
    const shop = new Shop({
        name: req.body.name,
        owner: req.body.owner,
        category: req.body.category
    })

    try {
        const savedShop = await shop.save();
        res.json(savedShop);
    } catch (err) {
        res.json(err)
    }
})

//UPDATE SHOP DATA BY ID
router.patch('/:shopid', async (req, res) => {
    try {
        const shop = await Shop.findById(req.params.shopid);
        shop.name = req.body.name;
        shop.save();
        res.json(shop);
    } catch (err) {
        res.josn(err)
    }
})


//DELETE SHOP DATA BY ID
router.delete('/:shopid', async (req, res) => {
    try {
        const shop = await Shop.remove({ _id: req.params.shopid });
        res.json(shop);
    } catch (err) {
        res.josn(err)
    }
})


module.exports = router;