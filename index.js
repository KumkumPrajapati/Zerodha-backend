require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser  = require("body-parser");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const {HoldingModel} = require("./model/HoldingModel");
const {OrderModel} = require("./model/OrderModel");
const {PositionModel} = require("./model/PositionModel");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;



const app = express();
 app.use(cors());
 app.use(bodyParser.json());
 app.use(cookieParser());
 app.use('/auth', authRoute);
 



// app.get("/addPosition", async(req,res)=>{
//     let tempPosition =[
//         {
//           product: "CNC",
//           name: "EVEREADY",
//           qty: 2,
//           avg: 316.27,
//           price: 312.35,
//           net: "+0.58%",
//           day: "-1.24%",
//           isLoss: true,
//         },
//         {
//           product: "CNC",
//           name: "JUBLFOOD",
//           qty: 1,
//           avg: 3124.75,
//           price: 3082.65,
//           net: "+10.04%",
//           day: "-1.35%",
//           isLoss: true,
//         },
//       ];
      
//       tempPosition.forEach((item)=>{
//         let newPosition = new PositionModel({
//             product:  item.product,
//             name: item.name ,
//             qty:  item.qty,
           
//             avg:  item.avg,
//             price:  item.price,
//             net:  item.net,
//             day:  item.day,
//             isLoss:  item.isLoss,
//         });
//         newPosition.save();
//    });
// res.send("done");
// })

app.get("/allHolding", async(req,res)=>{
    let allHolding = await HoldingModel.find();
    res.json(allHolding);
});

app.get("/allPosition", async(req,res)=>{
    let allPosition = await PositionModel.find();
    res.json(allPosition);
});

//app.use("/", authRoute);

app.listen(PORT, ()=>{
console.log("app started");
   mongoose.connect(URL)
   console.log("app started");
});