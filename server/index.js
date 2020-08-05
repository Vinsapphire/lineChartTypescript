const express = require("express");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

function getXCoords(from, to, step) {
  let xCoords = [];

  if (from > to) {
    let temp = from;
    from = to;
    to = temp;
  }

  for (let i = from; i <= to; i += step) {
    xCoords.push(i);
  }

  return xCoords;
}

function getLinearData(xCoords) {
  return {
    name: "linear",
    x: xCoords,
    y: xCoords,
  };
}

function getSquareData(xCoords) {
  return {
    name: "square",
    x: xCoords,
    y: xCoords.map((coord) => Math.pow(coord, 2)),
  };
}

function getCubeData(xCoords) {
  return {
    name: "cube",
    x: xCoords,
    y: xCoords.map((coord) => Math.pow(coord, 3)),
  };
}

function formatResponseObj(from, to, step) {
  const xCoords = getXCoords(from, to, step);

  return [getLinearData(xCoords), getSquareData(xCoords), getCubeData(xCoords)];
}

// Function to handle the root path
app.get("/points", function (req, res) {
  let from = parseFloat(req.query.from);
  let to = parseFloat(req.query.to);
  let step = parseFloat(req.query.step);

  if (isNaN(from) || isNaN(to) || isNaN(step)) {
    res.status(400).send("Bad request");
  } else {
    const responseObj = formatResponseObj(from, to, step);
    return res.json(responseObj);
  }
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080");
});
