import React from 'react';

function ProductListPage() {
  // Add state for products and search bar here

  return (
    <div>
      <h2>Your Products</h2>
      <input type="text" placeholder="Search..." />
      <div>
        {/* Product list will be rendered here */}
        <p>No products yet...</p>
      </div>
    </div>
  );
}

export default ProductListPage;
