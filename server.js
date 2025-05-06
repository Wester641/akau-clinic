const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const telegramToken = "7968841993:AAElhy0Ta6r8TX2iE6NvghmGNnocOek2K8Q";

const chatIds = ["1873800563", "7361353167"];

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://akau-clinic.vercel.app",
    "https://akau-clinic-1.onrender.com",
  ],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { name, date_time, phone, message, date_day } = req.body;

  try {
    const text = `Имя пациента: ${name} \nНомер телефона: ${phone}\nСообщение: ${message}\nДень: ${date_day} \nВремя: ${date_time} `;

    for (const chatId of chatIds) {
      await axios.post(
        `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          chat_id: chatId,
          text,
        }
      );
    }

    res.status(200).send("Message sent to all!");
  } catch (error) {
    console.error("Ошибка отправки:", error);
    res.status(500).send("Ошибка при отправке сообщения");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
