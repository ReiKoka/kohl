import { useNavigate } from "react-router";
import ErrorImage from "../assets/images/errorImage.svg?react";
import { ArrowLeft } from "@phosphor-icons/react";

function ErrorRoute() {
  const navigate = useNavigate();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6">
      <ErrorImage className="text-primary w-80" />
      <h1 className="font-primary text-neutral mx-auto w-[90%] text-center text-xl font-bold">
        Oops, Could not find the page you are looking for!
      </h1>
      <button
        onClick={() => navigate("/")}
        className="btn btn-link flex items-center gap-2"
      >
        <ArrowLeft className="fill-primary h-4 w-4" />
        <span className="text-base leading-0">Back to Home</span>
      </button>
    </div>
  );
}

export default ErrorRoute;
