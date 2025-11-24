"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res && res.error) {
      setError(res.error || "Invalid credentials");
      return;
    }

    // success
    router.push("/");
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-base-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex items-center gap-2">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
          <button
            type="button"
            onClick={() => signIn("google")}
            className="btn btn-outline"
          >
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
