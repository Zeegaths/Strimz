// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/SalaryStreaming.sol";

contract SalaryScript is Script {
    function setUp() public {}

    function run() public {
        uint256 privateKey = vm.envUint("DEV_PRIVATE_KEY");
        address account = vm.addr(privateKey);
        console.log("account", account);

        vm.startBroadcast(privateKey);

        SalaryStreaming salaryStreaming = new SalaryStreaming(0xa2769f79F6179Db0C81dD6Ea28157bCf6D3C7ADf);

        vm.stopBroadcast();
    }
}


//0xbaBbB375A9B8dd96B0d56C5e17df513a47fB8aB8