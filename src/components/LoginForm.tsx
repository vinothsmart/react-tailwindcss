import { memo, useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left section with form */}
      <div className="w-1/2 flex flex-col justify-center px-10 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-6">Welcome!</h2>
        <p className="text-center text-gray-600 mb-6">
          Sign in to manage roles and users effortlessly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john.doe@example.com"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
            </span>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Sign Up Now
            </a>
          </div>
        </form>
      </div>

      {/* Right section with image */}
      <div className="w-1/2 bg-gray-200 flex justify-center items-center">
        <img
          src="https://via.placeholder.com/400"
          alt="Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default memo(LoginForm);
