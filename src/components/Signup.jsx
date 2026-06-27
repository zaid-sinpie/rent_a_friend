"use client";

import { Eye, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Card, CardContent } from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";

import { Separator } from "@/components/ui/separator";

export default function Signup() {
  return (
    <div className="h-full w-full p-6 text-[#FDC3A1]">
      <Card className="w-full h-full bg-transparent shadow-none outline-none border-none ring-0">
        <CardContent className="p-0 w-full h-full flex justify-around items-center">
          <div className="w-full h-full flex justify-start items-start relative">
            <div className="h-full w-[80%] relative">
              <div className="h-full w-full absolute backdrop-blur-[1px] bg-[#20222918] z-5"></div>
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
                alt="background"
                className="h-full w-full object-cover rounded-sm"
              />
            </div>

            <div className="flex items-center justify-center p-5 lg:px-10 absolute -right-20 top-1/2 -translate-1/2 bg-[#202229] rounded-sm z-10 shadow-sm">
              <div className="w-full flex flex-col gap-10">
                <div className="flex flex-col justify-start items-start gap-1">
                  <h1 className="text-[18px] font-bold text-[#FDC3A1]">
                    Welcome back
                  </h1>

                  <p className="text-[#FDC3A1]/60 text-[12px]">
                    Don’t have an account?{" "}
                    <button className="underline underline-offset-4 hover:text-[#FDC3A1]">
                      Sign up
                    </button>
                  </p>
                </div>

                <form className=" flex flex-col justify-center gap-4 text-[12px]">
                  <div className="space-y-3">
                    <label className="font-medium text-[#FDC3A1]">Email</label>

                    <Input
                      type="email"
                      autoComplete="off"
                      placeholder="Enter your email"
                      className="rounded-sm border-white/10 bg-[#262931] p-2 text-white placeholder:text-[#FDC3A1]/30 placeholder:text-[12px] focus-visible:ring-1 focus-visible:ring-[#FDC3A1]"
                    />
                  </div>

                  <div className="">
                    <label className="font-medium text-[#FDC3A1]">
                      Password
                    </label>

                    <div className="relative">
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="rounded-sm border-white/10 bg-[#262931] p-2 text-white placeholder:text-[#FDC3A1]/30 placeholder:text-[12px] focus-visible:ring-1 focus-visible:ring-[#FDC3A1]"
                      />

                      <button
                        type="button"
                        className="absolute right-5 top-1/2 -translate-y-1/2 text-[#FDC3A1]/40 hover:text-[#FDC3A1]"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className="underline underline-offset-4 text-[#FDC3A1]/70 hover:text-[#FDC3A1]"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button className="w-full rounded-sm text-[12px] bg-[#FDC3A1] font-semibold text-[#262931] hover:bg-[#FDC3A1]/90">
                    Log in
                  </Button>

                  <div className="flex items-center gap-4">
                    <Separator className="flex-1 bg-white/10" />

                    <span className="text-xs text-[#FDC3A1]/50">
                      or continue with
                    </span>

                    <Separator className="flex-1 bg-white/10" />
                  </div>

                  <div className="flex justify-center items-center">
                    <Button
                      variant="outline"
                      className="rounded-sm w-full flex justify-center items-center border-white/10 bg-[#262931] text-[#FDC3A1] hover:bg-[#2D3038] hover:text-[#FDC3A1]"
                    >
                      <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="google"
                        className="mr-3 h-5 w-5"
                      />
                      Google
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
