const mongoose = require("mongoose");

module.exports = () => {
  const connect = () => {
    if(process.env.NODE_ENV !== "production") {
      mongoose.set("devug", true);
    }
    mongoose.connect(
      "mongodb://localhost:27017/til",
      {
        dbName: "til"
      },
      error => {
        if(error) {
          console.log("몽고디비 연결오류!!", error);
        } else {
          console.log("몽고디비 연결성공!!");
        }
      }
    );
  };
  connect();
  mongoose.connection.on("error", error => {
    console.log("몽고디비 연결오류!!", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("몽고디비 연결이 끊겼습니다. 연결을 재시도 합니다.");
    connect();
  });
  require("./user");
  require("./board");
};