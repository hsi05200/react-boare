const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:sotkfkdgo*0tnr@logindb.gjbk9.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log("MongoDB 연결성공!!"))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!!'));

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`)
);




// 이전 몽고DB 연결사용코드외 기본코드 숨김
// require('dotenv').config();
// const mongoose = require('mongoose');

// mongoose.connect(
//   process.env.MONGODB_URL,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   },
//   (err) => {
//   if(err) {
//     console.log("Err", err);
//   } else {
//     console.log("MONGODB 연결성공!!");
//   }
// })

// const express = require('express');
// const app = express();
// const cors = require("cors");
// const session = require("express-session");

// 몽구스 DB 연결을 위한 설정코드 시작
// const connect = require("./schemas");
// connect();
// 몽구스 DB 연결을 위한 설정코드 끝

// const corsOptions = {
//   origin: true,
//   credentials: true
// };

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: "hamletshu",
//     cookie: {
//       httpOnly: true,
//       secure: false
//     }
//   })
// );

// app.use(cors(corsOptions));



// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));

// app.use("/member", require("./routes/memberRouter"));
// app.use("/board", require("./routes/boardRouter"));

// app.listen(8080, () => {
//   console.log("8080포트 접속 대기중!!");
// });