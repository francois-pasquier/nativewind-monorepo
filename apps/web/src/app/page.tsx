"use client";
import Image from "next/image";
import { TestComponentNative } from "app/components/TestComponentNative";
import { TestComponentWeb } from "app/components/TestComponentWeb";

export default function Home() {
  return (
    <div className="p-4 bg-gray-300">
      <TestComponentNative />
      <TestComponentWeb />
    </div>
  );
}
