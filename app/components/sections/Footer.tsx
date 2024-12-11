import React from "react";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12 relative z-10">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4 text-cyan-400">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-cyan-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-300">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-cyan-400">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-cyan-300">
                🌐
              </a>
              <a href="#" className="text-2xl hover:text-cyan-300">
                🤖
              </a>
              <a href="#" className="text-2xl hover:text-cyan-300">
                🚀
              </a>
            </div>
          </div>
          <div>
            <p className="text-gray-400">
              © 2024 Digital Learning Ecosystem. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }