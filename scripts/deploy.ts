import hre from "hardhat";

async function main() {
    const HelloBlockchain = await hre.ethers.getContractFactory("HelloBlockchain");
    const helloBlockchain = await HelloBlockchain.deploy();

    await helloBlockchain.waitForDeployment();

    console.log(`✅ HelloBlockchain deployed to: ${helloBlockchain.target}`);
}

main().catch((error) => {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
});
