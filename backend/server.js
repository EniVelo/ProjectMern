let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
const session = require("express-session");
let routeContact = require("./routes/routeContact");
let routeItem = require("./routes/routesItem");
let path = require("path");

let app = express();

// Sherbimi i folderit 'images' nga backend-i
app.use("/images", express.static(path.join(__dirname, "images")));

// Konfigurimi i CORS per frontend ne portin 3000
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);

// Konfigurimi i sesioneve
app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 90 * 60 * 24 },
  })
);

// Lejon dergimin e te dhenave ne format JSON
app.use(express.json({ limit: "1000mb", extended: true }));

// Lidhja me MongoDB
mongoose
  .connect(
    "mongodb+srv://eniveloeni:eni1@cluster0.llhpr.mongodb.net/ProjectMERN?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error: " + err));

// Perdorimi i rrugeve te tjera
app.use(routeContact);
app.use(routeItem);

//  endpoint i thjeshte testimi
app.use("/", (req, res) => {
  res.send("Hello");
});

// Aktivizimi i serverit ne portin 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

 


