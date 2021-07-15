const express = require('express');
const app = express();

const PORT = 5000

app.use('/', (req,res)=> {
    res.send("Hello Kubernetes")
});

app.listen(PORT, ()=> {
    console.log("App is running")
})