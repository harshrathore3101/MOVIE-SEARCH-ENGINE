var express = require('express');
var router = express.Router();
const db = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  db.find().then(function(data){

    res.render('index',{data});
  })
});

router.get("/drop/:plc", function (req, res) {
  var par = req.params.plc;
  const regex = new RegExp(`^${par}`, "i");
  db
    .find({
      name: {
        $regex: regex,
      },
    })
    .then(function (data) {
      res.json(data);
      // res.send(data);
    });
});

router.get("/create",function(req,res){
  res.render("create")
})

router.get("/allmovie", function (req, res) {
  res.redirect("/")
});

router.post("/create",function(req,res){
  db.create({
    name: req.body.name,
    rate: req.body.rate,
    des: req.body.des,
    time:req.body.time,
  }).then(function(data){
    // res.send(data)
    res.redirect("/")
  })
})

router.get("/read/:plc",function(req,res){
  db.findOne({
    _id: req.params.plc,
  }).then(function(data){
    res.render("read",{data})  })
})

router.get("/delete/:plc",function(req,res){
  db.findOneAndDelete({
    _id: req.params.plc
  }).then(function(){
    res.redirect("/")
  })
})

router.get("/update/:plc",function(req,res){
  db.findOne({
    _id:req.params.plc
  }).then(function(data){

    res.render("update",{data})
  })
})

router.post("/update/:plc",function(req,res){
  db.findOneAndUpdate({
    _id:req.params.plc
  },{
    name:req.body.name,
    rate:req.body.rate,
    des:req.body.des,
    time:req.body.time
  }).then(function(){
    res.redirect("/")
  })
})

module.exports = router;
