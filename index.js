const express=require("express");
const app= express();

let port=8080;
app.listen(port,()=>
{
console.log(`app is listening ${port}`);
});
// app.use((req,res)=>{
    // console.log("Request received");
    // let code="<h1>Fruits</h1> <ul><li>apple</li><li>mango</li></ul>";
    // res.send(code);
// });
app.get("/",(req,res)=>{
    res.send("Yashveer Singh");
});
// app.get("/yash",(req,res)=>{
    // res.send("Yashveeer");
// });
// app.get("/",(req,res)=>{
    // res.send("Singh");
// });
app.get("/:usename",(req,res)=>{
    console.log(req.params);
    res.send("HELLO");
})