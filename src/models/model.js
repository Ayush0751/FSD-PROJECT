const mongoose = require('mongoose');
const { get } = require('../routes/userRoutes');


const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
            required: true,
            min: 8,
        }
    },
    {
        timestamps: true,
    }
);
const traderSchema = mongoose.Schema(
    {
        Tusername: {
            type: String,
            required: true,
            min: 3,
            max: 20,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50,
        },
        age: {
            type: Number,
            required: true,
            min: 18,
        },
        place:{
            type:String,
            required:true,
            unique:false,
        },
        bio:{
            type:String,
            required:false,
        },
        copiernumber:{
            type:Number,
            required:false,
        },
        profit:{
            type:Number,
            required:false,
        },
        rating:{
            type:Number,
            required:false,
        }
    },
    {
        timestamps: true,
    }
);
const copySchema=mongoose.Schema(
    {
        orderType:{
            type: String,
            required: true,
            unique:false,
            
        },
        amountInvest:{
            type:Number,
            min:100,
        },
        stoploss:{
            type: Number,
            required:false,
            
        },
        stopgain:{
            type: Number,
            required:false,
        },
        trader:{
            type:String,
        },
        open:{
            type:Boolean,
            default:true
        }

    },
    {
        timestamps:true
    }
);
const postSchema=mongoose.Schema(
    {
        // name:{
        //     type: String,
        //     required: true,
        //     unique:false,
            
        // },
        post_text:{
            type:String,
            required: true,
            unique:false,
        },
        

    },
    {
        timestamps:true
    }
);
const postSchemaTrader=mongoose.Schema(
    {
        // name:{
        //     type: String,
        //     required: true,
        //     unique:false,
            
        // },
        post_textTrader:{
            type:String,
            required: true,
            unique:false,
        },
        

    },
    {
        timestamps:true
    }
);


const User = mongoose.model('User', userSchema)
const Copy = mongoose.model('Copy', copySchema);
const Trader = mongoose.model('Trader', traderSchema);
const Post = mongoose.model('post', postSchema);
const PostTrader = mongoose.model('postTrader', postSchemaTrader);
module.exports = {User,Copy,Trader,Post,PostTrader};