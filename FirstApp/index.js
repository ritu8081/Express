const express = require("express");
const app = express()

// app.use((req,res) =>{                                 //everytime request comes it executes
//     console.log("We got a new request")                //req-incoming request res-outgoing response
//     // res.send("Hello we got request this is response")
//     res.send('<h1>Hello</h1>')         //sends http response-res
// })

//root route
app.get('/',(req,res)=>{        //only executes when /cats is requested
    res.send("root route")
})

app.get('/r/:subredit/:postid',(req,res)=>{                     //for avoiding multiple get statements
    const {subredit,postid} = req.params;
    res.send(`<h1>Browsing the ${subredit} subredit and ID${postid}<h1>`)
})


app.post('/cats',(req,res)=>{
        res.send("Post request to /cats")
})
app.get('/cats',(req,res)=>{           //only executes when /cats is requested
    res.send("Meow!!!!!")
})

app.get('/dogs',(req,res)=>{           //only executes when /cats is requested
    res.send("egh!!!!!")
})

app.get('/search',(req,res) => {                //query string
    const {q} = req.query;
    if(!q){
        res.send("nothing found")
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})


app.get('*',(req,res) => {
    res.send("I don't know")
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})
