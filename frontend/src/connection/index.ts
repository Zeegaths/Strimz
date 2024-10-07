import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const SUPPORTED_CHAIN_ID = 84532;

const polygonamoy = {
  chainId: 84532,
  name: "PBase sepolia",
  currency: "sepolia",
  explorerUrl: "https://sepolia.basescan.org/",
  rpcUrl: import.meta.env.VITE_RPC_URL,
};

const metadata = {
  name: "Strimz",
  description: "A Token Streaming Application",
  url: "http://localhost:5173/", // origin must match your domain & subdomain
  icons: ["http://localhost:5173/"],
};

export const configWeb3Modal = () =>
  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [polygonamoy],
    projectId: import.meta.env.VITE_PROJECT_ID,
    enableAnalytics: false, // Optional - defaults to your Cloud configuration
  });
