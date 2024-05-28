const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vanshbhatnagar14dev:129212@cluster0.blv3ioj.mongodb.net/');
console.log("db connect done");
const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
})
console.log("User Schema Defined");
const accountSchema = new mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User', //reference to "user" model to popoulate to
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User',userSchema);
console.log("Model Initiated");
const Account = mongoose.model('Account',accountSchema);

module.exports = {
    User,
    Account,
};