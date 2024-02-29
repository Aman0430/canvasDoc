"use client";
import HeroSection from "@/components/Hero";
import React, { useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Header from "@/components/Header";

export default function Home() {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log("--", user);
  }, [user]);
  return (
    <section className="bg-gray-900 text-white">
      <Header />
      <HeroSection />
    </section>
  );
}
