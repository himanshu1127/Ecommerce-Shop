import React from 'react'
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ELITEMART
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premier destination for fashion-forward clothing. 
              We bring you the latest trends with uncompromising quality and style.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-200">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/About' },
                { name: 'Contact', path: '/Contact' },
                { name: 'Careers', path: '#' },
                { name: 'Press', path: '#' },
                { name: 'Blog', path: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="space-y-2">
              {['Contact Us', 'FAQ', 'Size Guide', 'Shipping Info', 'Returns'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-400 text-sm">help@elitemart.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span className="text-gray-400 text-sm">
                  123 Fashion Street<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-gray-800 mt-8">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-full">
              <Truck size={20} className="text-green-600" />
            </div>
            <div>
              <h5 className="font-semibold text-sm">Free Shipping</h5>
              <p className="text-gray-400 text-xs">On orders over $50</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <RotateCcw size={20} className="text-blue-600" />
            </div>
            <div>
              <h5 className="font-semibold text-sm">Easy Returns</h5>
              <p className="text-gray-400 text-xs">30-day return policy</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-full">
              <Shield size={20} className="text-purple-600" />
            </div>
            <div>
              <h5 className="font-semibold text-sm">Secure Payment</h5>
              <p className="text-gray-400 text-xs">256-bit SSL encryption</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-full">
              <CreditCard size={20} className="text-orange-600" />
            </div>
            <div>
              <h5 className="font-semibold text-sm">Multiple Payment</h5>
              <p className="text-gray-400 text-xs">All major cards accepted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 EliteMart. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
