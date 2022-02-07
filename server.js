const exress = require('express');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products/:id", (req,res)=>{
  const params = req.params;
  const {id} = params;
  res.send(`id는 ${id}`)
})


app.get("/products",(req,res) => {
  const params = req.params;
  const {id} = params;
    res.send({
        products:[
            {
                
                    "id" : 1,
                  "name": "샤넬 가방",
                  "price": 900000,
                  "seller": "샤넬",
                  "imgUrl": "images/chanel.jpg"
                },
                {
                    "id" : 2,
                  "name": "루이비통 가방",
                  "price": 5000000,
                  "seller": "루이비통",
                  "imgUrl": "images/louisVuitton.jpeg"
                },
                {
                    "id" : 3,
                  "name": "구찌 가방",
                  "price": 7000000,
                  "seller": "구찌",
                  "imgUrl": "images/Gucci.jpeg"
                },
        ],
    });
        
    
    
});

app.post("/products", (req,res)=>{
  const body = req.body;
  console.log(body)
  res.send({
    body,
  });
});

app.listen(port, () =>{
    console.log("서버가 돌아가고 있습니다.")
})