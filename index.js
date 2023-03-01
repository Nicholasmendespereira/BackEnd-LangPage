const express = require('express')
const cors = require('cors')

const app = express()
app.listen(5555, () => console.log('Rodando na porta 5555'))
app.use(express.json())
app.use(cors())

let users = [{
  id: 1,
  name: "Jakeliny Gracielly",
  avatar: "https://avatars.githubusercontent.com/u/17316392?v=4",
  city: "São Paulo"
}]

app.get('/users', (req, res) => {
  res.json(users);
} )
app.post('/usuarios', (req, res) => {
  const {name, email, telefone} = req.body
  const response = {
      name,
      email,
      telefone
  };
  console.log(response);
  res.json(response);  
} )