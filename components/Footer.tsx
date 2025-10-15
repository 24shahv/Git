import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black-pattern text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <div className="text-center md:text-left">
            <Image
              className="cursor-pointer"
              src="/assets/logos/logo.svg"
              width={150}
              height={150}
              alt="dcipher Network Logo"
            />
          </div>
          <div className="flex space-x-6">
            <a
              href="https://cloudark.io/about"
              target="_blank"
              className="text-gray-400 hover:text-black transition-colors duration-300 font-funnel-display"
            >
              Documentation
            </a>
            <a
              href="https://cloudark.io"
              target="_blank"
              className="text-gray-400 hover:text-black transition-colors duration-300 font-funnel-display"
            >
              {/* hello */}
              Website
            </a>
            <a
              href="https://www.linkedin.com/company/cloudark"
              target="_blank"
              className="text-gray-400 hover:text-black transition-colors duration-300 font-funnel-display"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800 text-center">
          <p className="font-funnel-display text-gray-400">
            Built with ❤️ by CloudArk Committee
          </p>
        </div>
      </div>
    </footer>
  );
}
