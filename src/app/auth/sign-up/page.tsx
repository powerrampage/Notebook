"use client";
import { FC } from "react";
import { signOut } from "next-auth/react";

const SignUp: FC = () => {
  return <button onClick={() => signOut()}>SignUp</button>;
};

export default SignUp;
