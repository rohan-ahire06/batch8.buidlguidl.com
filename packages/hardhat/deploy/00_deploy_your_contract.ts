import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// Update with your Batch number
const BATCH_NUMBER = "8";

/**
 * Deploys a contract named "deployYourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  //Deploying batchRegistry contract
  const batchRegistryDeployment = await deploy("BatchRegistry", {
    from: deployer,
    args: [deployer, BATCH_NUMBER],
    log: true,
    autoMine: true,
  });

  //gatting the address of batchRegistry contract
  const batchRegistryAddress = batchRegistryDeployment.address;
  console.log("\nBatchRegistry deployed to:", batchRegistryAddress);

  //Deploying the CheckIn contract
  const checkInDeployment = await deploy("CheckIn", {
    from: deployer,
    args: [batchRegistryAddress], // Pass BatchRegistry address to CheckIn
    log: true,
    autoMine: true,
  });

  const checkInAddress = checkInDeployment.address;
  console.log("CheckIn deployed to:", checkInAddress);

  // Get the deployed contract to interact with it after deploying.
  const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
  await hre.ethers.getContract<Contract>("CheckIn", deployer);
  console.log("\nBatchRegistry deployed to:", await batchRegistry.getAddress());
  console.log("Remember to update the allow list!\n");

  // The GraduationNFT contract is deployed on the BatchRegistry constructor.
  const batchGraduationNFTAddress = await batchRegistry.batchGraduationNFT();
  console.log("BatchGraduation NFT deployed to:", batchGraduationNFTAddress, "\n");
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["BatchRegistry", "CheckIn"];
