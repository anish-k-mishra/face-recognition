"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center py-10">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black border border-neutral-800">
        <h2 className="font-bold text-xl text-white">
          Welcome to Aceternity
        </h2>
        <p className="text-neutral-400 text-sm max-w-sm mt-2">
          Login to Aceternity if you can because we don&apos;t have a login flow
          yet.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label className="text-white" htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Tyler"
                type="text"
                className="bg-neutral-800 border border-neutral-800 placeholder:text-neutral-500 text-white focus:ring-0 focus:border-neutral-800"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label className="text-white" htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Durden"
                type="text"
                className="bg-neutral-800 border border-neutral-800 placeholder:text-neutral-500 text-white focus:ring-0 focus:border-neutral-800"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label className="text-white" htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              className="bg-neutral-800 border border-neutral-800 placeholder:text-neutral-500 text-white focus:ring-0 focus:border-neutral-800"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label className="text-white" htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              className="bg-neutral-800 border border-neutral-800 placeholder:text-neutral-500 text-white focus:ring-0 focus:border-neutral-800"
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-neutral-900 to-neutral-800 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
