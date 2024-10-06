import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-primary mb-2">ESG Helper</h3>
            <p className="text-sm">Empowering sustainable decision-making with AI</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/product" className="hover:text-primary transition-colors">Product</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-sm">Email: info@esghelper.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>&copy; 2023 ESG Helper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;