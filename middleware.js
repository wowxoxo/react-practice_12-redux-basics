router.get("/", (req, res) => {
  res.send("hello");
});

app.use((req, res, next) => {
  if (req.headers["isAuth"]) {
    next();
  } else {
    res.send(401);
  }
});
