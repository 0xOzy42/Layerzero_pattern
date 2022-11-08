const config = require("./config.json");

module.exports = async function (taskArgs, hre) {
  const addressLayerzero = config[hre.network.name].contract;
  const contractLayerZero = await ethers.getContractAt(
    "OmniCounter",
    addressLayerzero
  );
  const counter = await contractLayerZero.counter();

  console.log(`Counter ${hre.network.name}: `, counter.toString());
};
