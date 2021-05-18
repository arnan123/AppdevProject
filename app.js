const express = require("express");
const bodyParser = require("body-parser");
const dishesRoutes = require("./routes/dishesRouter");
const ingredientsRoutes = require("./routes/ingredientsRouter");
const dishIngredientsRoutes = require("./routes/dish_IngredientsRouter");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/styles', express.static(__dirname + '/public/styles'));
app.use('/storage', express.static(__dirname + '/public/storage'));

app.use("/", dishesRoutes);
app.use("/", ingredientsRoutes);
app.use("/", dishIngredientsRoutes);

app.listen(3000);