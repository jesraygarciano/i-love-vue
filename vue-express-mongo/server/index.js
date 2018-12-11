const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// const app = express.createServer();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

// https://www.youtube.com/watch?v=j55fHUJqtyw&t=63s

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
