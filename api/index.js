const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const TrendingCase = require("./models/TrendingCase");
const CombinedCase = require("./models/CombinedCases"); // Import CombinedCase model
const ComparingCase = require("./models/ComparingCases")
const RapeCase = require("./models/RapeCases")
const LiteracyRate = require("./models/LiteracyRate")
const FemaleJudges= require("./models/PerFemaleJudges")
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


const app = express();
const port = 4000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");


// MONGODO CONNECTION ///
mongoose.connect(
    "mongodb+srv://zainabkashif253:a5zWrVUmaTg5L47W@cluster0.zkjnzbq.mongodb.net/",
    // "mongodb+srv://maryaamkhanzada:maryaamkhanzada@cluster0.l5jpujl.mongodb.net/",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log("Connected to mongodb");
}).catch((error) => {
    console.log("error connecting to mongodb", error);
});



// Define routes for TrendingCases
app.get("/api/trending-cases", async (req, res) => {
    try {
      const trendingCases = await TrendingCase.find();
      res.json(trendingCases);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



// Define routes for CombinedCases
app.get("/api/combined-cases", async (req, res) => {
    try {
        const combinedCases = await CombinedCase.find();
        res.json(combinedCases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Define routes for ComparingCases
app.get("/api/comparing-cases", async (req, res) => {
    try {
        const comparingCases = await ComparingCase.find();
        res.json(comparingCases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Define routes for RapeCases
app.get("/api/rape-cases", async (req, res) => {
    try {
        const rapeCases = await RapeCase.find();
        res.json(rapeCases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Define routes for LiteracyRate
app.get("/api/literacy-rate", async (req, res) => {
    try {
        const literacyRate = await LiteracyRate.find();
        res.json(literacyRate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Define routes for PerFemaleJudges
app.get("/api/female-judges", async (req, res) => {
    try {
        const femaleJudges = await FemaleJudges.find();
        res.json(femaleJudges);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.get("/", (req, res) => {
    res.send("Welcome to your server!");
});

app.listen(port, () => {
    console.log("Server running on port 4000");
});
