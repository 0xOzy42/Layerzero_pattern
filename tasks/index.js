task("get_counter", "Get the counter", require("./get_counter"));
///
task(
  "deploy",
  "Deploy counter contract on a given network",
  require("./deploy")
);
///
task(
  "set_remote",
  "Set remote from a network contract into a target network contract",
  require("./set_remote")
).addParam(
  "target",
  "the target network name, ie: goerli, or bsc_test, etc (from hardhat.config.js)"
);
///
task(
  "increment",
  "Increment counter from a network contract into a target network contract",
  require("./increment")
).addParam(
  "target",
  "the target network name, ie: goerli, or bsc_test, etc (from hardhat.config.js)"
);
