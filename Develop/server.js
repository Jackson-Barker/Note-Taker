// dependencies
const express = require('express');
const path = require('fs');

const app = express();
// const PORT = 

app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);