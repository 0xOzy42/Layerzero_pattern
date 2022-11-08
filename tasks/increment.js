const config = require("./config.json");

module.exports = async function (taskArgs, hre) {
  const endpoint = config[hre.network.name].endpoint;
  const localAddress = config[hre.network.name].contract;
  const chainIdTarget = config[taskArgs.target].chainId;

  if (hre.network.name != "aptos_test") {
    const contractLayerZero = await ethers.getContractAt(
      "OmniCounter",
      localAddress
    );
    const endpointContract = await ethers.getContractAt(
      "ILayerZeroEndpoint",
      endpoint
    );
    let adapterParams = ethers.utils.solidityPack(
      ["uint16", "uint256"],
      [1, 200000]
    );
    let fees = await endpointContract.estimateFees(
      chainIdTarget,
      localAddress,
      "0x",
      false,
      adapterParams
    );
    console.log(
      `fees[0] (wei): ${fees[0]} / (eth): ${ethers.utils.formatEther(fees[0])}`
    );
    await contractLayerZero.incrementCounter(chainIdTarget, { value: fees[0] });
    console.log(`${hre.network.name} sent msg to ${taskArgs.target}!`);
  }
};
