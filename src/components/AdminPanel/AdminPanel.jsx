import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/logo.jpeg";

function Sidebar({ sidebarRef, setIsOpen, isOpen }) {
  return (
    <div
      ref={sidebarRef}
      className={`fixed z-40 h-screen rounded-lg md:fixed md:top-0 md:left-0 md:right-0 md:h-auto
      w-64 md:w-full bg-white shadow-md md:shadow-md md:flex md:items-center md:justify-between 
      md:px-6 md:py-4 transition-transform duration-300 ease-in-out transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4 md:p-0 md:space-x-6">
        <img className="h-10 w-auto" src={logo} alt="Logo" />

        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden text-gray-600 hover:text-black"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>

      <nav className="p-4 md:p-0">
        <ul className="space-y-4 md:space-y-0 md:flex md:space-x-8 md:items-center">
          <li className="text-gray-700 hover:text-blue-600">
            <Link to="manageproduct">Manage Product</Link>
          </li>
          <li className="text-gray-700 hover:text-blue-600">
            <Link to="orders">Orders</Link>
          </li>
          <li className="text-gray-700 hover:text-blue-600">
            <Link to="manageuser">User</Link>
          </li>
          <li className="text-gray-700 hover:text-red-500">
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

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

  return (
    <div className="flex h-screen">
      <Sidebar sidebarRef={sidebarRef} setIsOpen={setIsOpen} isOpen={isOpen} />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {!isOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      )}

      <div className="flex-1 overflow-y-auto p-6 md:pt-24">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPanel;