const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());

app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: false,
  })
);

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

  // حفظ المستخدم داخل الـ Session
  req.session.userId = user.id;

  res.json({
    message: "Logged in",
  });
});

app.get("/profile", (req, res) => {

  if (!req.session.userId) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const user = users.find(
    u => u.id === req.session.userId
  );

  res.json(user);
});

app.listen(3000);