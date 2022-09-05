
const cors = require('cors');
const express = require('express');
const app = express();
const models = require('./models')
const port = 8080;

app.use(express.json());
app.use(cors());

app.get("/products/:id", (req,res)=>{
  const params = req.params;
  const {id} = params;
  models.Product.findOne({
    where : {
      id
    },
  })
  .then((result) => {
    console.log(`product : ${result}`);
    res.send({
      product : result,
    });
  })
  .catch((err) => {
    console.error(err)
    res.send("상품 조회에 에러가 발생.")
  })
});


app.get("/products",(req,res) => {
  models.Product.findAll({
    //limit : 1,
    order : [["createdAt", "DESC"]],
    attributes : ["id", "name", "price", "createdAt", "seller", "imageUrl"],
  }).then((result) => {
    
    res.send({
      products : result
    })
  })
  .catch((err) => {
    res.send(`에러 발생 ${err}`)
  })
});

app.post("/products", (req,res)=>{
  const body = req.body;
  const {name, description, price, seller} = body;
  if (!name || !description || !price || !seller){
    res.send("모든 필드를 입력하세요.")
  }
  models.Product.create({
    name,
    description,
    price,
    seller
  })
  .then((result) =>{
    console.log(`상품 생성 ${result}`)
    res.send({
      result,
    });
  }).catch((err) => {
    console.error(err);
    res.send("상품 업로드 에러", err)
  })
});

app.listen(port, () =>{
    console.log("서버가 돌아가고 있습니다.");
    models.sequelize.sync().then(()=>{
      console.log('db 연결 성공!');
    })
    .catch((err) =>{
      console.error(err);
      console.log("db 연결 에러ㅜ");
      process.exit();
    
})
})