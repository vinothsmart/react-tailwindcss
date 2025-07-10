import { useState } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <button
            onClick={() => setIsLogin(true)}
            className={`py-2 px-4 ${
              isLogin ? "bg-blue-500" : "bg-gray-300"
            } text-white rounded-md`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`py-2 px-4 ml-2 ${
              !isLogin ? "bg-blue-500" : "bg-gray-300"
            } text-white rounded-md`}
          >
            Register
          </button>
        </div>

        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}

export default App;
