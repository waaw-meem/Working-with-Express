const http = require('http')

const bodyParsed = require("body-parser")

// Path import
const path = require('path')


const express = require('express')
const app = express();

// routes path
const adminRoute = require("./routes/admin")
const shopRoute = require("./routes/shop")


// Now this is Routing in Different ways

// Body parser (conversion)
app.use(bodyParsed.urlencoded({extended:false}))


// For Executing code of Admin Panel
app.use("/admin",adminRoute)
app.use(shopRoute)

// This is for static file
app.use(express.static(path.join(__dirname,'public')))

// app.use("/add-product",(req,res,next) => {
//     res.send("<form action='/product' method='POST'><input type='text' name='title'/><button>Send</button></form>")
// })

// app.use("/product",(req,res,next) => {
//     console.log(req.body)
//     res.send("<h1>This is Single Product Info</h1>")
//     res.redirect("/")
// })

// app.use("/",(req,res,next) => {
//     console.log('This is second Middleware')
//     res.send("<h1>Weclome to Express</h1>")

// })


// Creating 404 Page
// app.use((req,res,next) => {
//     res.status(404).send("<h1>Page Not Found!</h1>")

// })

// Simple Concept from Middleware

// app.use((req,res,next) => {
//     console.log('This is first Middleware')
//     next(); //  It allows the request to continue to the next middleware in Line
// })

// app.use((req,res,next) => {
//     console.log('This is second Middleware')
// })

// Routing For 404 Page

app.use((req,res,next) => {
    res.sendFile(path.join(__dirname,'views','404page.html'))
})

const server = http.createServer(app);

server.listen(3000)



