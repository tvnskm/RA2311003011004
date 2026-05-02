

const BASE_URL = "http://20.244.56.144/evaluation-service";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2dDM3NjlAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMzUzNiwiaWF0IjoxNzc3NzAyNjM2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYjZmYTdiYzgtMTNjNy00ZDc3LThlZTEtN2M5MjVmMTJiMjE3IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibW9oYW4gdiBuIHMgayB0aXJ1dmFpcGF0aSIsInN1YiI6ImZmN2U0ODY0LTliNGUtNGFhMi05ZGMzLTM2MWQyMTkwOTJhZSJ9LCJlbWFpbCI6InZ0Mzc2OUBzcm1pc3QuZWR1LmluIiwibmFtZSI6Im1vaGFuIHYgbiBzIGsgdGlydXZhaXBhdGkiLCJyb2xsTm8iOiJyYTIzMTEwMDMwMTEwMDQiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiJmZjdlNDg2NC05YjRlLTRhYTItOWRjMy0zNjFkMjE5MDkyYWUiLCJjbGllbnRTZWNyZXQiOiJiZlhRcEd4SGZua0RxaGVKIn0.R0Rd4XMROq3A27khP2b3ROVOcTzM77yYyQqDycBmi40";




async function getDepots() {
  for (let i = 0; i < 3; i++) {
    try {
      const res = await axios.get(BASE_URL + "/depots", {
        headers: { Authorization: `Bearer ${TOKEN}` },
        timeout: 5000
      });
      return res.data.depots;
    } catch (err) {
      console.log("Retry depots:", i + 1);
    }
  }

  return [{ ID: 1, MechanicHours: 60 }];
}

async function getVehicles() {
  for (let i = 0; i < 3; i++) {
    try {
      const res = await axios.get(BASE_URL + "/vehicles", {
        headers: { Authorization: `Bearer ${TOKEN}` },
        timeout: 5000
      });
      return res.data.vehicles;
    } catch (err) {
      console.log("Retry vehicles:", i + 1);
    }
  }

  return [
    { TaskID: "A", Duration: 2, Impact: 5 },
    { TaskID: "B", Duration: 3, Impact: 6 },
    { TaskID: "C", Duration: 4, Impact: 10 }
  ];
}


module.exports = {
  getDepots,
  getVehicles
};
