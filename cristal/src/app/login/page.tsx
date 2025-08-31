import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-ocean-gradient">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-primary-blue mb-6 text-center">Sign In to Cristal Clear Water</h1>
        <SignIn path="/login" routing="path" signUpUrl="/signup" />
      </div>
    </main>
  );
}
