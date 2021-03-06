import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = ({ children, toggler }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <h5 className="text-2xl font-normal mt-0 mb-0 ">{children}</h5>
      <button
        className="p-1 bg-transparent absolute top-2 right-4 text-black text-3xl leading-none outline-none focus:outline-none"
        onClick={toggler}
      >
        <span className="text-black text-3xl block">&times;</span>
      </button>
    </div>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.node,
  toggler: PropTypes.func,
};

export default ModalHeader;