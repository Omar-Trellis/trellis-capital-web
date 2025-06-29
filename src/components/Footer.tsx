import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { TrellisLogo } from './TrellisLogo';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <TrellisLogo variant="dark" size="2xl" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Florida's leading fix and flip real estate investment company. 
              We help investors build wealth and homeowners sell quickly with fair, cash offers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors min-w-[44px] min-h-[44px]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors min-w-[44px] min-h-[44px]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors min-w-[44px] min-h-[44px]">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/investors" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  For Investors
                </Link>
              </li>
              <li>
                <Link to="/sellers" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  For Sellers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <a href="tel:1-800-873-5547" className="text-gray-400 hover:text-yellow-400 transition-colors">+1-305-894-6608</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <a href="mailto:info@trellisinvest.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  info@trellisinvest.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-yellow-400 mt-1" />
                <span className="text-gray-300">
                  123 Business Blvd, Suite 100<br />
                  Miami, FL 33101
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Trellis Capital Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;