const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

const port = process.env.PORT || 27017;

app.use(cors());
app.use(express.json());

async function main(){
  await mongoose.connect(process.env.DB_CONNECTION_STRING);
  console.log('Connected to MONGODB')
}

main().catch(console.error)

app.use('/api/signup', require('./routes/signup'));
app.use('/api/login', require('./routes/login'));
app.use('/api/user', require('./routes/user'));
app.use('/api/todos', require('./routes/todos'));
app.use('/api/refresh-token', require('./routes/refreshToken'));
app.use('/api/signout', require('./routes/signout'));

app.get ('/', (req, res) => {
  res.send('hello,world');
});

app.listen(port, () => {
  console.log(`server is running in port: ${port}`)
})

