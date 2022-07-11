import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import logo from "../../public/logo.svg";

function Header() {
  return (
    <div className='bg-soft-red p-5 rounded-2xl text-very-pale-orange flex justify-between'>
      <div>
        <h1>My balance</h1>
        <p className="text-2xl font-bold">$921.48</p>
      </div>
      <Image src={logo} alt='logo' />
    </div>
  );
}

Header.propTypes = {};

export default Header;
