const {ethers} = require("hardhat")

async function main() {

  const [deployer] = await ethers.getSigners(); 

  console.log("Deploying contracts with the account: ", deployer.address); 

  const ContactFactory = await ethers.getContractFactory("ContactFactory");
  const contactFactory = await ContactFactory.deploy();

  await contactFactory.deployed();

  console.log("Contact deployed to:", contactFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
