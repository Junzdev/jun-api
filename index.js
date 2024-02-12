const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const dataPath = path.join(__dirname, 'data');

app.get('/', (req, res) => {
  const { data } = req.query;
  const filePath = path.join(dataPath, `${data}.json`);
  
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Data not found' });
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }
    const jsonData = JSON.parse(data);
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    const randomData = jsonData[randomIndex];

    const { Author, Url, Title } = randomData;
    const response = { Author, Url, Title };

    res.json(response);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
