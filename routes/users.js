var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json([
    {
      "_id": "661bb356bef221a459c07e65",
      "age": 27,
      "eyeColor": "green",
      "name": "Angeline Lindsey",
      "gender": "female",
      "company": "UTARIAN",
      "email": "angelinelindsey@utarian.com",
      "phone": "+1 (808) 498-3994",
      "address": "780 Porter Avenue, Cleary, Alabama, 6601",
      "about": "Nisi incididunt ad ex aute. Consectetur nostrud exercitation veniam proident cillum. Mollit sit occaecat culpa ut magna deserunt minim exercitation duis sint duis reprehenderit qui commodo. Mollit magna adipisicing laboris velit aute. Id amet sint dolore enim cupidatat irure ullamco irure ex magna qui. Ad excepteur Lorem amet elit duis quis ex labore ut est tempor deserunt.\r\n",
      "registered": "2017-09-02T10:39:11 -05:00"
    },
    {
      "_id": "661bb356286f9e8f351a55e1",
      "age": 33,
      "eyeColor": "brown",
      "name": "Martin Marquez",
      "gender": "male",
      "company": "ENDICIL",
      "email": "martinmarquez@endicil.com",
      "phone": "+1 (969) 583-3723",
      "address": "616 Sandford Street, Snelling, Washington, 3651",
      "about": "Aliqua consequat et proident tempor cupidatat aute ut reprehenderit pariatur adipisicing ipsum. Pariatur ullamco sit sunt aliqua nisi amet aliquip cupidatat. Nulla sunt culpa consequat minim amet incididunt eu.\r\n",
      "registered": "2024-01-07T06:39:56 -05:00"
    },
    {
      "_id": "661bb356609a4ca0fd363646",
      "age": 38,
      "eyeColor": "brown",
      "name": "Wolf Valentine",
      "gender": "male",
      "company": "GRACKER",
      "email": "wolfvalentine@gracker.com",
      "phone": "+1 (867) 514-3058",
      "address": "193 Randolph Street, Sussex, Idaho, 3553",
      "about": "Aliqua officia in in aliquip do do eiusmod. Non ut laborum eu dolor in reprehenderit voluptate elit Lorem mollit. Laboris culpa aliquip do culpa eiusmod nulla laborum et elit occaecat sit. Esse Lorem exercitation do fugiat ipsum nostrud nisi qui enim commodo incididunt ex. Excepteur duis est aliqua culpa occaecat labore laborum amet anim nulla ad veniam nostrud ex. Quis minim quis aliquip laboris deserunt nisi minim in mollit amet esse voluptate.\r\n",
      "registered": "2019-09-23T06:56:14 -05:00"
    },
    {
      "_id": "661bb356663ba85e3bc67535",
      "age": 39,
      "eyeColor": "blue",
      "name": "Corina Underwood",
      "gender": "female",
      "company": "TURNLING",
      "email": "corinaunderwood@turnling.com",
      "phone": "+1 (978) 406-3062",
      "address": "986 Sackman Street, Westmoreland, South Dakota, 8111",
      "about": "Culpa irure quis laborum duis reprehenderit do adipisicing dolor anim ea. Dolore aliqua in ipsum sint adipisicing nulla esse sit sint aliquip et proident. Incididunt consequat ex voluptate sint aliquip mollit reprehenderit officia voluptate cillum amet ut. Laborum reprehenderit velit dolore voluptate minim labore pariatur officia reprehenderit et. Dolor proident aliqua deserunt ut nisi consequat ad ut ipsum officia tempor. Occaecat qui labore labore ex ad ad proident amet cillum dolore ipsum consequat.\r\n",
      "registered": "2019-07-31T06:43:37 -05:00"
    },
    {
      "_id": "661bb3562c9948612041568f",
      "age": 39,
      "eyeColor": "brown",
      "name": "Genevieve Richard",
      "gender": "female",
      "company": "AQUOAVO",
      "email": "genevieverichard@aquoavo.com",
      "phone": "+1 (802) 414-2516",
      "address": "392 Windsor Place, Thornport, South Carolina, 735",
      "about": "Ut ipsum excepteur ad quis irure amet. Ad esse quis adipisicing aliquip veniam id. Ex cupidatat ipsum aute consectetur duis qui quis eiusmod tempor voluptate in enim nulla id. Excepteur deserunt mollit exercitation ex. Reprehenderit culpa tempor adipisicing esse veniam eu officia sunt. Ex in veniam dolor laboris sit. Esse elit quis pariatur mollit proident ipsum velit id exercitation.\r\n",
      "registered": "2024-03-09T02:19:41 -05:00"
    },
    {
      "_id": "661bb356c38b96e6625c72d1",
      "age": 20,
      "eyeColor": "blue",
      "name": "William Wooten",
      "gender": "male",
      "company": "GENMOM",
      "email": "williamwooten@genmom.com",
      "phone": "+1 (846) 555-3540",
      "address": "311 Huron Street, Taycheedah, Utah, 1224",
      "about": "Nulla et id Lorem ullamco ullamco dolore est laboris occaecat laboris. Nisi laboris cillum sunt irure esse ut. Aliqua sit adipisicing est exercitation excepteur eiusmod id amet ea labore velit.\r\n",
      "registered": "2020-06-24T12:26:56 -05:00"
    },
    {
      "_id": "661bb356caea8e37348d7761",
      "age": 39,
      "eyeColor": "green",
      "name": "Theresa Estes",
      "gender": "female",
      "company": "ZENTILITY",
      "email": "theresaestes@zentility.com",
      "phone": "+1 (834) 480-2290",
      "address": "583 Bay Avenue, Wanship, Montana, 6633",
      "about": "Non commodo irure esse ad minim nulla nisi fugiat consectetur tempor velit elit tempor ea. Ad ipsum non nostrud ex in mollit excepteur. Non ipsum consectetur eu aliquip nostrud aliqua fugiat qui cillum excepteur consequat eu nisi. Exercitation Lorem pariatur excepteur duis incididunt ipsum proident nulla qui commodo. Proident velit quis esse sunt mollit deserunt ad deserunt est. Veniam qui veniam Lorem labore ad ullamco ea commodo et eu. Ullamco in incididunt et laborum minim aliqua commodo id aliqua enim dolor voluptate.\r\n",
      "registered": "2020-05-15T01:37:35 -05:00"
    }
  ]);
});

module.exports = router;
