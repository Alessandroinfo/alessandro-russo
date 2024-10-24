import "./globals.scss";
import Head from 'next/head';
import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Alessandro Russo | Front-End Architect',
    description: 'Alessandro Russo | Web Architect',
    viewport: 'width=device-width, initial-scale=1',
    openGraph: {
        title: 'Alessandro Russo | Web Architect',
        type: 'website',
        url: 'https://www.alessandro-russo.com',
        images: [
            {
                url: 'https://i.imgur.com/lxRBpeb.jpg',
                alt: 'Alessandro Russo profile image',
            },
        ],
        description: 'Alessandro Russo | Web Architect Portfolio.',
    },
    twitter: {
        card: 'summary',
        creator: '@Alessandro_Info',
    },
    themeColor: '#032a2e',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
