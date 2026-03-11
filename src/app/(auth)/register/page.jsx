"use client";

import { register } from "@/actions/auth";
import { useActionState } from "react";

export default function Register() {
  const [state, action, isPending] = useActionState(register, undefined);

  return (
    <div className="container w-1/2">
      <h1 className="title">Register</h1>

      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" />
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
}
