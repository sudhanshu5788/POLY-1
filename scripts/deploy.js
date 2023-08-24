const hre = require("hardhat");
const fs = require("fs/promises");  // Using fs/promises for async file operations

async function deployNFTContract() {
  try {
    // Get the contract factory
    const NFT = await hre.ethers.getContractFactory("AEROONROAD");

    // Deploy the contract
    const nft = await NFT.deploy();

    // Wait for the contract to be deployed
    await nft.deployed();

    // Log the contract address
    console.log("NFT CONTRACT DEPLOYED TO:", nft.address);

    // Prepare the content to write
    const content = `export const nftAddress = "${nft.address}";\n`;

    // Write the content to the file
    await fs.writeFile("metadata/contractAddress.js", content);

    console.log("Contract address exported to metadata/contractAddress.js");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

// Execute the deployment function
deployNFTContract();
