"use client";
import { FC } from "react";
import { signIn } from "next-auth/react";
import { Container } from "@/components";

const SignIn: FC = () => {
  return (
    <section>
      <Container>
        asdsa
        <button onClick={() => signIn()}>SignIn</button>
      </Container>
    </section>
  );
};

export default SignIn;
