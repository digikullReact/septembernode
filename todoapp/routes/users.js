var express = require('express');
var router = express.Router();

const data=[
  {
    "_id": "6457b208d2c79d39931cf095",
    "age": 85,
    "name": "Johnson Russell",
    "address": "900 Beard Street, Hollymead, Florida, 7769"
  },
  {
    "_id": "6457b2080ddf1a3b60c2a33e",
    "age": 54,
    "name": "Mayra Curtis",
    "address": "965 Freeman Street, Biehle, Delaware, 2079"
  },
  {
    "_id": "6457b20827109c80cf5be302",
    "age": 45,
    "name": "Myers Howe",
    "address": "168 Eaton Court, Thornport, Washington, 7628"
  },
  {
    "_id": "6457b208291b35a58a509b74",
    "age": 93,
    "name": "Lola Carlson",
    "address": "656 Belvidere Street, Vicksburg, Nevada, 4011"
  },
  {
    "_id": "6457b208d0a22195ba6d4221",
    "age": 33,
    "name": "Massey Hancock",
    "address": "976 Lester Court, Coaldale, South Carolina, 3051"
  },
  {
    "_id": "6457b20852899c5f32c8d0d0",
    "age": 14,
    "name": "Richmond Moon",
    "address": "656 Hopkins Street, Maury, Connecticut, 490"
  },
  {
    "_id": "6457b20846e70cadf55ae1a0",
    "age": 81,
    "name": "Turner Humphrey",
    "address": "113 Chester Avenue, Enoree, Montana, 8251"
  },
  {
    "_id": "6457b20849e205f2830634a3",
    "age": 38,
    "name": "Dollie Alvarado",
    "address": "597 Creamer Street, Saranap, Northern Mariana Islands, 1285"
  },
  {
    "_id": "6457b2087012ab94f036eed0",
    "age": 68,
    "name": "Jeanine Marks",
    "address": "599 Dodworth Street, Helen, Oregon, 1014"
  },
  {
    "_id": "6457b20848b6239cf06e6993",
    "age": 83,
    "name": "Tanya Carroll",
    "address": "886 Gotham Avenue, Abiquiu, New Jersey, 2852"
  },
  {
    "_id": "6457b2083002eae784b5e2a1",
    "age": 21,
    "name": "Alma Horton",
    "address": "203 Micieli Place, Clara, North Dakota, 8005"
  }
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/list', function(req, res, next) {
 
  res.render("user",{data:data});
});


router.get('/profile/:id', function(req, res, next) {
 
  res.render("userprofile")
});



module.exports = router;
