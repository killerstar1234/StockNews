const express = require('express');
const app = express();
const cors = require('cors');

// Cant use cookie parser bc we are using a front end and server is not sending html pages, the server is a api


app.use(cors());
app.use(express.json());

app.set('view engine', 'hbs');

app.use('/js', express.static('./public/scripts'));
app.use('/css', express.static('./public/styles'))
app.use('/img', express.static('./public/images'))

app.use('/', require('./routes/pages'));
app.use('/search', require('./routes/search'));

app.listen(3000, () => {
    console.log('Server running on port 3k...')
})