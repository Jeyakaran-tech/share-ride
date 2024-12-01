"use client";
import React, { useState, ReactNode } from "react";


export default function DefaultLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-primary">
      {/* Main content aligned to the left */}
      <div className="flex-grow flex justify-center items-center">
      {children}
      </div>
      <footer className="bg-customYellow text-center py-4">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Share ride. All rights reserved.</p>
        </footer>
    </div>
    </>
  );
}
