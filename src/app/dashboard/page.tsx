"use client";
import { UserButton, useUser } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user } = useUser();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-ocean-gradient">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-bold text-primary-blue mb-4 text-center">Welcome, {user?.firstName || user?.username || "User"}!</h1>
        <p className="mb-6 text-text-secondary text-center">This is your dashboard. You are now logged in.</p>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
