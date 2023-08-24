const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
const ABI = require("../artifacts/contracts/AEROONROAD.sol/AEROONROAD.json");
require("dotenv").config();

async function transferNFTsToFxChain() {
  try {
    const network = "https://eth-goerli.g.alchemy.com/v2/h-asDNMJ21mVniDAY3XE1VQ9F7PW7A0x";
    const privateKey = process.env.PRIVATE_KEY;
    const provider = new ethers.providers.JsonRpcProvider(network);
    const wallet = new ethers.Wallet(privateKey, provider);

    const [signer] = await ethers.getSigners();

    const nftContract = await ethers.getContractFactory("AEROONROAD");
    const nft = await nftContract.attach("0x59057972F553f795275bE46bdC27De38EdBd9E1e");

    const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
    const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

    const tokenIds = [0, 1, 2, 3, 4];

    const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
    await approveTx.wait();
    console.log("Approval confirmed");

    for (const tokenId of tokenIds) {
      const depositTx = await fxRoot.connect(signer).deposit(nft.address, wallet.address, tokenId, "0x6566");
      await depositTx.wait();
      console.log(`Approved and deposited ${tokenId}`);
    }

    const balance = await nft.balanceOf(wallet.address);
    console.log(`INDIAN NFT BALANCE for ${wallet.address}: ${balance.toString()}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

transferNFTsToFxChain();
