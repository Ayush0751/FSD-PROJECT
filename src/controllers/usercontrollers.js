const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const { User, Copy, Trader, Post, PostTrader } = require('../models/model');


const register = asyncHandler(async (req, res) => {
    // console.log(req.body);
    const { username, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    const user = await User.create({
        username, email, password
    });
    const trader = new Trader();
    if (user) {
        res.status(201).send({
            _id: user._id,
            username: user.username,
            email: user.email,
        })
    } else {
        res.status(400);
        throw new Error('Error Occured');
    }

});
var key;
const traderDetail = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    key = id;
    const result = await Trader.findOne({ Tusername: id })
    // console.log(result)
    // if (result) {
    //     res.send({ traderdetail: result });
    // }
    // else {
    //     console.log(err);
    //     res.render('404', { title: 'Blog not found' });
    // }

    PostTrader.find()
        .then((result2) => {
            // console.log(result);
            // console.log(result2);
            res.render('traderProfile', { postItemsTrader: result2, traderdetail:result});
        })
        .catch(err => {
            console.log(err);
            // res.render('404', { title: 'Blog not found' });
        });
}
const copyDetail = asyncHandler(async (req, res) => {
    const copy = new Copy(req.body);
    console.log(key);
    const result1 = await Trader.findOne({ Tusername: key })
    copy.trader = result1.name;
    copy.save()
        .then(result => {
            res.redirect('/portfolio');
        })
        .catch(err => {
            console.log(err);
        })
});
const updatetrader = asyncHandler(async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const result = await Copy.findByIdAndUpdate(id, { open: 'false' })
        .then(result => {
            res.redirect('/portfolio');
        })
        .catch(err => {
            console.log(err);
        });
})

//     const {/* orderType,*/
//          amountInvest, stoploss,stopgain } = req.body;
//     // const userExists = await User.findOne({ email });
//     // if (userExists) {
//     //     res.status(400);
//     //     throw new Error('User already exists');
//     // }
//     const copy = await Copy.create({
//         // orderType,
//          amountInvest, stoploss,stopgain
//     });
//     console.log(req.body);

//     if (copy) {
//         res.status(201).send({
//             _id: copy._id,
//             // orderType: copy.orderType,
//             amountInvest: copy.amountInvest,
//             stoploss: copy.stoploss,
//             stopgain: copy.stopgain,
//         })
//     } else {
//         res.status(400);
//         throw new Error('Error Occured');
//     }
// });

const postDetails = (req, res) => {
    // const id = req.params.id;
    Post.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('discover', { postItems: result });
        })
        .catch(err => {
            console.log(err);
            // res.render('404', { title: 'Blog not found' });
        });
}
const postDetailsTrader = (req, res) => {
    const { id } = req.params;
    PostTrader.find()
        .then(result => {
            res.render('/discover', { postItemsTrader: result });
        })
        .catch(err => {
            console.log(err);
            // res.render('404', { title: 'Blog not found' });
        });
}

//   const postCreate = (req, res) => {
//     res.render('discover');
//   }

const postCreate = (req, res) => {
    const post = new Post(req.body);
    post.save()
        .then(result => {
            res.redirect('/discover');
        })
        .catch(err => {
            console.log(err);
        });
}
const postCreateTrader = (req, res) => {
    const postTrader = new PostTrader(req.body);
    postTrader.save()
        .then(result => {
            res.redirect('/traderProfile');
        })
        .catch(err => {
            console.log(err);
        });
}
module.exports = { register, copyDetail, traderDetail, updatetrader, postCreate, postDetails, postCreateTrader, postDetailsTrader }