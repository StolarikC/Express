const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("RECEIVED NEW REQUEST")
//     // res.send("Here is the request to your response!")
//     res.send('<h1> This is my webpage! </h1>')
// })

app.get('/', (req, res) => {
    res.send('Welcome to the Homepage!')
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing post ID: ${postId} on the ${subreddit} subreddit!`)
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO /cats!!! THIS IS DIFFERENT FROM A GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!!')
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found when nothing searched!')
    }
    res.send(`<h1>Search results for ${q}.</h1>`);
})

// '*' matches ANYTHING so it must come last as an 'ELSE' catch-all!
app.get('*', (req, res) => {
    res.send("I don't know that path!")
})



app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!")
})
