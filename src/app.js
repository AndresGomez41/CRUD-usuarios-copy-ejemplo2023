const express = require("express");
const userRoutes = require("./users/users.router");
const app = express();

app.use(express.json());

app.use("/", userRoutes);

const PORT = 9000;
const listener = app.listen(PORT, () =>
    console.log(`Your app is listening on port:${ listener.address().port}`)
);

module.exports = app;
