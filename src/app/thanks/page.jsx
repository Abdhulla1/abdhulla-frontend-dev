import React from 'react'
import Link from 'next/link';
export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100 dark:bg-gray-900 text-center">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Thank You!</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Your message has been received. I&apos;ll get back to you as soon as possible.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Return to Home
      </Link>
    </div>
  );
}
