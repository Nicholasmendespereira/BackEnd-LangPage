const { PrismaClient } = require("@prisma/client");

const express = require("express");
const cors = require("cors");

const app = express();
app.listen(5555, () => console.log("Rodando na porta 5555"));
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();
// let UsersOfCard = [];

// app.get('/users', (req, res) => {
//   console.log("REPSOTA DO GET:",UsersOfCard);
// } );
// app.post('/usuarios', (req, res) => {
//   const {name, email, telefone} = req.body
//   const response = {
//       name,
//       email,
//       telefone
//   };
//   UsersOfCard.push(response);
//   console.log(UsersOfCard);
//   console.log("Respoat do POST:",response);
// } );
// app.post('/new-user', (req, res) => {
//   const { name, process, hour, day, shift } = req.body;
//   const resp = {
//     name,
//     process,
//     hour,
//     day,
//     shift
//   };
//   console.log("Resposta do post:", resp);
// });

app.get("/list-users", async (req, res) => {
  const resp = await prisma.usuarios.findMany({});
  console.log(resp);
  return res.status(200).json(resp);
});
app.post("/create-user", async (req, res) => {
  const { name, email, senha, process, hour, day, shift } = req.body;

  const resp = await prisma.usuarios.create({
    data: {
      name,
      email,
      senha,
      process: String(process),
      hour: String(hour),
      day: String(day),
      shift: String(shift),
    },
  });
  console.log(resp);
  return res.status(200).json(resp);
});
app.patch("/update-user", async (req, res) => {
  const { id, name, email, senha, shift, day, hour, process } = req.body;

  const resp = await prisma.usuarios.update({
    where: { id: parseInt(id) },
    data: {
      name,
      email,
      senha,
      shift,
      day,
      hour,
      process,
    },
  });
  console.log(resp);
  return res.status(200).json(resp);
});
app.delete("/delete-user", async (req, res) => {
  const { id } = req.body;

  const resp = await prisma.usuarios.delete({
    where: { id: parseInt(id) },
  });
  console.log(resp);
  return res.status(200).json(resp);
});
