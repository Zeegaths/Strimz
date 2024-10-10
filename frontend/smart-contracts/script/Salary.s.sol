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


//0x6ceeF3d421B75a06C9319f7AD3Eb8e86F5bB948a