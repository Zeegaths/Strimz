// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/OpToken.sol";

contract TokenScript is Script {
    function setUp() public {}

    function run() public {
        uint256 privateKey = vm.envUint("DEV_PRIVATE_KEY");
        address account = vm.addr(privateKey);
        console.log("account", account);

        vm.startBroadcast(privateKey);

        OpToken token = new OpToken(1_000_000_000);

        token.transfer(0x80a37e3caEf4Bd668Cdc87d53A62a85E66baD6D7, 10000);

        vm.stopBroadcast();
    }
}

//0x966CC3E353a035a230fe4Bfb43C821c68683EBDF