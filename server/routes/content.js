const express = require("express");
const router = express.Router();

const contentInformation = require("../modules/content").informationContent;
const mediaContent = require("../modules/content").mediaContent;


router.get("/content", (req, res, next) => {
  res.status(200).json({ message: "content retrive Succesfull"});

  //get information from firebase 
});


router.post("/content/create", (req, res, next) => {
  res.status(200).json({ message: "content created Succesfully" });
});


router.put("/content/update", (req, res, next) => {
  res.status(200).json({ message: "content updated Succesfully" });
});


module.exports = router;
