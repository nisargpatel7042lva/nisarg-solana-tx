"use client";

import ConnectWallet from "@/components/wallet";

export default function HomePage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <ConnectWallet />
        </div>
    );
}
