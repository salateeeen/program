const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const SECRET = "my-secret";

const users = [
  {
    id: 1,
    name: "Sultan",
    password: "123",
  },
];

app.post("/login", (req, res) => {

  const { id, password } = req.body;

  const user = users.find(
    u => u.id === id && u.password === password
  );

  if (!user)
    return res.status(401).json({
      message: "Wrong credentials",
    });

  const token = jwt.sign(
    {
      userId: user.id,
    },
    SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.json({
    token,
  });

});



app.get("/profile", (req, res) => {

  const auth = req.headers.authorization;

  if (!auth)
    return res.sendStatus(401);

  const token = auth.split(" ")[1];

  try {

    const payload = jwt.verify(
      token,
      SECRET
    );

    const user = users.find(
      u => u.id === payload.userId
    );

    res.json(user);

  } catch {

    res.sendStatus(401);

  }

});

app.listen(3000);
