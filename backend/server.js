const express = require('express');//import express
const mysql = require('mysql');
const cors = require('cors');
const dotenv=require('dotenv');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const multer=require('multer');
const path=require('path');
const stripe = require("stripe")("sk_test_51PLWbLSFjZBdM15RHpbhFY2kttGUw4GjTcVAxxToWNLhDNWEXGLLqPFqCsn7TTKIpc9DB1HQfVoLpI6sZSEuOYt100HXhNgEZq")
const cookieparser=require('cookie-parser');
const { Console } = require('console');
dotenv.config({path:'./secrets.env'});
const app = express();//to make sure start the servers
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}));
app.use(express.json());

app.use(express.static('uploads'));
app.use(cookieparser());
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        console.log("tonton");
        callback(null,`image-${Date.now()}.${file.originalname}`);
    }
});
const upload=multer({storage:storage});
//making connection
const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});
db.connect((error)=>{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("Database Connected");
    }
})
const verifyUser=(req,res,next)=>{
    const token1=req.cookies.name
    const token2=req.cookies.email
    const token3=req.cookies.userid
    const token4=req.cookies.userImage
    const token5=req.cookies.userAddress
    const token6=req.cookies.userMobile
    const token7=req.cookies.userdob
    if((!token1)||(!token2)||(!token3)||(!token4)||(!token5)||(!token6)||(!token7))
    {
        return res.json({status:"Not"})
    }
    else{

        jwt.verify(token1,"jwt-seceret-key-for-name",(err,decoded)=>{
            if(err)
            {
                return res.json({status:"Not"})
            }
            else{
                req.name=decoded.name
                console.log(req.name);
            }
        })
        jwt.verify(token2,"jwt-seceret-key-for-email",(err,decoded)=>{
            if(err)
            {
                return res.json({status:"Not"})
            }
            else{
                req.email=decoded.email;
            }
        })
        jwt.verify(token3,"jwt-seceret-key-for-userid",(err,decoded)=>{
            if(err)
            {
                console.log("In error");
                return res.json({status:"Not"})
            }
            else{
                req.userid=decoded.userid;
            }
        })
        jwt.verify(token4,"jwt-seceret-key-for-userImage",(err,decoded)=>{
            if(err)
            {
                console.log("In error");
                return res.json({status:"Not"})
            }
            else{
                req.userImage=decoded.userImage;
            }
        })
        jwt.verify(token5,"jwt-seceret-key-for-userAddress",(err,decoded)=>{
            if(err)
            {
                console.log("In error");
                return res.json({status:"Not"})
            }
            else{
                req.userAddress=decoded.userAddress;
            }
        })
        jwt.verify(token6,"jwt-seceret-key-for-userMobile",(err,decoded)=>{
            if(err)
            {
                console.log("In error");
                return res.json({status:"Not"})
            }
            else{
                req.userMobile=decoded.userMobile;
            }
        })
        jwt.verify(token7,"jwt-seceret-key-for-userdob",(err,decoded)=>{
            if(err)
            {
                console.log("In error");
                return res.json({status:"Not"})
            }
            else{
                req.userdob=decoded.userdob;
            }
        })
        next();
    }
}
app.get('/getcoke',verifyUser,(req,res)=>{
    return res.json({status:"Success",name:req.name,email:req.email,userid:req.userid,userImage:req.userImage,userAddress:req.userAddress,userMobile:req.userMobile,userdob:req.userdob});
})


app.post('/signup',upload.single('image'), (req , res)=>{
    
    console.log(req);
    const sql = "INSERT INTO USER (`name` , `email` , `mobile`, `password` , `address`,`Image`,`Dob`) VALUES(?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.mobile,
        req.body.password,
        req.body.address,
        req.file.filename,
        req.body.dob
    ]
    console.log(values );
    db.query(sql , [values], (err , data)=>
    {  
        if(err)
        {
            console.log(err);
            return res.json({status:"Email already Exist"});
        }
        return res.json("No Error");
    })
});
app.post('/uploaditem',upload.array('photo',12), (req , res)=>{
    console.log("MALI");
    console.log(req.body.uid)
    str1="";
    console.log(req.files.length) 
    for(let i=0;i<req.files.length;i++)
        {
            if(i<req.files.length-1)
                {
                    str1=str1+req.files[i].filename+",";
                }
                else{
                    str1=str1+req.files[i].filename;
                }
        }  
        console.log(str1);
    const sql = "INSERT INTO carproduct (`Name` ,`Model`, `StartingPrice` , `StartingTime`, `EndingTime` , `Conditionn` ,`Color`,`Fuel`,`Mileage`,`Doors`,`Picture`,`Transmission`,`Engine`,`MadeIn`,`bidIncreament`,`UserId`,`purchase`) VALUES(?)"
     const values = [
        req.body.name,
         req.body.model,
         req.body.startingprice,
         req.body.startingtime,
         req.body.endingtime,
         req.body.condition,
         req.body.color,
        req.body.fuel,
        req.body.milage,
        req.body.doors,
        str1,
        req.body.transmission,
        req.body.engine,
        req.body.madeIn,
        req.body.bidIncreament,
        req.body.uid,
        req.body.purchase
    ]
    console.log(values , sql);
    db.query(sql , [values], (err , data)=>
    {  
        if(err)
        {
            console.log("in if");
            console.log(err);
            return res.json({status:"notsucces"});
        }
        else{
            console.log("In else");
        return res.json({status:"success"});
        }
    })
});
app.post('/uploadhouseitem',upload.array('photo',12), (req , res)=>{
    str1="";
    console.log(req.files.length) 
    for(let i=0;i<req.files.length;i++)
        {
            if(i<req.files.length-1)
                {
                    str1=str1+req.files[i].filename+",";
                }
                else{
                    str1=str1+req.files[i].filename;
                }
        }  
    const sql = "INSERT INTO house (`Housename` , `Floors` , `startingprice`, `startingtime` , `bedrooms` ,`plotSize`,`endingtime`,`address`,`conditionn`,`picture`,`BidIncreament`,`UserId`,`purchase`) VALUES(?)"
    const values = [
        req.body.HouseName,
        req.body.HouseFloors,
        req.body.HouseStartingPrice,
        req.body.HouseStartingTime,
        req.body.HouseBedrooms,
        req.body.HousePlotSize,
        req.body.HouseEndingTime,
        req.body.HouseAddress,
        req.body.HouseCondition,
        str1 ,
        req.body.HouseBidIncreament,
        req.body.uid,
        req.body.purchase
    ]
    console.log(values , sql);
    db.query(sql , [values], (err , data)=>
    {  
        if(err)
        {
            console.log("in if");
            console.log(err);
            return res.json({status:"notsucces"});
        }
        else{
            console.log("In else");
        return res.json({status:"success"});
        }
    })
});
app.post('/addtofav',(req , res)=>{
    const sql1 = "Insert into fvtbids(`userId`,`ItemId`,`Type`) VALUES(?)";
    const values = [
        req.body.userid,
        req.body.itemId,
       req.body.type
        ]
        console.log(values , sql1);
        db.query(sql1 , [values], (err , data)=>
        {  
            if(err)
            {
                console.log("in if");
                console.log(err);
                return res.json({status:"notsucces"});
            }
            else{
                console.log("In else");
            return res.json({status:"success"});
            }
        })
})
app.post('/uploadjewelryitem',upload.array('photo',12), (req , res)=>{
    console.log(req.file);
    str1="";
    console.log(req.files.length) 
    for(let i=0;i<req.files.length;i++)
        {
            if(i<req.files.length-1)
                {
                    str1=str1+req.files[i].filename+",";
                }
                else{
                    str1=str1+req.files[i].filename;
                }
        }  
    const sql = "INSERT INTO jewelry (`Name` , `MadeIn` , `Designer`, `Type`,`StartingTime` , `StartingPrice` ,`EndingTime`,`File`,`Material`,`Brand`,`Conditionn`,`Size`,`BidIncreament`,`UserId`,`purchase` ) VALUES(?)"
    const values = [
        req.body.ProductName,
        req.body.JewelryMadeIn,
        req.body.JewelryDesigner,
        req.body.JewelryType,
        req.body.JewelryStartingTime,
        req.body.JewelryStartingPrice,
        req.body.JewelryEndingTime,
        str1,
        req.body.JewelryMaterial,
        req.body.JewelryBrand,
        req.body.JewelryCondition,
        req.body.JewelrySize,
        req.body.JeweleryBidIncreament,
        req.body.uid,
        req.body.purchase
    ]
    console.log(values , sql);
    db.query(sql , [values], (err , data)=>
    {  
        if(err)
        {
            console.log("in if");
            console.log(err);
            return res.json({status:"notsucces"});
        }
        else{
            console.log("In else");
        return res.json({status:"success"});
        }
    })
});
app.post('/logout', (req , res)=>{
    res.clearCookie('name');
    res.clearCookie('email');
    res.clearCookie('userid');
    res.clearCookie('userImage');
    res.clearCookie('userAddress');
    res.clearCookie('userMobile');

    res.clearCookie('userdob');
    return res.json({status:"success"});
})
app.post('/signin', (req , res)=>{
    const sql = `SELECT * FROM USER WHERE email = '${req.body.email}';`
    const values = [
        req.body.email,
    ]
    db.query(sql , [values], (err , data)=>
    {
        if(err)
        {
            console.log(err);
        }
        if(data.length==0)
        {
            console.log(err);
            return res.json({status:"Email Not Matched"});
        }
        else if(data[0].password!=req.body.password)
        {
            return res.json({status:"Password Not Matched"});
        }
        const email=data[0].email;
        const name=data[0].name;
        const userid=data[0].Id;
        const userImage=data[0].Image;
        const userAddress=data[0].address;
        const userMobile=data[0].mobile;
        const userdob=data[0].Dob;
        console.log(userid);
        console.log(name);

        const emailCookie=jwt.sign({email},"jwt-seceret-key-for-email",{expiresIn:'1d'})
        const nameCookie=jwt.sign({name},"jwt-seceret-key-for-name",{expiresIn:'1d'})
        const idCookie=jwt.sign({userid},"jwt-seceret-key-for-userid",{expiresIn:'1d'})
        const imageCookie=jwt.sign({userImage},"jwt-seceret-key-for-userImage",{expiresIn:'1d'})
        const AddressCookie=jwt.sign({userAddress},"jwt-seceret-key-for-userAddress",{expiresIn:'1d'})
        const MobileCookie=jwt.sign({userMobile},"jwt-seceret-key-for-userMobile",{expiresIn:'1d'})
        const dobCookie=jwt.sign({userdob},"jwt-seceret-key-for-userdob",{expiresIn:'1d'})
        res.cookie("name",nameCookie);
        res.cookie("email",emailCookie);
        res.cookie("userid",idCookie);
        res.cookie("userImage",imageCookie);
        res.cookie("userAddress",AddressCookie);
        res.cookie("userMobile",MobileCookie);
        res.cookie("userdob",dobCookie);
        return res.json({status:'Done'});
    })
});

app.get('/fetchallproduct',(req , res)=>{
    const sql = `SELECT * FROM carproduct;`
    db.query(sql , (err , data)=>
    {
        if(err)
        {
            console.log(err);
            return res.json({status:"notsucces"});
        }
        else
        {
            console.log(data);
            for(let i=0;i<data.length;i++)
            {
                const splitArray=data[i].Picture.split(',');
                data[i].Picture=splitArray;
            }
            
        return res.json({status:"ok",data:data});

        }
       
    })
});
app.post('/getmybids', async (req , res)=>{
    console.log("Ilove you");
    console.log(req.body.userid)
    const sql = `SELECT * FROM bidhistory where UserId='${req.body.userid}'`
   
    
    try {
        const data = await new Promise((resolve, reject) => {
            db.query(sql, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });

        let mainarray = [];

        for (let i = 0; i < data.length; i++) {
            const sql1 = `SELECT * FROM ${data[i].type} where ID='${data[i].ItemId}'`;
            console.log(sql1)
            let typ = data[i].type;
            let am=data[i].BidAmount;
            const itemData = await new Promise((resolve, reject) => {
                db.query(sql1, (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                });
            });

            let values;
            console.log(typ);

            if (typ == "carproduct") {
                console.log("item data is: ",itemData)
                const splitArray=itemData[0].Picture.split(',');
                itemData[0].Picture=splitArray;
                values = {
                    id:itemData[0].ID,
                    type:"carproduct",
                    amount:am,
                    name: itemData[0].Name,
                    image: itemData[0].Picture[0],
                    startingPrice: itemData[0].StartingPrice,
                    startingTime: itemData[0].StartingTime,
                    endingTime: itemData[0].EndingTime
                };
            } else if (typ == "house") {
                const splitArray=itemData[0].picture.split(',');
                itemData[0].picture=splitArray;
                values = {
                    
                    id:itemData[0].ID,
                    amount:am,
                    type:"house",
                    name: itemData[0].Housename,
                    image: itemData[0].picture[0],
                    startingPrice: itemData[0].startingprice,
                    startingTime: itemData[0].StartingTime,
                    endingTime: itemData[0].EndingTime
                };
            } else if (typ == "jewelry") {
                const splitArray=itemData[0].File.split(',');
                itemData[0].File=splitArray;
                values = {
                    
                    id:itemData[0].ID,
                    amount:am,
                    type:"jewelry",
                    name: itemData[0].Name,
                    image: itemData[0].File[0],
                    startingPrice: itemData[0].StartingPrice,
                    startingTime: itemData[0].StartingTime,
                    endingTime: itemData[0].EndingTime
                };
            }

            mainarray.push(values);
        }
console.log(mainarray)
        return res.json({ status: "ok", data: mainarray });

    } catch (err) {
        console.log(err);
        return res.json({ status: "notsuccess" });
    }
});

app.post('/fetchAllFvtBids', async (req, res) => {
    console.log("yooo");
    console.log(req.body.userid);
    const sql = `SELECT * FROM fvtbids where userId='${req.body.userid}'`;

    try {
        const data = await new Promise((resolve, reject) => {
            db.query(sql, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });

        let mainarray = [];

        for (let i = 0; i < data.length; i++) {
            const sql1 = `SELECT * FROM ${data[i].Type} where ID='${data[i].ItemId}'`;
            let typ = data[i].Type;

            const itemData = await new Promise((resolve, reject) => {
                db.query(sql1, (err, result) => {
                    if (err) reject(err);
                    else resolve(result);
                });
            });

            let values;
            console.log(typ);

            if (typ == "carproduct") {
                const splitArray=itemData[0].Picture.split(',');
                itemData[0].Picture=splitArray;
                values = {
                    id:itemData[0].ID,
                    type:"carproduct",
                    name: itemData[0].Name,
                    image: itemData[0].Picture[0],
                    startingPrice: itemData[0].StartingPrice,
                    startingTime: itemData[0].StartingTime,
                    endingTime: itemData[0].EndingTime
                };
            } else if (typ == "house") {
                const splitArray=itemData[0].picture.split(',');
                itemData[0].picture=splitArray;
                values = {
                    
                    id:itemData[0].ID,
                    
                    type:"house",
                    name: itemData[0].Housename,
                    image: itemData[0].picture[0],
                    startingPrice: itemData[0].startingprice,
                    startingTime: itemData[0].StartingTime,
                    endingTime: itemData[0].EndingTime
                };
            } else if (typ == "jewelry") {
                const splitArray=itemData[0].File.split(',');
                itemData[0].File=splitArray;
                values = {
                    
                    id:itemData[0].ID,
                    
                    type:"jewelry",
                    name: itemData[0].Name,
                    image: itemData[0].File[0],
                    startingPrice: itemData[0].StartingPrice,
                    startingTime: itemData[0].StartingTime,
                    endingTime: itemData[0].EndingTime
                };
            }

            mainarray.push(values);
        }
console.log(mainarray)
        return res.json({ status: "ok", data: mainarray });

    } catch (err) {
        console.log(err);
        return res.json({ status: "notsuccess" });
    }
});

app.get('/fetchalljewelryproduct',(req , res)=>{
    const sql = `SELECT * FROM  jewelry;`
    db.query(sql , (err , data)=>
    {
        if(err)
        {
            console.log(err);
            
            return res.json({status:"notsucces"});
        }
        else
        {
            for(let i=0;i<data.length;i++)
                {
                    const splitArray=data[i].File.split(',');
                    data[i].File=splitArray;
                }
            console.log(data.File);
            console.log(data);
            res.send(data);
            
        }
       
    })
});
app.get('/fetchallhouseproduct',(req , res)=>{
    const sql = `SELECT * FROM  house;`
    db.query(sql , (err , data)=>
    {
        if(err)
        {
            console.log(err);
            return res.json({status:"notsucces"});
        }
        else
        {

            for(let i=0;i<data.length;i++)
                {
                    const splitArray=data[i].picture.split(',');
                    data[i].picture=splitArray;
                }
                
            console.log(data);
            res.send(data);
            
        }
       
    })
});
app.post('/getBidHistoryForAProduct',(req , res)=>{
    
    console.log("In This")
    console.log(req.body);
    const sql = `SELECT * FROM bidhistory where ItemId='${req.body.itemID}' and type='${req.body.type}' `;
    console.log(sql);

    
    db.query(sql, (err , data)=>
    {
        console.log(data);
        if(err)
        {
            return res.json({status:"notsucces"});
        }
        else
        {
            res.send(data);
            
        }
       
    })
});
app.get("/product/:pid/:type",(req,res)=>
{
    console.log('In submit');
    const {pid,type}=req.params;
    console.log(type);
    console.log(pid);
    const sql = "SELECT * FROM " + type + " WHERE ID = ?";
    db.query(sql,pid,(err,result)=>
    {
        if(type=='carproduct')
            {
       const splitArray=result[0].Picture.split(',');
       result[0].Picture=splitArray;
     console.log(result[0].Picture[0]); 
            }
            else if(type=='jewelry'){
                const splitArray=result[0].File.split(',');
                result[0].File=splitArray;
              console.log(result[0].File[0]);
            }  
            else if(type=='house')
                {
                    const splitArray=result[0].picture.split(',');
                result[0].picture=splitArray;
                }
       if(err)
       {
        console.log(err);
       }
       

       const sql2 = `Select max(BidAmount) as m,count(BidAmount) as c from  bidhistory where ItemId ='${pid}' and  type='${type}' `
       console.log(sql2);
    const values2 = [
        pid ,
        type
    ]
    db.query(sql2 , [values2], (err , data)=>
    {  
        if(err)
        {
            console.log(err);
            return res.json({status:"Not Ok"});
        }
        console.log("Maximum")
        console.log(data[0].m)
        console.log(data[0].c)
        const sql3 = `Select distinct(UserId) from  bidhistory where ItemId ='${pid}' and  type='${type}' `
        db.query(sql3, (err , data2)=>
        {
        if(err)
        {
            console.log(err);
            return res.json({status:"Not Ok"});
        }
        console.log(data2.length);
        return res.json({status:"ok",data:result,totalBids:data[0].c,price:data[0].m,totalBidders:data2.length});


    })
})
    });
});
app.get('/userbids', (req, res) => {
  const category=req.query.category;
  let query;
  if(category==='past')
  {
    query = 'SELECT * FROM bidhistory WHERE bid_date <= NOW()';
  }
  else{
    query = 'SELECT * FROM bidhistory WHERE bid_date > NOW()';
  }
    db.query(query, (err, results) => {
      if (err) {
        console.error('MySQL query error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        return res.json(results);
      }
    });
  });
  
  app.post('/submitbid', (req , res)=>{
    const sql = "INSERT INTO bidhistory (userId , itemId , bidAmount, Time , type, userName,userImage) VALUES(?)"
    const values = [
        req.body.userId,
        req.body.itemID,
        req.body.amount,
        req.body.time,
        req.body.type,
        req.body.userName,
        req.body.userImage
    ]
    db.query(sql , [values], (err , data)=>
    {  
        if(err)
        {
            console.log(err);
            return res.json({status:"Not Ok"});
        }
    })
    const sql2 = `Select * from  bidhistory where ItemId ='${req.body.itemID}' and type='${req.body.type}'`
    const values2 = [
        req.body.itemID,   
    ]
    db.query(sql2 , [values2], (err , data)=>
    {  
        if(err)
        {
            console.log(err);
            return res.json({status:"Not Ok"});
        }
        const sql3 = `Select distinct(UserId) from  bidhistory where ItemId ='${req.body.itemID}' and  type='${req.body.type}' `
        db.query(sql3, (err , data2)=>
        {
        if(err)
        {
            console.log(err);
            return res.json({status:"Not Ok"});
        }
        return res.json({status:"ok",currentBidPrice:req.body.amount,totalBids:data.length,totalBidders:data2.length});
    })


    })


});
app.get('/allAuc',(req , res)=>{
    const sql1 = `SELECT * FROM  house;`
    db.query(sql1 , (err , houseData)=>
    {
        if(err)
        {
            return res.json({status:"notsucces"});
        }
        else
        {
            const sql2 = `SELECT * FROM  carproduct;`
            db.query(sql2 , (err , carData)=>
            {
                if(err)
                {
                    console.log(err);
                    return res.json({status:"notsucces"});
                }
                else
                {
                    const sql3 = `SELECT * FROM  jewelry;`
                    db.query(sql3 , (err , jData)=>
                    {
                        if(err)
                        {
                            console.log(err);
                            return res.json({status:"notsucces"});
                        }
                        else
                        {
                            let mainAraay=[];
                            for(let i=0;i<houseData.length;i++)
                            {
                                let values={
                                    id:houseData[i].ID,
                                    name:houseData[i].Housename,
                                    type:"house",
                                    image:houseData[i].picture,
                                    startingPrice:houseData[i].startingprice,
                                    startingTime:houseData[i].StartingTime,
                                    endingTime:houseData[i].EndingTime
                                    
                                }
                                mainAraay.push(values);
                            }
                            for(let i=0;i<carData.length;i++)
                            {

                                let values={
                                    id:carData[i].ID,
                                    name:carData[i].Name,
                                    type:"carproduct",
                                    image:carData[i].Picture,
                                    startingPrice:carData[i].StartingPrice,
                                    startingTime:carData[i].StartingTime,
                                    endingTime:carData[i].EndingTime
                                    
                                }
                                mainAraay.push(values);
                            } 
                            for(let i=0;i<jData.length;i++)
                            {
                                let values={
                                    id:jData[i].ID,
                                    name:jData[i].Name,
                                    type:"jewelry",
                                    image:jData[i].File,
                                    startingPrice:jData[i].StartingPrice,
                                    startingTime:jData[i].StartingTime,
                                    endingTime:jData[i].EndingTime
                                    
                                }
                                mainAraay.push(values);
                            }       
                            for(let i=0;i<mainAraay.length;i++)
                            {
                                for(let j=i+1;j<mainAraay.length;j++)
                                {
                                    if(mainAraay[i].startingTime>mainAraay[j].startingTime)
                                    {
                                        let temp=mainAraay[i];
                                        mainAraay[i]=mainAraay[j];
                                        mainAraay[j]=temp;
                                    }
                                }
                            }  
                            
                            console.log();
                            for(let i=0;i<mainAraay.length;i++)
                            {
                                const splitArray=mainAraay[i].image.split(',');
                                mainAraay[i].image=splitArray;
                            }
                            console.log(mainAraay);
                            return res.json({data:mainAraay});     
                        }
                       
                    })
                    
                }
               
            })

        }
       
    })
});


app.post('/setWinings',(req , res)=>{
    console.log("In Winnings");
    console.log(req.body)
    const sql1 = `SELECT * from carproduct`
    const sqlhouse = `SELECT * from house`
    const sqljew = `SELECT * from jewelry`
    let mainData=[]
    let jewelryMainData=[]
    let houseMainData=[]
    let currentTime=new Date();
    db.query(sqlhouse , (err , houseData)=>
        {
            if(err)
                {
                    console.log("Error in Win Data");
                    console.log(err);
    
                    return res.json({status:'Ok'});
                }
                else{
                    
                    for(let i=0;i<houseData.length;i++)
                        {
                            let houseEndingTime=new Date(houseData[i].EndingTime);
                            if(currentTime>houseEndingTime)
                                {
                                    houseMainData.push(houseData[i])
                                }
                               
                            for(let i=0;i<houseMainData.length;i++)
                                {
                                    const sql2 = `SELECT * from bidhistory where ItemId='${houseMainData[i].ID}' and type='house' order By BidAmount DESC`
                                    db.query(sql2 , (err , houseWins)=>
                                        {
                                            if(err)
                                                {
                                                    console.log(err)
                                                }
                                                
                                                if(houseWins.length>0)
                                                    {
                                                        const sql3=`Update house set WinUserId='${houseWins[0].UserId}',winAmount=${houseWins[0].BidAmount} where ID='${houseWins[0].ItemId}'`
                                                        db.query(sql3 , (err , setWinners)=>
                                                            {
                                                                if(err)
                                                                    {
                                                                        console.log(err)
                                                                    }
    
                                                            })
                                                    }
    
                                                    
                                        })
    
    
                                }          
                        }
                }
        })
    
    db.query(sqljew , (err , jewData)=>
        {
            if(err)
                {
                    console.log("Error in Win Data");
                    console.log(err);
    
                }
                else{
                    for(let i=0;i<jewData.length;i++)
                        {
                            let jewEndingTime=new Date(jewData[i].EndingTime);
                            if(currentTime>jewEndingTime)
                                {
                                    jewelryMainData.push(jewData[i])
                                }
                            for(let i=0;i<jewelryMainData.length;i++)
                                {
                                    const sql2 = `SELECT * from bidhistory where ItemId='${jewelryMainData[i].ID}' and type='jewelry' order By BidAmount DESC`
                                    db.query(sql2 , (err , jewWins)=>
                                        {
                                            if(err)
                                                {
                                                    console.log(err)
                                                }
                                                if(jewWins.length>0)
                                                    {
                                                        const sql3=`Update jewelry set WinUserId='${jewWins[0].UserId}', winAmount=${jewWins[0].BidAmount} where ID='${jewWins[0].ItemId}'`
                                                        db.query(sql3 , (err , setWinners)=>
                                                            {
                                                                if(err)
                                                                    {
                                                                        console.log(err)
                                                                    }
    
                                                            })
                                                    }
    
                                                    
                                        })
    
    
                                }
                                
                        }
                }
        })
    
    db.query(sql1 , (err , carData)=>
    {
        if(err)
            {
                console.log("Error in Win Data");
                console.log(err);

            }
            else{
                for(let i=0;i<carData.length;i++)
                    {
                        let carEndingTime=new Date(carData[i].EndingTime);
                        console.log(carEndingTime.toDateString(),currentTime.toDateString())
                        if(currentTime>carEndingTime)
                            {
                                console.log("in if", carData[i])
                                mainData.push(carData[i])
                            }
                        for(let i=0;i<mainData.length;i++)
                            {
                                console.log("main ",mainData)
                                const sql2 = `SELECT * from bidhistory where ItemId='${mainData[i].ID}' and type='carproduct' order By BidAmount DESC`
                                db.query(sql2 , (err , carWins)=>
                                    {
                                        if(err)
                                            {
                                                console.log(err)
                                            }
                                            if(carWins.length>0)
                                                {
                                                    console.log("car wins are: ",carWins)
                                                    const sql3=`Update carproduct set WinUserId='${carWins[0].UserId}',winAmount=${carWins[0].BidAmount} where ID='${carWins[0].ItemId}'`
                                                    db.query(sql3 , (err , setWinners)=>
                                                        {
                                                            if(err)
                                                                {
                                                                    console.log(err)
                                                                }

                                                        })
                                                }                                 
                                    })


                            }
                            
                    }
            }
    })
    return res.json({response:"done"})
})

app.post('/getWinings',(req , res)=>{
    console.log("In Winnings");
    console.log(req.body)
    const sql = `SELECT * from carproduct where WinUserId='${req.body.userId}'`;
    db.query(sql , (err , carData)=>
        {
            var mainarrayy=[]
            if(err)
                {
                     console.log(err);
                }
                else{
                    for(let i=0;i<carData.length;i++)
                        {
                            console.log(i)                            
                    let values={
                        id:carData[i].ID,
                        type:"carproduct",
                        Name:carData[i].Name,
                        image:carData[i].Picture,
                        startingPrice:carData[i].winAmount,
                        startingTime:carData[i].StartingTime,
                        endingTime:carData[i].EndingTime,
                        purchased:carData[i].purchased
                    }
                    mainarrayy.push(values)
                }
   
        }
        const housesql = `SELECT * from house where WinUserId='${req.body.userId}'`;
        db.query(housesql , (err , houseData)=>
            {
                
                if(err)
                    {
                         console.log(err);
                    }
                    else{
                        for(let i=0;i<houseData.length;i++)
                            {
                                console.log(i)                            
                        let values={
                            id:houseData[i].ID,
                            type:"house",
                            Name:houseData[i].Housename,
                            image:houseData[i].picture,
                            startingPrice:houseData[i].winAmount,
                            startingTime:houseData[i].StartingTime,
                            endingTime:houseData[i].EndingTime,
                            purchased:houseData[i].purchased
                        }
                        mainarrayy.push(values)
    
                        
                    }
                    const jewsql = `SELECT * from jewelry where WinUserId='${req.body.userId}'`;
        db.query(jewsql , (err , jewData)=>
            {
                
                if(err)
                    {
                         console.log(err);
                    }
                    else{
                        for(let i=0;i<jewData.length;i++)
                            {
                                console.log(i)                            
                        let values={
                            id:jewData[i].ID,
                            type:"jewelry",
                            image:jewData[i].File,
                            Name:jewData[i].Name,
                            startingPrice:jewData[i].winAmount,
                            startingTime:jewData[i].StartingTime,
                            endingTime:jewData[i].EndingTime,
                            purchased:jewData[i].purchased
                        }
                        mainarrayy.push(values)
    
                        
                    }
                    console.log(mainarrayy)
                    for(let i=0;i<mainarrayy.length;i++)
                        {
                            const splitArray=mainarrayy[i].image.split(',');
                            mainarrayy[i].image=splitArray;
                        }
                    return res.json({windata:mainarrayy})
                }
            }) 

                }
            }) 

        })
        
        
        
       
        
})

app.post('/stripePaymentSession', async (req , res)=>{
    console.log(req.body)
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:[{
            price_data:{
                currency:"pkr",
                product_data:{
                    name:req.body.name
                },
                unit_amount:req.body.price*100
            },
            quantity:1
        }],
        mode:"payment",
        success_url:`http://localhost:3000/setBuyer/${req.body.id}/${req.body.type}`,
        cancel_url:"https://localhost:3000"
    })
    return res.json({id:session.id})
});

app.post('/updatecaritem',upload.array('photo',12),(req , res)=>{
    console.log("chup");
    console.log(req.body);
    str1="";
    console.log(req.files.length) 
    for(let i=0;i<req.files.length;i++)
        {
            if(i<req.files.length-1)
                {
                    str1=str1+req.files[i].filename+",";
                }
                else{
                    str1=str1+req.files[i].filename;
                }
        }  
    const sql = `Update carproduct set StartingTime='${req.body.startingtime}',EndingTime='${req.body.endingtime}',Engine=${req.body.engine},Fuel=${req.body.fuel},Transmission='${req.body.transmission}',Name='${req.body.name}',Model='${req.body.model}',StartingPrice=${req.body.startingprice},MadeIn='${req.body.madeIn}',Color='${req.body.color}',bidIncreament=${req.body.bidIncreament},Mileage=${req.body.milage},Doors=${req.body.d} where ID=${req.body.itemupdateid}`;
    console.log(sql);
    db.query(sql , (err , jewData)=>
        {
            if(err)
                {
                    
            console.log(err)
            }
            else{
                console.log("In else");
            return res.json({status:"success"});
            }
            
        })

})

app.post('/updatejewleryitem',upload.array('photo',12),(req , res)=>{
    console.log("chup");
    console.log("hellog",req.body);
    
     const sql = `Update jewelry set StartingTime='${req.body.JewelryStartingTime}',EndingTime='${req.body.JewelryEndingTime}',Name='${req.body.ProductName}',bidIncreament=${req.body.JeweleryBidIncreament},StartingPrice=${req.body.JewelryStartingPrice},Material='${req.body.JewelryMaterial}' ,Brand='${req.body.JewelryBrand}', Size=${req.body.JewelrySize}, MadeIn='${req.body.JewelryMadeIn}',Designer='${req.body.JewelryDesigner}',Type= '${req.body.JewelryType}'where ID=${req.body.itemupdateid};`
     console.log(sql);
     db.query(sql , (err , jewData)=>
         {
             if(err)
                 {
                    
             console.log(err)
             }
             else{
                 console.log("In else");
             return res.json({status:"success"});
             }
            
         })

})
app.post('/updatehouseitem',upload.array('photo',12),(req , res)=>{
    console.log("chup");
    console.log("hellog",req.body);
    
     const sql =   `Update house set  StartingTime='${req.body.HouseStartingTime}',EndingTime='${req.body.HouseEndingTime}', Housename='${req.body.HouseName}',startingprice=${req.body.HouseStartingPrice},bidIncreament=${req.body.HouseBidIncreament}, bedrooms=${req.body.HouseBedrooms},plotSize=${req.body.HousePlotSize},Address='${req.body.HouseAddress}',Floors='${req.body.HouseFloors}' where ID=${req.body.itemupdateid}`;
     console.log(sql);
     db.query(sql , (err , jewData)=>
         {
             if(err)
                 {
                    
             console.log(err)
             }
             else{
                 console.log("In else");
             return res.json({status:"success"});
             }
            
         })

})
app.post('/deleteitemsonidandtype',(req , res)=>{
    
    const sql = `Delete from ${req.body.type} where ID=${req.body.itemId}`;
    console.log(sql);
    db.query(sql , (err , data)=>
        {
            if(err)
                {
                    
            console.log(err)
            }
            else{
                console.log("In else");
                const sql1 = `Select * from fvtbids where itemId=${req.body.itemId}`;
                console.log(sql1)
                db.query(sql1 , (err , data1)=>
                    {
                        if(err)
                            {
                                
                        console.log(err)
                        }
                        else{
                            if(data1.length>0)
                                {
                                    const sql2 = `Delete from fvtbids where itemID=${req.body.itemId}`;
                                    console.log(sql2);
                                    db.query(sql2 , (err , data2)=>
                                        {
                                            if(err)
                                                {
                                                    console.log(err)
                                                }
                                        })
                                }
                        }
                    })
                    const sql3 = `Select * from bidhistory where itemId=${req.body.itemId}`;
               
                    db.query(sql3 , (err , data3)=>
                        {
                            if(err)
                                {
                                    
                            console.log(err)
                            }
                            else{
                                if(data3.length>0)
                                    {
                                        const sql4 = `Delete from bidhistory where itemId=${req.body.itemId}`;
                                        console.log(sql4);
                                        db.query(sql4 , (err , data4)=>
                                            {
                                                if(err)
                                                    {
                                                        console.log(err)
                                                    }
                                            })
                                    }
                            }
                        })
            }
            
        })
        
        return res.json({status:"success"});
})

app.post("/getItemsOnID",(req,res)=>
    {
        console.log("Req Body",req.body)
        const sql = `SELECT * FROM  ${req.body.type} WHERE ID =${req.body.id}`;
        db.query(sql,(err,result)=>
        {
            if(err)
                {
                    console.log(err);
                    return res.json({status:"Not Ok"});
                }
                console.log(result)
                return res.json({data:result});
        
        })
    })

    app.post('/fetchAllMyItems',(req , res)=>{
        console.log("user od is: ",req.body)
        const sql1 = `SELECT * FROM  house where UserId=${req.body.userid}`;
        db.query(sql1 , (err , houseData)=>
        {
            if(err)
            {
                console.log("err",err)
                return res.json({status:"notsucces"});
            }
            else
            {
                const sql2 = `SELECT * FROM  carproduct where UserId=${req.body.userid}`;
                db.query(sql2 , (err , carData)=>
                {
                    if(err)
                    {
                        console.log(err);
                        return res.json({status:"notsucces"});
                    }
                    else
                    {
                        const sql3 = `SELECT * FROM  jewelry where UserId=${req.body.userid}`;
                        db.query(sql3 , (err , jData)=>
                        {
                            if(err)
                            {
                                console.log(err);
                                return res.json({status:"notsucces"});
                            }
                            else
                            {
                                console.log("car data is: ",carData)
                                let mainAraay=[];
                                for(let i=0;i<houseData.length;i++)
                                {
                                    let values={
                                        id:houseData[i].ID,
                                        name:houseData[i].Housename,
                                        type:"house",
                                        image:houseData[i].picture,
                                        startingPrice:houseData[i].startingprice,
                                        startingTime:houseData[i].StartingTime,
                                        endingTime:houseData[i].EndingTime
                                        
                                    }
                                    mainAraay.push(values);
                                }
                                for(let i=0;i<carData.length;i++)
                                {
    
                                    let values={
                                        id:carData[i].ID,
                                        name:carData[i].Name,
                                        type:"carproduct",
                                        image:carData[i].Picture,
                                        startingPrice:carData[i].StartingPrice,
                                        startingTime:carData[i].StartingTime,
                                        endingTime:carData[i].EndingTime
                                        
                                    }
                                    mainAraay.push(values);
                                } 
                                for(let i=0;i<jData.length;i++)
                                {
                                    let values={
                                        id:jData[i].ID,
                                        name:jData[i].Name,
                                        type:"jewelry",
                                        image:jData[i].File,
                                        startingPrice:jData[i].StartingPrice,
                                        startingTime:jData[i].StartingTime,
                                        endingTime:jData[i].EndingTime
                                        
                                    }
                                    mainAraay.push(values);
                                }       
                                for(let i=0;i<mainAraay.length;i++)
                                {
                                    for(let j=i+1;j<mainAraay.length;j++)
                                    {
                                        if(mainAraay[i].startingTime>mainAraay[j].startingTime)
                                        {
                                            let temp=mainAraay[i];
                                            mainAraay[i]=mainAraay[j];
                                            mainAraay[j]=temp;
                                        }
                                    }
                                }  
                                
                                console.log();
                                for(let i=0;i<mainAraay.length;i++)
                                {
                                    const splitArray=mainAraay[i].image.split(',');
                                    mainAraay[i].image=splitArray;
                                }
                                console.log(mainAraay);
                                return res.json({data:mainAraay});     
                            }
                           
                        })
                        
                    }
                   
                })
    
            }
           
        })
    });  
    app.get('/fetchalljewelryproduct',(req , res)=>{
        const sql = `SELECT * FROM  jewelry`;
        db.query(sql , (err , data)=>
        {
            if(err)
            {
                console.log(err);
                
                return res.json({status:"notsucces"});
            }
            else
            {
                for(let i=0;i<data.length;i++)
                    {
                        const splitArray=data[i].File.split(',');
                        data[i].File=splitArray;
                    }
                console.log(data.File);
                console.log(data);
                res.send(data);
                
            }
           
        })
    });
    app.get('/fetchallhouseproduct',(req , res)=>{
        const sql = `SELECT * FROM  house`;
        db.query(sql , (err , data)=>
        {
            if(err)
            {
                console.log(err);
                return res.json({status:"notsucces"});
            }
            else
            {
    
                for(let i=0;i<data.length;i++)
                    {
                        const splitArray=data[i].picture.split(',');
                        data[i].picture=splitArray;
                    }
                    
                console.log(data);
                res.send(data);
                
            }
           
        })
    });
    app.post('/getBidHistoryForAProduct',(req , res)=>{
        
        console.log("In This")
        console.log(req.body);
        const sql = `SELECT * FROM bidhistory where ItemId='${req.body.itemID}' and type='${req.body.type}' `;
        console.log(sql);
    
        
        db.query(sql, (err , data)=>
        {
            console.log(data);
            if(err)
            {
                return res.json({status:"notsucces"});
            }
            else
            {
                res.send(data);
                
            }
           
        })
    });

    app.post('/getdashboarddata',(req , res)=>{
        console.log(req.body)
        const carSql= `select * from carproduct where WinUserId=${req.body.userId}`
        db.query(carSql , (err , carData)=>
            {
                let itemsWon=0;
                if(err)
                    {
                        console.log(err);
                    }
                    else{
                        itemsWon+=carData.length;
                        console.log(carData)
                        const houseSql=`select * from house where WinUserId=${req.body.userId}`
        db.query(houseSql , (err , houseData)=>
            {
                if(err)
                    {
                        console.log(err);
                    }
                    else{
                        itemsWon+=houseData.length;
                        const jewSql=`select * from jewelry where WinUserId=${req.body.userId}`
        db.query(jewSql , (err , jewData)=>
            {
                if(err)
                    {
                        console.log(err);
                    }
                    else{
                        itemsWon+=jewData.length;
                        const totalBidsql=`select * from bidhistory where UserId=${req.body.userId}`
        db.query(totalBidsql , (err , bidData)=>
            {
                if(err)
                    {
                        console.log(err)
                    }
                    else{
                        const totalfavsql=`select * from fvtbids where userId=${req.body.userId}`
                    db.query(totalfavsql , (err , fvtData)=>
                        {
                            if(err)
                                {
                                    console.log(err)
                                }
                                else{
                        return res.json({status: "ok",itemsWon:itemsWon,totalBids:bidData.length,totalfvt:fvtData.length})
                                }})
                    }
            })
    
                    }
            })
                        
                    }
            })
    
                    }
            })
    
    
    })

app.post('/setBuyer',(req , res)=>{
    const sql = `update ${req.body.type} set purchased = true where ID=${req.body.id}`
    db.query(sql , (err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.json({"status": "ok"})
        }
    })

})
app.listen(3001 , ()=>{
    console.log("Listening to 3000");  
})