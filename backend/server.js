import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Server is Running</h1>");
});
app.get('/login', (req, res) => {
    res.send("This is login page!")
})

const port = process.env.PORT || 3000
app.listen(port,() =>{
    console.log(`Server at http://localhost:${port}`);

     
})  