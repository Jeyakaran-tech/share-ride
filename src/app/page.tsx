import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomePage from "@/components/Dashboard/E-commerce";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function App() {
  return (
    <>
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    </>
  );
}
