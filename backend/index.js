const express = require("express");
const cors = require("cors");
const app = express();
const mainRouter = require('./routes/index');
//console.log(mainRouter)
app.use(express.json());
app.use(cors());
app.use('/api/v1', mainRouter);

app.get("/",(req,res) => {
    res.json("please type /signup in the url")
})

//api/v1 wale mainrouter main jao handle hone(mainrouter is routes ke andwar wala router)
app.listen(3000,function() {
    console.log("backend Server has been started on 3000")
})
