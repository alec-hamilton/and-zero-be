const express = require('express');
const router = require('./config/routes');

const app = express();
const port = 3001;

app.use(express.json());

router(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
