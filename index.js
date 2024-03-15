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
            const data1 = data.filter((x,idx)=>{
                if(idx%2===0){
                    return x
                }
                
            })
            const data2 = data.filter((x,idx)=>{
                if(idx%2!==0){
                    return x
                }
            })
            const label1 = label.map((x,idx)=>{
                if(idx%2===0){
                    const newX = x.split(" ")[0]
                    return newX[0].toUpperCase() + newX.slice(1)
                }
            }).filter(x=>x!==undefined)
           
            res.render("chart", {label1,data1,data2})
        });
})

app.listen(3000,()=>{})