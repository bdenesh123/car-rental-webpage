import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-gray-700 mt-16">
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 w-full">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
        SewaCar
      </h1>

      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base text-center sm:text-left">
        Your trusted car rental platform
      </p>

      <div className="flex gap-4 text-gray-600 dark:text-gray-400">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 transition"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 transition"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 transition"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
