const express = require("express");
const app = express();  // created app object
const port = 8080
// creating routes here
app.get("/", (req, res) => {
    res.send("hello world");
})
app.listen(port, (err) => {
    if (!err) {
        console.log("Server running on port ", port)
} else {
        console.log(err);
    }
})

