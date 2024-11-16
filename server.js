const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

db.sequelize.sync(); // Sincroniza os modelos com o banco de dados

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
