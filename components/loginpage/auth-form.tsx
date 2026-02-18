"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { ErrorContext } from "better-auth/react";
import { authClient } from "@/app/(auth)/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import {
	SignupFormSchema,
	SignupForm,
	LoginFormSchema,
	LoginForm,
} from "@/app/(auth)/schema";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GoogleIcon, Logo } from "@/components/ui/icons";
import { PasswordInput } from "@/components/ui/password-input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

const AuthForm: React.FC = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const urlMode = searchParams.get("tab");
	const initialMode = urlMode === "sign-up" ? "signup" : "login";
	const [mode, setMode] = useState<"login" | "signup">(initialMode);
	const [loading, setLoading] = useState(false);

	const form = useForm<SignupForm | LoginForm>({
		resolver: zodResolver(
			mode === "signup" ? SignupFormSchema : LoginFormSchema,
		),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		mode: "onBlur",
	});

	useEffect(() => {
		const currentValues = form.getValues();
		form.reset({
			name: "",
			email: currentValues.email || "",
			password: currentValues.password || "",
			confirmPassword: "",
		});
	}, [mode]);

	const onSubmit = async (values: SignupForm | LoginForm) => {
		setLoading(true);

		const formConfig = {
			callbackURL: "/chat",
			fetchOptions: {
				onResponse: () => setLoading(false),
				onRequest: () => setLoading(true),
				onError: (ctx: ErrorContext) => {
					const message = ctx.error.message;

					const isDbError =
						message.includes("connect ECONNREFUSED") ||
						message.includes("Failed query") ||
						message.includes("SERVER_ERROR");

					toast.error(
						isDbError ? "Server unavailable. Please try again later." : message,
					);

					if (!isDbError) {
						form.setError("email", { type: "manual", message: message });
						form.setError("password", { type: "manual", message: message });
					}
				},
				onSuccess: async () => {
					const session = await authClient.getSession();
					const redirectPath =
						session.data?.user.role === "admin" ? "/dashboard" : "/chat";
					router.push(redirectPath);
				},
			},
		};

		try {
			if (mode === "signup") {
				const signupValues = values as SignupForm;

				await authClient.signUp.email({
					name: signupValues.name,
					email: signupValues.email,
					password: signupValues.password,
					...formConfig,
				});
			} else {
				const loginValues = values as LoginForm;

				await authClient.signIn.email({
					email: loginValues.email,
					password: loginValues.password,
					...formConfig,
				});
			}
		} catch (error) {
			toast.error("Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	const handleForgotPassword = async () => {
		//TODO: Implement forget password flow
	};

	const handleGoogleLogin = async () => {
		await authClient.signIn.social({
			provider: "google",
			callbackURL: "/chat",
		});
	};

	return (
		<div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
			<div className="p-7 sm:p-11">
				<Link className="flex items-start" href="/" title="Home">
					<Logo />
				</Link>
				<h1 className="mt-8 text-base/6 font-medium">
					{mode === "signup" ? "Create your account" : "Welcome Back"}
				</h1>
				<p className="mt-1 text-sm/5 text-gray-600">
					{mode === "signup" ? "Sign up to continue" : "Sign in to get started"}
				</p>

				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="mt-8 flex flex-col gap-y-6"
				>
					{mode === "signup" && (
						<Controller
							control={form.control}
							name="name"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel>Full Name</FieldLabel>
									<Input
										aria-invalid={fieldState.invalid}
										placeholder="Enter your full name"
										{...field}
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
					)}

					<Controller
						control={form.control}
						name="email"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel>Email</FieldLabel>
								<Input
									aria-invalid={fieldState.invalid}
									placeholder="Enter your email"
									{...field}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						control={form.control}
						name="password"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel>Password</FieldLabel>
								<PasswordInput
									aria-invalid={fieldState.invalid}
									placeholder="••••••••"
									autoComplete={mode === "signup" ? "new-password" : "password"}
									{...field}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					{mode === "signup" && (
						<Controller
							control={form.control}
							name="confirmPassword"
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel>Confirm Password</FieldLabel>
									<PasswordInput
										aria-invalid={fieldState.invalid}
										placeholder="••••••••"
										autoComplete="new-password"
										{...field}
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
					)}

					<div className="flex w-full flex-col gap-4">
						<Button type="submit" disabled={loading} variant="default">
							{mode === "signup" ? "Continue" : "Sign In"}
						</Button>
						<Button
							type="button"
							variant="secondary"
							disabled={loading}
							className="gap-2 rounded-lg"
							onClick={handleGoogleLogin}
						>
							<GoogleIcon />
							Continue with Google
						</Button>
					</div>
				</form>
			</div>

			<div className="m-1.5 mt-0 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
				{mode === "signup" ? "Already registered? " : "Don't have an account? "}
				<button
					className="font-medium hover:text-gray-600 hover:underline"
					onClick={() => setMode(mode === "signup" ? "login" : "signup")}
				>
					{mode === "signup" ? "Sign In" : "Sign Up"}
				</button>
			</div>
		</div>
	);
};

export default AuthForm;
