export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
      <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
        Oops! Page not found.
      </h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Go to Homepage
      </a>
    </div>
  );
}
