"use client";
import React from "react";
import { UnifiedWalletProvider, WalletName } from "@jup-ag/wallet-adapter";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <UnifiedWalletProvider
            wallets={[]}
            config={{
                autoConnect: false,
                env: "devnet",
                metadata: {
                    name: "UnifiedWallet",
                    description: "UnifiedWallet",
                    url: "https://jup.ag",
                    iconUrls: ["https://jup.ag/favicon.ico"],
                },
                hardcodedWallets: [
                    {
                        id: "Backpack",
                        name: "Backpack" as WalletName<"Backpack">,
                        url: "https://www.backpack.app/",
                    },
                ],
                walletPrecedence: ["Backpack"],
                walletlistExplanation: {
                    href: "https://station.jup.ag/docs/additional-topics/wallet-list",
                },
                theme: "light",
                lang: "en",
            }}
        >
            {children}
        </UnifiedWalletProvider>
    );
}