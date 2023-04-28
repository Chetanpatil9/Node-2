const { log } = require('console')
const express = require('express')

const server = express()
const port = 8000

server.get('/', (req,res)=>{
    
    res.end('<h1>Hello Node JS</h1>')
})

server.get('/api/main', (req,res)=>{
    const title = "Express?"
    const express = "Express is a popular and widely used Node.js framework for building web applications and APIs."
    res.send([title,express])
})

server.listen(8000,console.log("server running"))