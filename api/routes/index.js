var express = require('express');
var router = express.Router();

var ctrlStocks = require('../controllers/stocks.controllers.js');
// var ctrlReviews = require('../controllers/reviews.controllers.js');
// var ctrlUsers = require('../controllers/users.controllers.js');

router
  .route('/stocks')
  .get(ctrlStocks.stocksGetAll);
  
  // .post(function(req, res) {
  //   console.log("POST the json");
  //   res
  //     .status(200)
  //     .json( {"jsonData" : 'Post received'} );
  // });

// router
//   .route('/hotels')
//   .get(ctrlHotels.hotelsGetAll)
//   .post(ctrlHotels.hotelsAddOne);
    
router
    .route('/stocks/:stockId')
    //creating a url route for data
    .get(ctrlStocks.stocksGetOne);
//     .put(ctrlHotels.hotelsUpdateOne)
//     .delete(ctrlHotels.hotelsDeleteOne);

// //Review routes
// router
//   .route('/hotels/:hotelId/reviews')
//   .get(ctrlReviews.reviewsGetAll)
// //must be logged in to post reviews
//   .post(ctrlUsers.authenticate, ctrlReviews.reviewsAddOne);
  
// router
//     .route('/hotels/:hotelId/reviews/:reviewId')
//     //creating a url route for data
//     .get(ctrlReviews.reviewsGetOne)
//     .put(ctrlReviews.reviewsUpdateOne)
//     .delete(ctrlReviews.reviewsDeleteOne);
    
//     //Authentication
// router
//   .route('/users/register')
//   .post(ctrlUsers.register);

// router
//   .route('/users/login')
//   .post(ctrlUsers.login);  

module.exports = router;