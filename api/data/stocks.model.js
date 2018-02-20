var mongoose = require('mongoose');

var stockSchema = new mongoose.Schema({
   Symbol: String,
   Name: String,
   LastSale: Number,
   sector: String,
   StockUrl: String,
});

var commentSchema = new mongoose.Schema({
     name : {
        type: String,
        required: true
    },
    // rating: {
    //     type: Number,
    //     min: 0,
    //     max: 5,
    //     required: true
    // },
    comments: {
        type: [String],
        required: true
    },
    
   createdOn: {
        type: Date,
        "default": Date.now
   }
    });
    
// var roomSchema= new mongoose.Schema({
//         type: String,
//         number: Number,
//         description: String,
//         photos: [String],
//         price: Number
// });


mongoose.model('Stock', stockSchema);