const express = require('express')
const app = express();
// app.get("/api/users", function(_, res){
        
//     res.send(users);
// });
app.get("/",(req,res)=>{
    res.send("Hello mr Dev")
})
app.listen(3000,()=>{
 console.log("Server started")
})