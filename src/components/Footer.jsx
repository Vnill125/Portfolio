import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-800">
      <div className="container text-center text-sm text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Krystian Muszyński — Built with React & Tailwind
      </div>
    </footer>
  );
}
