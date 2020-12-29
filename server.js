const express = require('express');
const app = express();
const cors = require("cors");
const session = require("express-session");

// 몽구스 DB 연결을 위한 설정코드 시작
const connect = require("./schemas");
connect();
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



app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/member", require("./routes/memberRouter"));
app.use("/board", require("./routes/boardRouter"));

app.listen(8080, () => {
  console.log("8080포트 접속 대기중!!");
});
