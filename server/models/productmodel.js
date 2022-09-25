const mongoose = require("mongoose")

const productschema = new mongoose.Schema({

      brand: {     //casio
        type: String,
        required: [true, "Please Enter product Name"],
        trim: true,
        index:"text",
      },
      series: {   //edifice
        type: String,
        required:true,
        index:"text",
      },
      modelno:{   //ed12345
        type: String,
        required:true,
        index:"text",
      },
      description: {
        type: String,
        default:"Folex watch product"
      },
      price: {
        type: Number,
        required: [true, "Please Enter product Price"],
        maxLength: [8, "Price cannot exceed 8 characters"],
      },
      ratings: {
        type: Number,
        default: 0,
      },
      images: [
        {
          displayimg_url: {
            type: String,
            required: true,
          },
          productpage_url: {
            type: String,
            required: true,
          },
        },
      ],
      gender:{
        type:String,
        required:true
      },
      Stock: {
        type: Number,
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1,
      },
      numOfReviews: {
        type: Number,
        default: 0,
      },
      reviews: [
        {
          name: {
            type: String,
            required: true,
          },
          rating: {
            type: Number,
            required: true,
          },
          comment: {
            type: String,
            required: true,
          },
        }
      ],
    
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

mongoose.pluralize(null);
module.exports = mongoose.model("Product", productschema);
