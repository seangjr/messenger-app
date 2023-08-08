"use client";

import Image from "next/image";
import AuthForm from "./components/AuthForm";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams?.get("error");

  useEffect(() => {
    if (error) {
      toast.error(
        "You must link your account before you can sign in with a social account."
      );
      router.replace("/");
    }
  }, [error, router, searchParams]);

  return (
    <div
      className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          height={48}
          width={48}
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
        <h2
          className="
                mt-6
                text-center
                text-3xl
                font-bold
                tracking-tight
                text-gray-900
              "
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
