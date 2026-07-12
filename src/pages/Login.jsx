"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const loginSchema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  const [showPassowrd, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-4 text-[12px] px-4 py-5"
    >
      <div className="flex flex-col justify-start items-start gap-1">
        <h1 className="text-[18px] font-bold">Welcome back</h1>

        <p className="text-[12px]">
          Don’t have an account?{" "}
          <NavLink to="/signup" className="underline underline-offset-4">
            Sign up
          </NavLink>
        </p>
      </div>
      <FieldGroup>
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor={field.name} className="font-medium text-[12px]">
                Email
              </FieldLabel>

              <Input
                {...field}
                id={field.name}
                type="email"
                autoComplete="off"
                placeholder="Enter your email"
                aria-invalid={fieldState.invalid}
                className="rounded-sm bg-white p-2 pr-12 text-black placeholder:text-[#e3e3e3] placeholder:text-[12px] focus-visible:ring-0 focus-visible:ring-[#9669ff]"
              />

              {fieldState.invalid && (
                <FieldError
                  errors={[fieldState.error]}
                  className="text-xs text-red-400"
                />
              )}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel
                htmlFor={field.name}
                className="font-medium text-[12px]"
              >
                Password
              </FieldLabel>

              <div className="relative">
                <Input
                  {...field}
                  id={field.name}
                  type={showPassowrd ? "text" : "password"}
                  placeholder="Enter your password"
                  aria-invalid={fieldState.invalid}
                  className="rounded-sm bg-white p-2 pr-12 text-black placeholder:text-[#e3e3e3] placeholder:text-[12px] focus-visible:ring-0 focus-visible:ring-[#9669ff]"
                />

                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[#9669ff] hover:text-[#9669ff]"
                >
                  {showPassowrd ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              {fieldState.invalid && (
                <FieldError
                  errors={[fieldState.error]}
                  className="text-xs text-red-400"
                />
              )}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="flex items-center justify-between">
        <button
          type="button"
          className="underline underline-offset-4 text-[#9669ff]"
        >
          Forgot password?
        </button>
      </div>

      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="w-full rounded-sm text-[12px] text-white bg-[#9669ff] hover:border-[#9669ff] font-semibold hover:text-[#262931] hover:bg-white"
      >
        {form.formState.isSubmitting ? "Logging in..." : "Log in"}
      </Button>

      <div className="flex items-center gap-4">
        <Separator className="flex-1 bg-white/10" />
        <span className="text-xs text-[#9669ff]">or continue with</span>
        <Separator className="flex-1 bg-white/10" />
      </div>

      <div className="flex justify-center items-center">
        <Button
          type="button"
          variant="outline"
          className="rounded-sm w-full flex justify-center items-center border-white/10 hover:bg-[#d2d2d2] text-black bg-white hover:border-[#e3e3e3] hover:text-white text-[12px]"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="h-5 w-5"
          />
          Google
        </Button>
      </div>
    </form>
  );
}
