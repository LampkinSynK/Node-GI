import fs from 'fs';
import express from 'express';
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 2000;


app.get('/employees', (req, res) => {
    fs.readFile("./employees.json",(err,data) =>{
        const word = data.toString();
        res.write(word);
        res.end();
    });
});

app.get('/employees/:id', (req, res) => {
    const id = req.params.id;
    if ((id < 11)&&(id > 0)) {
        fs.readFile("./employees.json",(err,data) =>{
            const word = data.toString();
            const parseWord = JSON.parse(word)
            res.send(parseWord.employees[id-1]);
            res.end();
        });
    } else {
        res.send("Could Not Find Employee, Please Search for a different one.")
        res.end();
    }
    
});


app.listen(port,(err)=>{
    if (err) throw err;
    console.log(`listening on port ${port}`)
})