import "./globals.scss";
import React from 'react';
import {Metadata, Viewport} from 'next';

export const metadata: Metadata = {
    title: 'Alessandro Russo | Front-End Architect',
    description: 'Alessandro Russo | Web Architect',
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
};

export const viewport: Viewport = {
    themeColor: '#032a2e',
    initialScale: 1,
    width: 'device-width',
}

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
