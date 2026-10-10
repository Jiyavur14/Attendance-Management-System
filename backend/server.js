const express = require('express');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.post("/",(req,res)=>{
    res.send("Server is Running");
})

app.listen(PORT,()=>{
    console.log(`Server is Running on: ${PORT}`)
});