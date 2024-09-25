// Shopping Cart
let cart = [];

// 1. Add Items to the Cart
const addItemToCart = (productId, productName, quantity, price) => {
  const product = {
    productId,
    productName,
    quantity,
    price
  };
  cart.push(product);
};

// 2. Remove and Update Items
// Remove item by product ID
const removeItemFromCart = (productId) => {
  const index = cart.findIndex(item => item.productId === productId);
  if (index !== -1) cart.splice(index, 1);
};

// Update item quantity by product ID
const updateItemQuantity = (productId, newQuantity) => {
  cart = cart.map(item => 
    item.productId === productId ? { ...item, quantity: newQuantity } : item
  );
};

// 3. Calculate Total Cost
const calculateTotalCost = () => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// 4. Display Cart Summary
const displayCartSummary = () => {
  return cart.map(item => ({
    productName: item.productName,
    quantity: item.quantity,
    totalPrice: item.price * item.quantity
  }));
};

// Filter out items with zero quantity
const filterZeroQuantityItems = () => {
  cart = cart.filter(item => item.quantity > 0);
};

// 5. Bonus: Apply Discount Code
const applyDiscountCode = (code) => {
  const discountCodes = {
    'SAVE10': 0.10,  // 10% discount
    'SAVE20': 0.20   // 20% discount
  };
  const discount = discountCodes[code] || 0;
  const totalCost = calculateTotalCost();
  return totalCost - (totalCost * discount);
};

// Example Usage
addItemToCart(1, 'Shoes', 2, 50);
addItemToCart(2, 'T-Shirt', 1, 30);
addItemToCart(3, 'Hat', 3, 20);

console.log("Cart Summary:", displayCartSummary());

updateItemQuantity(1, 3);  // Update shoes quantity to 3
removeItemFromCart(2);     // Remove T-shirt

console.log("Total Cost:", calculateTotalCost());

filterZeroQuantityItems();  // Remove items with zero quantity
console.log("Cart after filtering:", displayCartSummary());

console.log("Total after discount (SAVE10):", applyDiscountCode('SAVE10'));
