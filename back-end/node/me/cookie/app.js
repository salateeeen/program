const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());

// Middleware يقرأ Cookie ويحطها داخل req.cookies
app.use(cookieParser());

app.use(cors())
// Database وهمية
const users = [
  {
    id: 1,
    name: "Sultan"
  }
];

// Login
app.post("/login", (req, res) => {

  const { userId } = req.body;


  const user = users.find(
    user => user.id === userId
  );


  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }


  // هنا السيرفر يرسل Cookie للمتصفح
  res.cookie(
    "userId",
    user.id,
    {
      httpOnly: true,
      maxAge: 1000 * 60 * 60
    }
  );


  res.json({
    message: "Logged in"
  });

});



// Profile
app.get("/profile", (req, res)=>{


  // نقرأ Cookie
  /// automatically sends by request
  const userId = req.cookies.userId;


  console.log("Cookie value:", userId);



  const user = users.find(
    user => user.id == userId
  );


  if(!user){
    return res.status(401).json({
      message:"Not logged in"
    });
  }



  res.json({
    user
  });

});



app.listen(3000,()=>{
  console.log("Server running on port 3000");
});