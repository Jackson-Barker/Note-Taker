// dependencies
const express = require('express');
const fs = require('fs');

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
app.use('/assets', express.static('./assets'));


// app.use('./routes/indexRoutes', indexRoutes);
require('./routes/notesRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);