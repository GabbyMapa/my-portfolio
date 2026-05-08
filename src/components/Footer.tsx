export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © {currentYear} Your Name. Built with React, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-gray-500 mt-2 text-sm">
          Deployed with Vite
        </p>
      </div>
    </footer>
  );
}
