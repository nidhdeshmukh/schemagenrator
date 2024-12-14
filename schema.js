const express = require('express');
const { generateSchema } = require('../schemaGenerator');
const router = express.Router();

router.post('/generate-schema', (req, res) => {
  const { prompt } = req.body;
  const schema = generateSchema(prompt);
  res.json({ schema });
});

module.exports = router;
