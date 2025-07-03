import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth < 768
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const Sidebar = () => (
    <div
      ref={sidebarRef}
      className={`fixed z-40 rounded-lg md:rounded-none
        md:static md:translate-x-0 top-0 left-0 h-full w-64 bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:block`}
    >
      <div className="flex items-center justify-between p-4 border-b md:justify-center md:pt-4">
        <span className="font-bold text-xl">Logo</span>
        {/* Close icon shown only on mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden text-gray-600 hover:text-black"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>

      <nav className="p-4">
        <ul className="space-y-4">
          <li><a href="/AddProducts" className="block text-gray-700 hover:text-blue-600">Manage Products</a></li>
          <li><a href="#" className="block text-gray-700 hover:text-blue-600">Orders</a></li>
          <li><a href="#" className="block text-gray-700 hover:text-blue-600">Manage User</a></li>
          <li><a href="#" className="block text-gray-700 hover:text-blue-600">Logout</a></li>
        </ul>
      </nav>
    </div>
  );

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Dark overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Hamburger menu button */}
      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      )}

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 pt-20 md:pt-6 overflow-auto w-full">
        <h1 className="text-3xl font-bold mb-4">Main Content</h1>
        <p>This is the main content area. Resize window to test responsiveness.</p>
      </div>
    </div>
  );
}

export default AdminPanel;
