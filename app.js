const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');

const app = express();

const port = process.env.PORT || 5000;

const nav = [{
    Link: '/Books',
    Text: 'Books'
    }, {
    Link: '/Authors',
    Text: 'Authors'
    }];

const bookRouter = require('./src/routes/bookRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const authRouter = require('./src/routes/authRoutes')(nav);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'library'}));

require('./src/config/passport')(app);

app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
                        }, {
            Link: '/Authors',
            Text: 'Authors'
            }]
    });
});

app.get('/books', (req, res) => {
    res.send('Hello Books!');
});

app.listen(port, (err) => {
    console.log('running server on port ' + port);
});
