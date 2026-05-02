const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2dDM3NjlAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMzUzNiwiaWF0IjoxNzc3NzAyNjM2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYjZmYTdiYzgtMTNjNy00ZDc3LThlZTEtN2M5MjVmMTJiMjE3IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibW9oYW4gdiBuIHMgayB0aXJ1dmFpcGF0aSIsInN1YiI6ImZmN2U0ODY0LTliNGUtNGFhMi05ZGMzLTM2MWQyMTkwOTJhZSJ9LCJlbWFpbCI6InZ0Mzc2OUBzcm1pc3QuZWR1LmluIiwibmFtZSI6Im1vaGFuIHYgbiBzIGsgdGlydXZhaXBhdGkiLCJyb2xsTm8iOiJyYTIzMTEwMDMwMTEwMDQiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiJmZjdlNDg2NC05YjRlLTRhYTItOWRjMy0zNjFkMjE5MDkyYWUiLCJjbGllbnRTZWNyZXQiOiJiZlhRcEd4SGZua0RxaGVKIn0.R0Rd4XMROq3A27khP2b3ROVOcTzM77yYyQqDycBmi40";

async function log(level, pkg, message) {
  try {
    const res = await axios.post(
      LOG_API,
      {
        stack: "backend",
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    return res.data;
  } catch (err) {
    console.error("log failed:", err.response?.data || err.message);
  }
}

module.exports = log;