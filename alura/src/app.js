import express from "express";
const app = express()
app.get('/', (req, res)=>{
    res.json({
        "message": "Bom dia"
    })
})


export default app;