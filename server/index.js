const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config.json')('./env.json');
const jwt = require('jsonwebtoken');
let router = express.Router();
let multer = require('multer');

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/solution5D';

mongoose.connect(mongoDB,{ useUnifiedTopology : true,useNewUrlParser : true});

var signup = require('./model/signup');
var momentlist = require('./model/moment');

app.use('/public',express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, Content-Type, X-Requested-With, Accept");
  next();
})

const port = process.env.PORT || 3000;
app.listen(port,() => { console.log("App listening on port",port)});

app.post('/signup',async function(req,res){

  signup.find({emailId : req.body.emailId},async function(err,result){
    if(result.length > 0){
      res.status(409).send({error : "Duplicate emailId"});
    }
    else{
      const resdata = await signup.create(req.body);
      res.json(resdata);
    }
  });

})

app.get('/signin',function(req,res){
  signup.find({ 'emailId':req.query.emailId, password : req.query.password },function(err,result){
    if(result.length > 0){
      const token = jwt.sign({ sub: result[0]._id }, config.secret, { expiresIn: '1d' });
      res.send({data : result , token : token});
    }
    else{
      res.send({data : err , token : null});
    }
  });
})

const DIR = './public/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});

app.post('/addmoment',upload.array('image'),async function(req,res){

      const reqFiles = [];
      const url = req.protocol + '://' + req.get('host');
      reqFiles.push(url + '/public/' + req.files[0].filename);

      let moment = {
        title : req.body.title,
        tags : req.body.tags,
        imageurl: reqFiles[0]
      };
      try{
        const resdata = await momentlist.create(moment);
        res.json({});
      }catch{
        res.json(err);
      }

})


app.get('/momentlist',async function(req,res){
  const resdata = await momentlist.find({});
  res.json(resdata);
})
