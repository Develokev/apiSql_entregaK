const express = require('express')
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

//* Parse application/x-www-form-urlencoded traduciendo a POSTMAN
app.use(express.urlencoded({ extended: false }));

//* Parse application/json
app.use(express.json());

app.use('/api/entries', require('./routers/apiEntriesRoute'))
app.use('/api/authors', require('./routers/apiAuthorsRoute'))

app.listen(port,() => {
    console.log(`Servidor a la escucha del puerto ${port}`)
})