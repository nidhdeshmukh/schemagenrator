const express = require('express');
const bodyParser = require('body-parser');
const schemaRoutes = require('./routes/schema');

const app = express();
app.use(bodyParser.json());
app.use('/api', schemaRoutes);

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
