// How to start:
// docker run --name docker-crash-course-container -p 4000:4000 -v /Users/michaltarasiuk/Sites/docker-crash-course:/app docker-crash-course

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (_req, res) => {
  res.json([
    {
      id: '1',
      title: 'Book Review: The Bear & The Nightingale',
    },
    {
      id: '2',
      title: 'Game Review: Pokemon Brillian Diamond',
    },
    {
      id: '3',
      title: 'Show Review: Alice in Borderland',
    },
  ]);
});

app.listen(4000, () => {
  console.log('listening for requests on port 4000');
});
