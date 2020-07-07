const  verifySauce  = require("../middlewares/verifySauce");
const controller = require("../controllers/sauce.controller");
const express = require('express');
const sauceRouter = express.Router();
// pas besoinnnn !!!!
// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers", "*",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

sauceRouter.route('/')
    .post(controller.addSauce)
    .get(controller.allSauces)
sauceRouter
    .put("/:sauceId", controller.updateSauce)



module.exports = sauceRouter;
