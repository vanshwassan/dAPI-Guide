const hre = require('hardhat');

async function main() {
    const SelfServeDapiWhitelister = await ethers.getContractFactory("SelfServeDapiServerWhitelister");
    const contract = await MyContract.attach(
    "0x..." // Whitelisdt contract address
);

// Now you can call functions of the contract
await contract.doTheThing();

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });