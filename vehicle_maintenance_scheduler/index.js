const scheduleTasks = require("./scheduler");
const { getDepots, getVehicles } = require("./api");

async function run() {
  const depots = await getDepots();
  const vehicles = await getVehicles();

  for (const depot of depots) {
    console.log(`\nDepot ${depot.ID}`);

    const result = await scheduleTasks(
      vehicles,
      depot.MechanicHours
    );

    console.log("Max Impact:", result.maxImpact);
    console.log("Tasks:", result.selectedTasks);
  }
}

run();