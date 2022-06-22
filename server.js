//require dependencies

const express = require ('express');
const path = require ('path');



//point server to the route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//create express server
const app = express();

//set port
const PORT = process.env.port || 8080;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));


// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

//GET route for notes page

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);



//setup listener 
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);