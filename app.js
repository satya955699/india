const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static("public"))

// Route for each state (GET request)
app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/tradition",(req,res)=>{
    res.render("TRADITION.ejs")
    
})
app.get("/art-craft",(req,res)=>{
    res.render("artcraft.ejs")
})
app.get("/music",(req,res)=>{
    res.render("music.ejs")
})
app.get('/:stateName', (req, res) => {
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
