const express = req('express')
const app = express()
const {deepseek} = require('./deepseek.js')
const {GPT} = require('./GPTAPI.js')


const PORT = 8000

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Hello, World!');
})

app.get('/Deepseek',(req,res)=>{
    
})

app.get('/GPTAPI',(req,res)=>{

})

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});