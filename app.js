const express = require('express');
var morgan = require('morgan')
const mongoose = require('mongoose');
const connectDB = require('./src/db/mongoose')
const routes = require('./src/routes/userRoutes');
const path = require('path');
const { route } = require('./src/routes/userRoutes');
const model = require('./src/models/model')


// const hbs = require('hbs');
// const routes = require('./routes/userRoutes');

// const port = 3000;
const app = express();
app.use(express.json());
app.use(routes)
// register view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
connectDB();

app.use('/api', routes);

// app.use(express.static(path.join(__dirname, '../public')))

// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, '../templates/views'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
app.use('/copyDetail', routes);

app.get('/loginmain', (req, res) => {
    res.render('loginmain')
})


app.get('/register', (req, res) => {
    res.render('register')
})


app.get('/login', (req, res) => {
    res.render('login')
})


app.get('/verification', (req, res) => {
    res.render('index2')
})


app.get('/', (req, res) => {
    res.render('home')
})
var profileKey;
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // console.log(req);
    console.log(req.body);
    const emailCheck = await model.User.findOne({ email });
    // console.log(usernameCheck)
    // const passwordCheck = await User.findOne({ password });
    if (!emailCheck) {
        // alert("Username not found")
        console.log("User doesn't exist")
        res.redirect('/login')
        // alert("Username doesn't exist")
    }
    else{
        if(emailCheck.password == password) {
            console.log("Logged in sucessfully");
            profileKey=emailCheck;
            return res.redirect('/landingPage')
        }
        console.log("Wrong password")
        // alert("Wrong password entered...")
        res.redirect('/login')
        // alert("Wrong password")
    }
})
// let traderlist=[];
app.get('/landingPage', (req, res) => {
    model.Trader.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('landingPage', { traderlist: result });
    
    })
    .catch(err => {
      console.log(err);
    });
})
app.get('/traderlounge', (req, res) => {
    res.render('traderlounge')
})
app.get('/portfolio', (req, res) => {
    model.Copy.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('portfolio', { openorder: result });
    
    })
    .catch(err => {
      console.log(err);
    });
})
app.get('/contact-use', (req, res) => {
    res.render('contact-use')
})
app.get('/about-us', (req, res) => {
    res.render('about-us')
})


app.get('/traderProfile', (req, res) => {
    res.render('traderProfile')
})
app.get('/view-all', (req, res) => {
    res.render('view-all')
})
app.get('/porfolio', (req, res) => {
    res.render('porfolio')
})
app.get('/traderlounge', (req, res) => {
    res.render('traderlounge')
})
app.get('/profile',async (req, res) => {
    console.log(profileKey);
    await model.User.findOne(profileKey)
    .then(result => {
      res.render('profile', { userprofile: result });
    
    })
    .catch(err => {
      console.log(err);
    });
})
app.get('/profile1', (req, res) => {
    res.render('profile1')
})
app.get('/view-all-most-copied', (req, res) => {
    res.render('view-all-most-copied')
})
app.get('/view-all-top-profit', (req, res) => {
    res.render('view-all-top-profit')
})
app.get('/discover',async (req, res) => {
  await model.User.findOne(profileKey)
    .then(result1 => {

         model.Post.find().sort({ createdAt: -1 })
        .then(result2 => {
            res.render('discover', { postItems: result2,usersubmit: result1 });
        })
        .catch(err => {
            console.log(err);
            // res.render('404', { title: 'Blog not found' });
        });
    //   res.render('discover', { usersubmit: result });
    
    })
    .catch(err => {
      console.log(err);
    });
})

app.listen(3000, () => {  
    console.log('Server is up on port '+3000)
})



