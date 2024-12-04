"use client";

import { useRouter } from "next/navigation";
import { IsClientCtxProvider } from "./isClient";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return <IsClientCtxProvider>{children}</IsClientCtxProvider>;
}
