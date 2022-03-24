const hre = require("hardhat");

async function main() {
  const RandomPicsNFT = await hre.ethers.getContractFactory("RandomPicsNFT");
  const randomPicsNFT = await RandomPicsNFT.deploy();

  await randomPicsNFT.deployed();

  console.log("RandomPicsNFT deployed to:", randomPicsNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors./
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
