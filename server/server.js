const User = require("./model/User");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5050;
const mongoDBUrl = "mongodb://localhost:27017/userStorageDB";
const mongoose = require("mongoose");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
mongoose.connect(mongoDBUrl, () => {
  console.log("connected to the database");
});
app.post('/login',async(req,res)=>{
    let { account, password } = req.body.userInfo;
    console.log(User)
    console.log(`account=${account},password=${password}`);
    console.log(account==User.find({"account":"user"}))
    if(account == User.findOne(account)&&password == User.findOne(password))alert("登录成功")
    
})
app.post("/contact", async (req, res) => {
  let { account, password } = req.body.userRegisterInfo;
  let email = req.body.email;

  try {
    await User.create({
      account: account,
      password: password,
      email: email,
      createAt: Date.now(),
    });
    console.log(`${JSON.stringify(req.body.userRegisterInfo)};${email}`);
    res.send({ status: "OK" });
  } catch (e) {
    console.log("no");
    res.send({ status: "ERROR" });
  }
});
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}....`);
});
