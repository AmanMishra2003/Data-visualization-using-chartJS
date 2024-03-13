const express = require('express')
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    const label = [];
    const data = [];
    const results = [];

        fs.createReadStream('data.csv','utf-8')
        .pipe(csv())
        .on('data', (data) => {
            results.push(data)
            
        })
        .on('end', () => {
            for(let x of results){
                label.push(x.label)
                data.push(x.COUNT)
            }
            res.render("chart", {label,data})
        });
})

app.listen(3000,()=>{})