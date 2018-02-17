var mongoose = require('mongoose');

var stockSchema = new mongoose.Schema({
   symbol: String,
   name: String,
   LastSale: Number,
   sector: String,
   StockUrl: String
});

mongoose.model('Stock', stockSchema);