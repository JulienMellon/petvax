const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const petsController = require("../controllers/pets");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, petsController.getProfile);
router.get("/addPet", ensureAuth, petsController.getAddPet)
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

//testing splash.ejs
router.get("/splash", homeController.getSplash)
router.get("/test", homeController.getTestPage)

module.exports = router;
