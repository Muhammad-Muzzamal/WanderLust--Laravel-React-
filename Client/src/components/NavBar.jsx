import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 h-20 flex items-center justify-between">

        {/* 1. LEFT: Logo Section (Hidden on extra small mobile) */}
        <div className="hidden sm:flex items-center text-[#FF385C] cursor-pointer flex-1">
          <svg viewBox="0 0 32 32" className="h-8 w-8 fill-current">
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.636l-.28.02c-3.522 0-6.441-2.413-6.441-6.478 0-1.021.26-1.968.757-3.147l.198-.465c.982-2.288 5.148-11.011 7.104-14.846l.533-1.025c1.288-2.306 2.743-3.269 4.752-3.269zm0 2.107c-1.39 0-2.373.733-3.411 2.59l-.491.944c-1.921 3.763-6.076 12.456-7.056 14.74l-.195.456c-.431 1.02-.635 1.776-.635 2.62 0 2.92 2.052 4.414 4.499 4.414 1.782 0 3.864-1.123 5.864-3.155l.424-.436.425.436c2.001 2.032 4.083 3.155 5.864 3.155 2.446 0 4.5-1.494 4.5-4.414 0-.844-.204-1.6-.634-2.619l-.196-.457c-.98-2.284-5.135-10.977-7.056-14.741l-.491-.944c-1.037-1.857-2.02-2.59-3.411-2.59zm0 7.893a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5zm0 2.107a1.643 1.643 0 1 0 0 3.286 1.643 1.643 0 0 0 0-3.286z"></path>
          </svg>
          <span className="hidden lg:block ml-1 font-bold text-[22px] tracking-tight">airbnb</span>
        </div>

        {/* 2. MIDDLE: Search Bar (Full width on mobile, centered on desktop) */}
        <div className="flex-grow sm:flex-grow-0">
          <div className="flex items-center border border-gray-300 rounded-full py-2 pl-4 pr-2 shadow-sm hover:shadow-md transition cursor-pointer w-full sm:w-auto">
            <div className="flex items-center gap-3 pr-2 md:pr-4">
              <span className="text-sm md:text-lg">🏠</span>
              <span className="text-[12px] md:text-[14px] font-semibold text-gray-800 whitespace-nowrap">Anywhere</span>
            </div>

            <div className="w-[1px] h-4 md:h-6 bg-gray-200"></div>

            <button className="text-[12px] md:text-[14px] font-semibold text-gray-800 px-2 md:px-4 whitespace-nowrap">Anytime</button>

            <div className="w-[1px] h-4 md:h-6 bg-gray-200"></div>

            <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4">
              <button className="text-[12px] md:text-[14px] font-normal text-gray-500 whitespace-nowrap">Add guests</button>
              <div className="bg-[#FF385C] p-1.5 md:p-2.5 rounded-full text-white">
                <svg viewBox="0 0 32 32" className="h-3 w-3 fill-none stroke-current stroke-[4px]"><path d="m13 24c6.0751322 0 11-4.9248678 11-11s-4.9248678-11-11-11-11 4.9248678-11 11 4.9248678 11 11 11zm8-8 9 9"></path></svg>
              </div>
            </div>
          </div>
        </div>

        {/* 3. RIGHT: Profile Section (Separated) */}
        <div className="flex items-center justify-end flex-1 gap-1">
          {/* Hidden on small tablets and mobile */}
          <div className="hidden md:block text-[14px] font-semibold py-3 px-4 rounded-full hover:bg-gray-100 cursor-pointer transition">
            Become a host
          </div>

          <div className="hidden sm:block p-3 rounded-full hover:bg-gray-100 cursor-pointer transition">
            <svg viewBox="0 0 16 16" className="h-4 w-4 fill-gray-600"><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm0 1.5a6.25 6.25 0 0 0 -6.24 6.25c0 3.453 2.793 6.25 6.24 6.25 3.453 0 6.25-2.797 6.25-6.25s-2.797-6.25-6.25-6.25zm5.147 9.484a.75.75 0 0 1 1.06 1.061 5.25 5.25 0 0 1 -1.06-1.061zm-10.294 1.061a.75.75 0 0 1 1.06-1.06 5.25 5.25 0 0 1 -1.06 1.06zm7.294-8.195a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm-4.3 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm2.15 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
          </div>

          {/* Profile Button */}
          <div className="flex items-center gap-3 border border-gray-300 rounded-full py-1.5 px-2 hover:shadow-md transition cursor-pointer bg-white ml-2">
            <svg viewBox="0 0 32 32" className="h-4 w-4 fill-none stroke-gray-600 stroke-[3px] ml-1"><path d="m2 16h28m-28-10h28m-28 20h28"></path></svg>
            
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;