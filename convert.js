const fs=require('fs')
var path=require('path')
var filepath=path.join(__dirname,'customer-data.csv')
var f=fs.readFileSync(filepath,{encoding:'utf-8'},(err)=>{
    console.log(err);
})
f=f.split("\n")
var json=[]
var header=f.shift().split(",")
f.forEach((d)=>{
     tmp={}
     row=d.split(",")
     for(var i=0;i<header.length;i++)
     {
         tmp[header[i]]=row[i]
     }
     json.push(tmp)
})
var ofile=path.join(__dirname,'customer-data1.json')
fs.writeFileSync(ofile,JSON.stringify(json),'utf-8',(err)=>{
    console.log(err)
})
