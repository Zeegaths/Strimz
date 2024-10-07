// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/Authentication.sol";

contract TokenSript is Script {
    function setUp() public {}

    function run() public {
        uint256 privateKey = vm.envUint("DEV_PRIVATE_KEY");
        address account = vm.addr(privateKey);
        console.log("account", account);

        vm.startBroadcast(privateKey);

        Authentication auth = new Authentication();

        // token.transfer();

        vm.stopBroadcast();
    }
}

//0x4767E956943e5b5518ed80A18eb9317Ed104BBED