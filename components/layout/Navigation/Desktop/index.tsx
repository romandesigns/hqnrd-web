import React from "react";
import Container from "../../Container";
import { Logo } from "@/components/features";

export function Desktop() {
  return (
    <Container>
      <ul className="p-4 py-3 rounded-bl-md rounded-br-md bg-purple-500 flex items-center justify-start gap-6 text-sm">
        <li className="mr-auto">
          <Logo />
        </li>
        <li>Home</li>
        <li>Habitaciones</li>
        <li>Sign In</li>
        <li>Sign Up</li>
      </ul>
    </Container>
  );
}
