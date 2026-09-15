const express =  require(`express`)
const app = express()

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

let x = 5;

app.get("/:name", async (req, res) => {
   
  ++x;

  await sleep(8000);

  console.log(`${req.params?.name}, ${x}`);

  res.send("Done");
});

app.listen(3000)