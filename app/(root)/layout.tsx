"use client";

import React from "react";
import Providers from "@/providers";
import ErrorBoundary from "@/components/error-boundary";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Providers>
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
        </Providers>
    )
}
