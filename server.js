const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

require("./routes/html-routes")(app);
require("./routes/api-routes.js")(app);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`);
})