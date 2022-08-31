const express= require("express")

const app = express();


app.get("/",(req, res)=>{
    res.status(200).send("Welcome to my server")
    
})

app.post("/",(req,res)=>{
    res.status(201).send("Your data has been saved.")
})
app.put("/",(req,res)=>{
    res.status(200).send("Data successfully replaced.")
})
app.patch("/",(req,res)=>{
    res.status(200).send("Data successfully updated.")
})
app.delete("/",(req,res)=>{
    res.status(200).send("Data completely deleted.")
})

app.listen(4000,(err)=>{
    console.log("🚀server is listening on http://localhost:4000")
})