import { ethers } from "hardhat";

async function main() {
    console.log("🚀 Deploying HelloBlockchain to the local Hardhat network...");
    const HelloBlockchain = await ethers.getContractFactory("HelloBlockchain");
    const helloBlockchain = await HelloBlockchain.deploy();

    await helloBlockchain.waitForDeployment();

    console.log(`✅ HelloBlockchain deployed locally at: ${helloBlockchain.target}`);
}

main().catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exitCode = 1;
});
