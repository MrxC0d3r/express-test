const express = require('express');
const app = express();

const PORT = 5000

app.use('/', (req,res)=> {
    res.send("Hello Kubernetessss sucess")
});

app.listen(PORT, ()=> {
    console.log("App is running")
})
