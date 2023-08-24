Polygon-Advanced-Module-1
Commencing the inaugural project within Polygon-Advance, the objective encompassed the deployment of an NFT collection onto the Ethereum blockchain. Additionally, the task involved mapping the said collection to Polygon and effectuating asset transfers through the utilization of the Polygon Bridge.

Initial Steps
Initiating the process involves obtaining the source code. This can be accomplished by downloading the complete repository, granting access to various other repository contents. Upon acquiring the repository, navigate towards the Poly_Proof project directory and execute the following command:

npm install
Once the dependencies are successfully installed, proceed by running the test file using this command:

npx hardhat test
Deploying the ERC721 Contract
Preceding deployment, it's imperative to rename the file ".env.example" to ".env". Within the newly renamed file, furnish your wallet's private key where prompted, as indicated: "PRIVATE_KEY= 'your wallet private key'". Execute the ensuing command to deploy the ERC721 contract on the Goerli Ethereum Testnet:

npx hardhat run scripts/deploy.js --network goerli 
Note:
Following deployment, an address will be generated. This address must be copied into both contractAddress.js (located in the metadata folder) and batchMint.js (stored within the scripts folder).

This script's execution will culminate in the successful deployment of the contract.

Batch Minting NFTs
Execute the subsequent command to undertake the batch-minting process for NFTs using the previously deployed ERC721 contract:

npx hardhat run scripts/batchMint.js --network goerli
The script will facilitate the creation of a designated number of NFTs, subsequently assigning ownership to your address.

Authorization and NFT Deposit to Polygon Mumbai
To seamlessly authorize and transfer the minted NFTs from the Ethereum network to the Polygon Mumbai network, implement the following commands:

npx hardhat run scripts/approveDeposit.js --network goerli

Author
Sudhanshu Shekhar


