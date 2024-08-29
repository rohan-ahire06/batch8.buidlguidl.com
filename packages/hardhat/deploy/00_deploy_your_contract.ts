import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys the Metadata contract using the deployer account.
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployMetadata: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy Metadata contract
  const metadataDeployment = await deploy("Metadata", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  const metadataAddress = metadataDeployment.address;
  console.log("Metadata deployed to:", metadataAddress);

  // Log additional information if needed
  console.log("Deployment completed successfully.\n");
};

export default deployMetadata;

deployMetadata.tags = ["Metadata"];
