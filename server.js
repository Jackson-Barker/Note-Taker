// dependencies
const express = require('express');


const app = express();
const PORT = process.env.PORT || 3002;

// const indexRoutes = require('./routes/indexRoutes');

// app.get('/', (req, res) =>
// res.sendFile(path.join(__dirname, '/public/index.html'))
// );

app.use(express.urlencoded({
  extended: true
}));


app.use(express.json());
app.use( express.static('public'));


// app.use('./routes/indexRoutes', indexRoutes);
require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);