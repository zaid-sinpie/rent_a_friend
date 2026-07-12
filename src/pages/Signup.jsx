import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Eye, EyeOff } from "lucide-react";
import { ShieldCheck, Star, CalendarDays, Lock } from "lucide-react";
import CustomDialog from "@/components/CustomDialog";
import Login from "./Login";
import { useOutletContext } from "react-router-dom";

const loginSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, "Full name must be at least 3 characters")
      .max(50, "Full name cannot exceed 50 characters"),

    email: z
      .email("Enter a valid email")
      .max(254, "Email cannot exceed 254 characters"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(64, "Password cannot exceed 64 characters"),

    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters")
      .max(64, "Confirm password cannot exceed 64 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const features = [
  {
    title: "Safe & Secure",
    description:
      "Verified profiles and secure messaging to ensure your safety.",
    icon: ShieldCheck,
    iconColor: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    title: "Trusted Community",
    description: "Ratings and reviews help you choose the right companion.",
    icon: Star,
    iconColor: "text-emerald-500",
    bg: "bg-emerald-100",
  },
  {
    title: "Flexible & Easy",
    description: "Book by the hour or day, choose what works best for you.",
    icon: CalendarDays,
    iconColor: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    title: "Private & Respectful",
    description:
      "Your privacy is our priority. Discreet and respectful interactions.",
    icon: Lock,
    iconColor: "text-yellow-500",
    bg: "bg-yellow-100",
  },
];

export default function Signup() {
  const { loginModal, handleLoginModalClose } = useOutletContext();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
    <main className="h-screen w-full">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-10 mt-10">
        <div className="grid w-full overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.05)] lg:grid-cols-2">
          <section className="flex items-start justify-center p-8 lg:p-16">
            <div className="w-full px-2 flex flex-col justify-center gap-4">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-[30px] font-bold bg-linear-to-r from-violet-700 via-blue-500 via-50% to-green-500 bg-clip-text text-transparent w-fit">
                  Create Your Account
                </h1>
                <p className="text-[14px]  text-slate-500 text-center">
                  Join our community and start building real connctions today.
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-4 text-[14px]">
                <Button className="flex py-5 w-full items-center justify-center gap-3 rounded-sm border border-gray-200 bg-white transition hover:border-violet-400 text-black">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    className="h-5"
                  />
                  Sign up with Google
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-sm text-gray-400">or</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col justify-start gap-4"
              >
                <FieldGroup>
                  <Controller
                    name="fullName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel
                          htmlFor={field.name}
                          className="font-medium text-[12px]"
                        >
                          Full Name
                        </FieldLabel>

                        <Input
                          {...field}
                          id={field.name}
                          placeholder="Enter your full name"
                          aria-invalid={fieldState.invalid}
                          className="rounded-sm bg-white p-5 pr-12 text-black placeholder:text-[#e3e3e3] placeholder:text-[12px] focus-visible:ring-0 focus-visible:ring-[#9669ff]"
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
                    name="email"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel
                          htmlFor={field.name}
                          className="font-medium text-[12px]"
                        >
                          Email
                        </FieldLabel>

                        <Input
                          {...field}
                          id={field.name}
                          type="email"
                          autoComplete="off"
                          placeholder="Enter your email"
                          aria-invalid={fieldState.invalid}
                          className="rounded-sm bg-white p-5 pr-12 text-black placeholder:text-[#e3e3e3] placeholder:text-[12px] focus-visible:ring-0 focus-visible:ring-[#9669ff]"
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
                            className="rounded-sm bg-white p-5 pr-12 text-black placeholder:text-[#e3e3e3] placeholder:text-[12px] focus-visible:ring-0 focus-visible:ring-[#9669ff]"
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
                  <Controller
                    name="confirmPassword"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel
                          htmlFor={field.name}
                          className="font-medium text-[12px]"
                        >
                          Confirm Password
                        </FieldLabel>

                        <div className="relative">
                          <Input
                            {...field}
                            id={field.name}
                            type={showPassowrd ? "text" : "password"}
                            placeholder="Confirm your password"
                            aria-invalid={fieldState.invalid}
                            className="rounded-sm bg-white p-5 pr-12 text-black placeholder:text-[#e3e3e3] placeholder:text-[12px] focus-visible:ring-0 focus-visible:ring-[#9669ff]"
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
                  <label className="flex justify-start items-center gap-2 text-sm text-slate-600">
                    <input type="checkbox" className="size-4" />

                    <span>
                      I agree to the
                      <a className="font-medium text-violet-600">
                        Terms of Service
                      </a>
                      and
                      <a className="font-medium text-violet-600">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </FieldGroup>

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="text-[12px] px-4 py-5 hover:bg-[#9669ff]"
                >
                  {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </div>
          </section>

          <section className="relative hidden overflow-hidden bg-[#FDFDFE] lg:flex lg:flex-col justify-start items-center gap-4">
            <img src="/signupImg.png" alt="signup_img" className="h-[60%]" />
            <h1 className="font-semi-bold">Why Join Rent a Friend?</h1>
            <div className="w-full p-4 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div key={index} className={`flex items-start gap-4`}>
                      <div
                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${feature.bg}`}
                      >
                        <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                      </div>

                      <div>
                        <h3 className="text-[12px] font-semibold text-slate-900">
                          {feature.title}
                        </h3>

                        <p className="text-[10px] mt-2 text-sm leading-6 text-slate-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
      <CustomDialog open={loginModal} onOpenChange={handleLoginModalClose}>
        <Login />
      </CustomDialog>
    </main>
  );
}
