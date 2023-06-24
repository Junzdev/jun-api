const express = require('express');
const app = express();

app.get('/image/:id', (req, res) => {
 const id = req.params.id;
 const images = require(`./image/${id}.json`);
 const randomIndex = Math.floor(Math.random() * images.length);
 const randomImage = images[randomIndex];
 const result = { url: randomImage, author: 'Jun' };
 res.json(result);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server listening on port ${PORT}`);
}); 
