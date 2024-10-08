const express = require('express');
const path = require('path');
const pg=require("pg")
const app = express();

// Serve static files
app.use(express.static("public"))
const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"culture",
    password:"satya832004",
    port:3000
})

db.connect()

// Route for each state (GET request)
app.get("/",async(req,res)=>{
    const story=await db.query("SELECT * FROM  sotry")
    
    
    res.render("index.ejs",{story:story.rows})
})
app.get("/story/:id",async(req,res)=>{
 
    // // const cont= await db.query("SELECT * FROM  sotry WHERE id=$1",[id])
    
    res.render("music.ejs")

})

app.get("/india/tradition",(req,res)=>{
    res.render("TRADITION.ejs")
    
})
app.get("/art-craft",(req,res)=>{
    res.render("artcraft.ejs")
})
app.get("/music",(req,res)=>{
    res.render("music.ejs")
})
app.get('/map/:stateName', (req, res) => {
    // const stateName = req.params.stateName;
    res.render("state.ejs")
   
});
// POST request example
app.post('/:stateName', express.json(), (req, res) => {
    const stateName = req.params.stateName;
    const userInput = req.body.data;
   
    console.log(userInput)
    
    res.json({ message: `You sent data: ${userInput} for state: ${stateName}` });
    
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);  
});
