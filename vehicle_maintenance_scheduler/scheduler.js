
const log = require("../logging_middleware/logger");

console.log("LOG TYPE:", log);
async function scheduleTasks(tasks, maxHours) {
  await log("info", "service", "Scheduler started");

  const total = tasks.length;

  const table = [];
  for (let i = 0; i <= total; i++) {
    table[i] = new Array(maxHours + 1).fill(0);
  }

  for (let i = 1; i <= total; i++) {
    const duration = tasks[i - 1].Duration;
    const impact = tasks[i - 1].Impact;

    for (let h = 0; h <= maxHours; h++) {
      if (duration <= h) {
        const take = impact + table[i - 1][h - duration];
        const skip = table[i - 1][h];
        table[i][h] = take > skip ? take : skip;
      } else {
        table[i][h] = table[i - 1][h];
      }
    }
  }

  let rem = maxHours;
  const result = [];

  for (let i = total; i > 0; i--) {
    if (table[i][rem] !== table[i - 1][rem]) {
      result.push(tasks[i - 1]);
      rem -= tasks[i - 1].Duration;
    }
  }

  await log("info", "service", "Scheduler completed");

  return {
    maxImpact: table[total][maxHours],
    selectedTasks: result.reverse()
  };
}

module.exports = scheduleTasks;