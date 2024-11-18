import { Metadata } from "next";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import HomePage from "../components/Home/HomePage";

export const metadata: Metadata = {
  title:
    "Hop In",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function App() {
  return (
    <>
      <DefaultLayout>
        <HomePage/>
      </DefaultLayout>
    </>
  );
}
