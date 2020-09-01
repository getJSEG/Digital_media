//this is all the content for the including text information and gallery mediaLink
'use strict'
const mongoose = require("mongoose");

let informationSchema = new mongoose.Schema({
  title:{ type: String, required: true },
  paragraph: { type: String, required: true, trim: true},
  image: { type: String, required: true }
});

let mediaSchema = new mongoose.Schema({
  category:{ type: String, required: true},
  image:[{ type:String, required: true }]
});



let informationContent = mongoose.model("informationContent",informationSchema);
let mediaContent = mongoose.model("mediaContent", mediaSchema);


module.exports.informationContent = informationContent;
module.exports.mediaContent = mediaContent;
