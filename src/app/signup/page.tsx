import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-ocean-gradient">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary-blue mb-6 text-center">Create Your Account</h1>
        <SignUp path="/signup" routing="path" signInUrl="/login" />
      </div>
    </main>
  );
}
