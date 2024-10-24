import "./globals.scss";
import Head from 'next/head';
import React from 'react';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Head>
            <title>Alessandro Russo | Front-End Architect</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="Alessandro Russo | Web Architect"/>
            <meta property="og:title" content="Alessandro Russo | Web Architect"/>
            <meta property="og:type" content="portfolio"/>
            <meta property="og:url" content="https://www.alessandro-russo.com"/>
            <meta property="og:image" content="https://i.imgur.com/lxRBpeb.jpg"/>
            <meta property="og:image:alt" content="Alessandro Russo profile image."/>
            <meta property="og:description" content="Alessandro Russo | Web Architect Portfolio."/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:creator" content="@Alessandro_Info"/>
            <meta name="theme-color" content="#032a2e"/>
        </Head>
        <body>
        {children}
        </body>
        </html>
    );
}
