import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { AnimatePresence, motion } from "framer-motion";

const NavLinks = () => {
    return (
        <div className="flex">
            <span className="ml-3 mt-3">
            <FlyoutLink href="/#about" FlyoutContent={PricingContent} >
                About
            </FlyoutLink>
            </span>
            <span className="ml-3 mt-3"> {/* Apply margin to create space between Pricing and Contact */}
                <FlyoutLink href="/#services" FlyoutContent={ServiceContent} >
                    Service
                </FlyoutLink>
            </span>
            <span className="ml-3 mt-3"> {/* Apply margin to create space between Pricing and Contact */}
                <FlyoutLink href="/" FlyoutContent={PricingContent} >
                    Portfolio
                </FlyoutLink>
            </span>

            <span className="ml-3 mt-3"> {/* Apply margin to create space between Pricing and Contact */}
                <FlyoutLink href="/contact#contact" FlyoutContent={PricingContent} >
                    Contact Us
                </FlyoutLink>
            </span>

            <HashLink className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo#demo">
                Demo our products
            </HashLink>
        </div>
    );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);
  
    const showFlyout = FlyoutContent && open;
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative w-fit h-fit"
      >
        <a href={href} className="relative px-4 font-extrabold text-gray-500 hover:text-blue-900">
          {children}
          <span
            style={{
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-0 -right-0 h-1 origin-left scale-x-0 rounded-full bg-indigo-400 transition-transform duration-400 ease-out"
          />
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12 bg-white text-black"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  const PricingContent = () => {
    return (
      <div className="w-64 bg-white p-6 shadow-xl">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">For Individuals</h3>
          <a href="#" className="block text-sm hover:underline">
            Introduction
          </a>
          <a href="#" className="block text-sm hover:underline">
            Pay as you go
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">For Companies</h3>
          <a href="#" className="block text-sm hover:underline">
            Startups
          </a>
          <a href="#" className="block text-sm hover:underline">
            SMBs
          </a>
          <a href="#" className="block text-sm hover:underline">
            Enterprise
          </a>
        </div>
        <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
          Contact sales
        </button>
      </div>
    );
  };
  const ServiceContent = () => {
    return (
      <div className="w-64 bg-white p-6 shadow-xl">
        <div className="mb-3 space-y-3">
          <h4 className="font-semibold">Web Development</h4>
          <h4 className="font-semibold">App Development</h4>
          <h4 className="font-semibold">Education</h4>
         
        </div>

      </div>
    );
  };
export default NavLinks;
