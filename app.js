const express=require("express")
const path=require("path")

const app=express()

app.get("/",(req,res)=>{
    let homePath=path.join(__dirname ,"views","home.html")
    res.sendFile(homePath)
})

app.get("/register",(req,res)=>{
    let registerPath=path.join(__dirname ,"views","register.html")
    res.sendFile(registerPath)
})

app.get("/login",(req,res)=>{
    let loginPath=path.join(__dirname ,"views","login.html")
    res.sendFile(loginPath)
})

const publicPath=path.join(__dirname,"public")
app.use(express.static(publicPath))


app.listen(process.env.PORT || 4000,()=>{
})