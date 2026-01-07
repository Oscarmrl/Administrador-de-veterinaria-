import React from "react";

export default function Errors({ children }: { children: React.ReactNode }) {
  return (
    <p className=" text-center my-4 bg-red-700 text-white font-bold p-2 uppercase text-sm">
      {children}
    </p>
  );
}
