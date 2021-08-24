const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3005;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongodb+srv://dthompasionas:Novacane1!>@cluster0.znx3p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//require(apiRoute)(app);
require("./routes/htmlroutes")(app);
require("./routes/apiroutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});