require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const User = require("./model/user");
const RoomType = require("./model/roomType");
const Room = require("./model/room");
const Order = require("./model/order");
const Employee = require("./model/employee");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const auth = require("./middleware/auth");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate user input
    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    user.token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      user.token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      return res.status(200).json(user);
    }
    return res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

app.get("/room-types", auth, async (req, res) => {
  try {
    const roomTypes = await RoomType.find({});

    return res.status(200).json(roomTypes);
  } catch (err) {
    console.log(err);
  }
});

app.post("/room-types/create", auth, async (req, res) => {
  try {
    const { name, rating } = req.body;

    // Validate user input
    if (!(name && rating)) {
      return res.status(400).send("All input is required");
    }

    const roomType = await RoomType.create({
      name,
      rating,
    });

    return res.status(200).json(roomType);
  } catch (err) {
    console.log(err);
  }
});

app.get("/employees", auth, async (req, res) => {
  try {
    const employees = await Employee.find({});

    return res.status(200).json(employees);
  } catch (err) {
    console.log(err);
  }
});

app.post("/employees/create", auth, async (req, res) => {
  try {
    const { name, salary } = req.body;

    // Validate user input
    if (!(name && salary)) {
      return res.status(400).send("All input is required");
    }

    const employee = await Employee.create({
      name,
      salary,
    });

    return res.status(200).json(employee);
  } catch (err) {
    console.log(err);
  }
});

app.get("/rooms", auth, async (req, res) => {
  try {
    const rooms = await Room.find({});

    return res.status(200).json(rooms);
  } catch (err) {
    console.log(err);
  }
});

app.post("/rooms/create", auth, async (req, res) => {
  try {
    const { name, roomTypeId, employeeId, beds, price } = req.body;

    // Validate user input
    if (!(name && roomTypeId && employeeId && beds && price)) {
      return res.status(400).send("All input is required");
    }

    try {
      const roomTypeExists = await RoomType.findById(roomTypeId);

      if (!roomTypeExists) {
        return res.status(400).send("Room type does not exist");
      }
    } catch (e) {
      return res.status(400).send("Room type does not exist");
    }

    try {
      const employeeExists = await Employee.findById(employeeId);

      if (!employeeExists) {
        return res.status(400).send("Employee does not exist");
      }
    } catch (e) {
      return res.status(400).send("Employee does not exist");
    }

    const room = await Room.create({
      name,
      roomTypeId,
      employeeId,
      beds,
      price,
    });

    return res.status(200).json(room);
  } catch (err) {
    console.log(err);
  }
});

app.get("/orders", auth, async (req, res) => {
  try {
    const orders = await Order.find({});

    return res.status(200).json(orders);
  } catch (err) {
    console.log(err);
  }
});

app.post("/orders/create", auth, async (req, res) => {
  try {
    const {
      roomId,
      dateStart,
      dateEnd,
      customerName,
      customerEmail,
      customerPhone,
    } = req.body;

    // Validate user input
    if (
      !(
        roomId &&
        dateStart &&
        dateEnd &&
        customerName &&
        customerEmail &&
        customerPhone
      )
    ) {
      return res.status(400).send("All input is required");
    }

    try {
      const roomExists = await Room.findById(roomId);

      if (!roomExists) {
        return res.status(400).send("Room does not exist");
      }
    } catch (e) {
      return res.status(400).send("Room does not exist");
    }

    try {
      const isRoomBusy = await Order.findOne({
        roomId: roomId,
        dateStart: dateStart,
      });

      if (isRoomBusy) {
        return res.status(400).send("Room is busy this date");
      }
    } catch (e) {}

    const order = await Order.create({
      roomId,
      dateStart,
      dateEnd,
      customerName,
      customerEmail,
      customerPhone,
    });

    return res.status(200).json(order);
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
