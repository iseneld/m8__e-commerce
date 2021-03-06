import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <Link to="/pay1">Select Payment</Link> {" > "} 
      <Link to="/pay2">Payment Information</Link> {" > "} 
      <Link to="/pay3">Order Confirmation</Link>
    </nav>
  )
}

export default Breadcrumb;