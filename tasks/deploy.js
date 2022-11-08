const config = require("./config.json");
const fs = require("fs");

module.exports = async function (taskArgs, hre) {
  const endpointAddress = config[hre.network.name].endpoint;
  const LayerzeroContract = await ethers.getContractFactory("OmniCounter");
  const layerzeroContract = await LayerzeroContract.deploy(endpointAddress);
  await layerzeroContract.deployed();
  console.log(`Contract layerZero deployed on ${hre.network.name}!`);
  console.log("Address contract: ", layerzeroContract.address);

  //write into config file
  let newConfig = JSON.parse(JSON.stringify(config));
  newConfig[hre.network.name].contract = layerzeroContract.address;

  fs.writeFileSync(
    "./tasks/config.json",
    JSON.stringify(newConfig, null, 4),
    (err) => {
      if (err) throw err;
    }
  );
};
