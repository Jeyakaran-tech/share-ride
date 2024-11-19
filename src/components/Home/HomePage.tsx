"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Link from 'next/link';

export default function HomePage({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      {/* Main content aligned to the left */}
      <main className="p-4 sm:p-11 flex-grow">
        <section className="mt-10 flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-4xl sm:text-6xl font-bold text-customGreen">SHARE YOUR RIDE</h1>
            <h1 className="text-2xl sm:text-4xl font-bold text-customYellow">SAVE THE ENVIRONMENT</h1>
          </div>
          <div className="flex space-x-4">
            <Link href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
              <span className="rounded-full border border-solid border-black/[1.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 font-bold">
                REQUEST RIDE
              </span>
            </Link>

            <Link href="/publish"> {/* Use Link for navigation */}
              <span className="rounded-full border border-solid border-black/[1.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 font-bold">
                PUBLISH A RIDE
              </span>
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-customYellow text-center py-4">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Share ride. All rights reserved.</p>
        </footer>
    </div>
  );
}
