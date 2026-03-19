// const express = require("express");
// const db = require("./db");
// // const cors = require("cors");
// const app = express();


// const multer = require("multer")
// const path = require("path");

// const userModel = require("./userModel");
// // const Product = require("./productModel");
// const U_router = require("./userRoutes");
// app.set("view engine","ejs")
// app.use(express.static("public"));

// app.use("/upload", express.static(path.join(__dirname,"upload")))
// app.use(express.urlencoded({ extended: true }))
// // const productRouter = require("./productRotes")

// // const connectDB = require("./database");

// // connectDB();

// // app.use(cors())
// app.use(express.json());

// app.use("/user",U_router)
// app.use("/products", productRouter);



// // app.post("/add", async (req, res) => {
// //   const data = await userModel.create(req.body);
// //   res.send(data);
// // });

// // app.get("/", async(req, res) => {
// //     const data = await userModel.find({})
// //   res.send(data)
// // });

// // app.delete("/:id",async(req,res) => {
// //   const id = req.params.id
// //   const data = await userModel.findByIdAndDelete(id);
// //   res.send(data)
// // })

// // app.patch("/:id", async (req, res) => {
// //   const id = req.params.id; 
// //   const data = await userModel.findByIdAndUpdate(id, req.body, { new: true });
// //   res.send(data); 
// // });


// // // POST - naya product add karne ke liye
// // app.post("/products", async (req, res) => {
// //   try {
// //     const data = await Product.create(req.body);
// //     res.status(201).send(data);
// //   } catch (err) {
// //     res.status(400).send({ error: err.message });
// //   }
// // });

// // // GET - sab products fetch karne ke liye
// // app.get("/products", async (req, res) => {
// //   try {
// //     const data = await Product.find({});
// //     res.send(data);
// //   } catch (err) {
// //     res.status(500).send({ error: err.message });
// //   }
// // });

// const storage = multer.diskStorage({
//   destination: function (req,file,cd) {
//     cd(null,'upload/')
//   },
//   filename: function(req,file,cd) {
//     cd(null, file.originalname)
//   }
// })

// const upload = multer({ storage : storage}).single("image")

// app.post("/insertData", upload,async(req,res) => {
//   const {username, password}= req.body
//   let image=""
//   if(req.file){
//     image=req.file.path
//   }

//   await userModel.create({
//     username:username,
//     password:password,
//     image:image
//   }).then((data)=> {
//     console.log(data)
//     res.redirect("/")
//   }).catch((err)=> {
//     console.log(err)
//   })
// })

// app.get("/",async(req,res) =>{
//   await userModel.find({}).then((data) => {
//     res.render("home",{data})
//   }).catch((err) =>{
//     console.log(err)
//   })
// })

// app.delete("/:id",upload, async (req,res) => {
//   const id = req.query.id;
//   console.log(id)
//   await userModel.findByIdAndDelete(id)
//   res.send("success");
// })

// app.listen(4000, () => {
//   console.log("Server running on port 4000");
// });


const express = require("express");
const db = require("./db");
const U_router = require("./bookRoute");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/book", U_router);


// Server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});