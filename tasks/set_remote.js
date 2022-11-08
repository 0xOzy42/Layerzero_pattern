const config = require("./config.json");

module.exports = async function (taskArgs, hre) {
  const remoteAddress = config[taskArgs.target].contract;
  const localAddress = config[hre.network.name].contract;
  const chainIdTarget = config[taskArgs.target].chainId;
  const path = ethers.utils.solidityPack(
    ["bytes", "bytes"],
    [remoteAddress, localAddress]
  );
  console.log(`Path ${hre.network.name} to ${taskArgs.target}: \n`, path);

  if (hre.network.name != "aptos_test") {
    const contractLayerZero = await ethers.getContractAt(
      "OmniCounter",
      addressLayerzero
    );
    await contractLayerZero.setTrustedRemote(chainIdTarget, path);
    console.log("Remote set!");
  }
};
