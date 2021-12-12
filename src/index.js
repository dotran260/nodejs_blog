const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 4000;
const route = require('./routes');
const methodOverride = require('method-override')

//Connect to db
const db = require('./config/db/config');
db.connect();

app.use(express.static(path.join(__dirname, 'public'))); //Lấy file public

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


//Dùng để [PUT] 
app.use(methodOverride('_method'));


//HTTP logger(Kiểm tra coi morgan kết nối sever chưa)
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes [index.js]
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})