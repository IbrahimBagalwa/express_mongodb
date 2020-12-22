const express = require('express');
const app = express();


app.use(express.json());

app.use('/api/user', require('./routes/user'));
// app.use('/api/auth', require('./routes/authentification'));



const port = process.env.PORT || 4000
app.listen(port, console.log(`server run on port ${port}........`));