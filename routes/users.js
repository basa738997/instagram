var express = require('express');
var router = express.Router();

const passport = require("passport");
const LocalStategy = require("passport-local");
const UserCollection = require("../models/userschema");   
const { isLoggedIn } = require("../middleware/auth");

passport.use(new LocalStategy(UserCollection.authenticate()));


router.post("/register", async function(req, res, next){
  try{
    const { email, username, password} = req.body;
    const nonChangeableData = { email , username}
    const encryptedData = password;
    await UserCollection.register(nonChangeableData, encryptedData);
    res.redirect("/login")

  }
  catch (error){
    res.send(error)
    console.log(error.message)

  }
})

router.post(
  "/login",
  passport.authenticate("local", {
      successRedirect: "/users/profile",
      failureRedirect: "/login",
  }),
  (req, res, next) => {}
);
router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("profile", { title: "Profile | Socialmedia", user: req.user });
});


router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout(() => {
    res.redirect("/login");
});
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
