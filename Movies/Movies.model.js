const mongoose=require("mongoose");
const MoviesSchema=new mongoose.Schema({
       Name: {
          type: String
        },
        Age: {
          type: String
        },
        Gender: {
          type: String
        },
        Country: {
          type: String
        },
        Profession: {
          type: String
        },
      },
      { timestamps: true }
)
const MoviesData= mongoose.model("Freedom",MoviesSchema);
module.exports=MoviesData;
