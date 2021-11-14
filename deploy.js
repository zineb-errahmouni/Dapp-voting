const ethers = require('ethers')
const fs = require('fs');
const bytecode = fs.readFileSync('./contracts_Voting_sol_Voting.bin').toString();
const abi = JSON.parse(fs.readFileSync('./contracts_Voting_sol_Voting.abi').toString());

provider = new ethers.providers.JsonRpcProvider();
provider.listAccounts().then(result => console.log(result));
signer = provider.getSigner(0)
const factory = new ethers.ContractFactory(abi, bytecode, signer);
contract = null;
factory.deploy([ethers.utils.formatBytes32String('Rama'),
    ethers.utils.formatBytes32String('Nick'),
    ethers.utils.formatBytes32String('Jose')])
    .then((c) => {
        contract = c
    })

