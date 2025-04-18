import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="" />
          <p className="text-gray-600 w-full md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            assumenda necessitatibus eum officiis molestias, placeat cumque
            perferendis repudiandae at minima?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>+1-000-000-0000</li>
              <li>demo@gmail.com</li>
              <li className="cursor-pointer">Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright {currentYear}&copy; - All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
