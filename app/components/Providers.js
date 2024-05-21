// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { MotionConfig } from "framer-motion";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";

export function Providers({ children }) {
  const router = useRouter();
  const reducedMotion = isMobile ? "always" : "never";
  return (
    <NextUIProvider navigate={router.push}>
      <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>
    </NextUIProvider>
  );
}
