// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/SubscriptionService.sol";

contract TokenSript is Script {
    function setUp() public {}

    function run() public {
        uint256 privateKey = vm.envUint("DEV_PRIVATE_KEY");
        address account = vm.addr(privateKey);
        console.log("account", account);

        vm.startBroadcast(privateKey);

        SubscriptionService auth = new SubscriptionService(0xa2769f79F6179Db0C81dD6Ea28157bCf6D3C7ADf, 0x80a37e3caEf4Bd668Cdc87d53A62a85E66baD6D7);

        // token.transfer();

        vm.stopBroadcast();
    }
}

//0x498DAb326b352718A362FaF2d11Caf6464Ce238d