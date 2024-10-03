// pages/contact.js

import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | My Next.js Tailwind App</title>
        <meta name="description" content="Contact page of my Next.js and Tailwind CSS app" />
      </Head>

      <Navbar />

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          This is the contact page. Add your contact form or contact information here.
        </p>
      </main>

      <footer className="bg-gray-100 text-center py-4 mt-10">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} My Next.js Tailwind App. All rights reserved.</p>
      </footer>
    </div>
  );
}
