import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: "Ikhmal's Portfolio",
	description: "A simple portfolio to showcase my work",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}>{children}</body>
		</html>
	);
}
