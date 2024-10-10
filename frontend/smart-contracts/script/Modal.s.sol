// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/ModalContract.sol";

contract TokenSript is Script {
    function setUp() public {}

    function run() public {
        uint256 privateKey = vm.envUint("DEV_PRIVATE_KEY");
        address account = vm.addr(privateKey);
        console.log("account", account);

        vm.startBroadcast(privateKey);

        ModalContract modal = new ModalContract(0xCb5Df1bE4212440b0C92318A30acB908a424aF64);

        // token.transfer();

        vm.stopBroadcast();
    }
}

//0xa0CeA3Cc4aa2f0b888f79d9Fe204646b26593645