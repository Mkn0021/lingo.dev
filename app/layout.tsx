import "./globals.css";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
	title: "LinguaBot - Cross-Lingual Document Intelligence",
	description:
		"Upload documents in any language, ask questions in yours. LinguaBot uses AI to bridge language gaps and find answers across your knowledge base.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={inter.variable}>
			<body className="bg-gray-50 antialiased">
				<Toaster position="top-right" />
				{children}
			</body>
		</html>
	);
}
