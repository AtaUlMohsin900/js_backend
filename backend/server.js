import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("server is ready");
app.get('/login', (req, res)=>{
    res.send("This is Login Page!")
})

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);

})