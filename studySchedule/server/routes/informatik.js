const express = require('express');
let informaticRouter = express.Router();

informaticRouter.get('/informatik', ( req, res)=>{

    res.send('You requested Informatik')
})
module.exports= informaticRouter;