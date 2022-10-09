const { ethers, BigNumber } = require('ethers');
const { abi } = require('@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json');

const web3Provider = new ethers.providers.JsonRpcProvider('https://polygon-mainnet.g.alchemy.com/v2/6aCuWP8Oxcd-4jvmNYLh-WervViwIeJq')
const chainId = 137
const poolAddress = '0x9B08288C3Be4F62bbf8d1C20Ac9C5e6f9467d8B7'
const poolContract = new ethers.Contract(poolAddress, abi, web3Provider)

async function getEvents(fromBlock, toBlock){
    console.log(await (await poolContract.queryFilter('*', fromBlock, toBlock)).length)
}

getEvents(34049807, 34052639)