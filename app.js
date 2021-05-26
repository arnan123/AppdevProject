const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const fileUpload = require('express-fileupload');
const dishesRoutes = require("./routes/dishesRouter");
const ingredientsRoutes = require("./routes/ingredientsRouter");
const dishIngredientsRoutes = require("./routes/dish_IngredientsRouter");
const userRoutes = require("./routes/userRouter");
const userDishRoutes = require("./routes/userDishRouter");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(fileUpload());
app.use('/styles', express.static(__dirname + '/public/styles'));
app.use('/storage', express.static(__dirname + '/public/storage'));

// let sampleFile;
// let uploadPath;
// sampleFile = req.files.avatar;
// uploadPath = __dirname + '/public/storage/Dishes/' + sampleFile.name;

// sampleFile.mv(uploadPath, function(err) {
//     if (err) return res.status(500).send(err);

//     console.log(sampleFile);
// })

app.use("/", dishesRoutes);
app.use("/", ingredientsRoutes);
app.use("/", dishIngredientsRoutes);
app.use("/", userRoutes);
app.use("/", userDishRoutes);

app.listen(3000);