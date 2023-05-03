import express from 'express';
const app = express()
const port = 800
app.use(express.static('public'));
app.use(express.json())


app.get('/', async (req, res) => {
    try {
        res.sendFile(`${__dirname}/public/index.html`) 
    } catch (e) {
        console.log(e);
        res.status(500)
    }
})


app.listen(port, () => {
    console.log(`listen on port ${port}`);
})

