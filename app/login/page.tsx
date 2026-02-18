import React from "react";
import AuthForm from "@/components/loginpage/auth-form";

export default function LoginPage() {
	return (
		<PageContainer>
			<AuthForm />
		</PageContainer>
	);
}

const PageContainer = ({ children }: { children?: React.ReactNode }) => (
	<main className="overflow-hidden bg-gray-50">
		<TopGradient />
		<div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
			{children}
		</div>
	</main>
);

const TopGradient = () => (
	<div className="relative mx-auto max-w-7xl">
		<div className="absolute -top-44 -right-60 h-60 w-xl rotate-[-10deg] transform-gpu rounded-full bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] blur-3xl md:right-0" />
	</div>
);
