"use client";

import React, { useEffect, useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Label } from "../../components/Label";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthPage() {
  const { signIn } = useAuthActions();
  const { isAuthenticated, isLoading: isAuthLoading } = useConvexAuth();
  const [step, setStep] = useState<"signIn" | "signUp">("signIn");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("next") || "/";

  useEffect(() => {
    if (!isAuthLoading && isAuthenticated) {
      router.replace(redirectTo);
    }
  }, [isAuthenticated, isAuthLoading, redirectTo, router]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    formData.set("flow", step);
    formData.set("redirectTo", redirectTo);
    
    try {
      await signIn("password", formData);
      toast.success(step === "signIn" ? "Signed in successfully!" : "Account created successfully!");
      router.replace(redirectTo);
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Authentication failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-card p-8 rounded-2xl border border-border shadow-xl">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-primary">
            {step === "signIn" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="mt-2 text-sm text-foreground/60">
            {step === "signIn"
              ? "Sign in to access your account and orders"
              : "Join Xtacia World for a premium experience"}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {step === "signUp" && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Boluwatife Glory"
                  className="bg-accent/50"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="hello@example.com"
                className="bg-accent/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="bg-accent/50"
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full py-3"
              disabled={loading}
            >
              {loading ? "Processing..." : step === "signIn" ? "Sign In" : "Create Account"}
            </Button>
          </div>
        </form>

        <div className="text-center">
          <button
            onClick={() => setStep(step === "signIn" ? "signUp" : "signIn")}
            className="text-sm font-medium text-primary hover:underline transition-all"
          >
            {step === "signIn"
              ? "Don't have an account? Create one"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </main>
  );
}
