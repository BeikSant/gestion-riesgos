const express = require('express');
const app = express();
const {create} = require('express-handlebars');

require('dotenv').config();
require('./database/db')

const hbs = create({
    extname: '.hbs',
    partialsDir: 'views/components',

    helpers: {
        ifCond: function(v1, v2, options) {
            if(v1 === v2) {
            return options.fn(this);
            }
            return options.inverse(this);
        },
        ifMayor: function(v1, v2, options) {
            if(v1 > v2) {
            return options.fn(this);
            }
            return options.inverse(this);
        },
        ifMenor: function(v1, v2, options) {
            if(v1 < v2) {
            return options.fn(this);
            }
            return options.inverse(this);
        }
    }
});

app.engine('.hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views')

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/main'))

app.listen(5000, () => {
    console.log(`Server started on port`);
});