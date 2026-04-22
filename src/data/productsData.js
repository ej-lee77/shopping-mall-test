// export const productsData = [
//   // WOMEN
//   { id: 1, category: "women", subcategory: "상의", title: "Women's Casual T-Shirt", price: 29000, image: "/images/women/women1.jpg", description: "Comfortable cotton t-shirt for everyday wear." },
//   { id: 2, category: "women", subcategory: "상의", title: "Women's Slim Jeans", price: 59000, image: "/images/women/women2.jpg", description: "Stylish slim-fit jeans." },
//   { id: 3, category: "women", subcategory: "상의", title: "Women's Summer Dress", price: 79000, image: "/images/women/women3.jpg", description: "Lightweight summer dress." },
//   { id: 4, category: "women", subcategory: "상의", title: "Women's Hoodie", price: 69000, image: "/images/women/women4.jpg", description: "Warm and cozy hoodie." },
//   { id: 5, category: "women", subcategory: "상의", title: "Women's Jacket", price: 99000, image: "/images/women/women5.jpg", description: "Trendy outdoor jacket." },

//   { id: 6, category: "women", subcategory: "하의", title: "Women's Skirt", price: 49000, image: "/images/women/women6.jpg", description: "Elegant midi skirt." },
//   { id: 7, category: "women", subcategory: "하의", title: "Women's Blouse", price: 55000, image: "/images/women/women7.jpg", description: "Soft chiffon blouse." },
//   { id: 8, category: "women", subcategory: "하의", title: "Women's Cardigan", price: 62000, image: "/images/women/women8.jpg", description: "Light knit cardigan." },
//   { id: 9, category: "women", subcategory: "하의", title: "Women's Coat", price: 129000, image: "/images/women/women9.jpg", description: "Long winter coat." },
//   { id: 10, category: "women", subcategory: "하의", title: "Women's Shorts", price: 39000, image: "/images/women/women10.jpg", description: "Casual summer shorts." },

//   // MEN
//   { id: 11, category: "men", subcategory: "상의", title: "Men's T-Shirt", price: 25000, image: "/images/men/men1.jpg", description: "Basic cotton t-shirt." },
//   { id: 12, category: "men", subcategory: "상의", title: "Men's Jeans", price: 65000, image: "/images/men/men2.jpg", description: "Regular fit denim jeans." },
//   { id: 13, category: "men", subcategory: "상의", title: "Men's Shirt", price: 45000, image: "/images/men/men3.jpg", description: "Formal button-up shirt." },
//   { id: 14, category: "men", subcategory: "하의", title: "Men's Jacket", price: 110000, image: "/images/men/men4.jpg", description: "Windbreaker jacket." },
//   { id: 15, category: "men", subcategory: "하의", title: "Men's Hoodie", price: 70000, image: "/images/men/men5.jpg", description: "Comfortable hoodie." },

//   { id: 16, category: "men", subcategory: "상의", title: "Men's Shorts", price: 35000, image: "/images/men/men6.jpg", description: "Light summer shorts." },
//   { id: 17, category: "men", subcategory: "상의", title: "Men's Coat", price: 140000, image: "/images/men/men7.jpg", description: "Classic long coat." },
//   { id: 18, category: "men", subcategory: "상의", title: "Men's Sweater", price: 60000, image: "/images/men/men8.jpg", description: "Warm knit sweater." },
//   { id: 19, category: "men", subcategory: "상의", title: "Men's Suit", price: 220000, image: "/images/men/men9.jpg", description: "Formal business suit." },
//   { id: 20, category: "men", subcategory: "상의", title: "Men's Polo Shirt", price: 48000, image: "/images/men/men10.jpg", description: "Casual polo shirt." },

//   // JEWELERY
//   { id: 21, category: "jewelery", subcategory: "모자", title: "Gold Necklace", price: 199000, image: "/images/jewelery/jewelery1.jpg", description: "Elegant gold necklace." },
//   { id: 22, category: "jewelery", subcategory: "모자", title: "Silver Ring", price: 59000, image: "/images/jewelery/jewelery2.jpg", description: "Minimal silver ring." },
//   { id: 23, category: "jewelery", subcategory: "모자", title: "Diamond Earrings", price: 299000, image: "/images/jewelery/jewelery3.jpg", description: "Luxury diamond earrings." },
//   { id: 24, category: "jewelery", subcategory: "모자", title: "Bracelet", price: 79000, image: "/images/jewelery/jewelery4.jpg", description: "Stylish bracelet." },
//   { id: 25, category: "jewelery", subcategory: "모자", title: "Pendant", price: 89000, image: "/images/jewelery/jewelery5.jpg", description: "Simple pendant necklace." },

//   { id: 26, category: "jewelery", subcategory: "가방", title: "Pearl Necklace", price: 159000, image: "/images/jewelery/jewelery6.jpg", description: "Classic pearl necklace." },
//   { id: 27, category: "jewelery", subcategory: "가방", title: "Gold Ring", price: 129000, image: "/images/jewelery/jewelery7.jpg", description: "Premium gold ring." },
//   { id: 28, category: "jewelery", subcategory: "가방", title: "Anklet", price: 49000, image: "/images/jewelery/jewelery8.jpg", description: "Trendy anklet." },
//   { id: 29, category: "jewelery", subcategory: "가방", title: "Brooch", price: 69000, image: "/images/jewelery/jewelery9.jpg", description: "Elegant brooch." },
//   { id: 30, category: "jewelery", subcategory: "가방", title: "Charm Bracelet", price: 99000, image: "/images/jewelery/jewelery10.jpg", description: "Custom charm bracelet." },

//   // ELECTRONICS
//   { id: 31, category: "electronics", subcategory: "운동화", title: "Smartphone", price: 999000, image: "/images/electronics/electronics1.jpg", description: "Latest smartphone model." },
//   { id: 32, category: "electronics", subcategory: "운동화", title: "Laptop", price: 1599000, image: "/images/electronics/electronics2.jpg", description: "High performance laptop." },
//   { id: 33, category: "electronics", subcategory: "운동화", title: "Wireless Earbuds", price: 199000, image: "/images/electronics/electronics3.jpg", description: "Noise cancelling earbuds." },
//   { id: 34, category: "electronics", subcategory: "운동화", title: "Smartwatch", price: 299000, image: "/images/electronics/electronics4.jpg", description: "Fitness tracking smartwatch." },
//   { id: 35, category: "electronics", subcategory: "운동화", title: "Tablet", price: 699000, image: "/images/electronics/electronics5.jpg", description: "Portable tablet device." },

//   { id: 36, category: "electronics", subcategory: "샌들", title: "Bluetooth Speaker", price: 129000, image: "/images/electronics/electronics6.jpg", description: "Portable speaker." },
//   { id: 37, category: "electronics", subcategory: "샌들", title: "Monitor", price: 249000, image: "/images/electronics/electronics7.jpg", description: "Full HD monitor." },
//   { id: 38, category: "electronics", subcategory: "샌들", title: "Keyboard", price: 89000, image: "/images/electronics/electronics8.jpg", description: "Mechanical keyboard." },
//   { id: 39, category: "electronics", subcategory: "샌들", title: "Mouse", price: 49000, image: "/images/electronics/electronics9.jpg", description: "Wireless mouse." },
//   { id: 40, category: "electronics", subcategory: "샌들", title: "Camera", price: 899000, image: "/images/electronics/electronics10.jpg", description: "Digital camera." }
// ];
export const productsData = [
  // WOMEN
  { id: 1, category: "women", subcategory: "상의", title: "Women's Casual T-Shirt", price: 29000, image: "/images/women/women1.jpg", description: "Comfortable cotton t-shirt for everyday wear.", rating: 4 },
  { id: 2, category: "women", subcategory: "상의", title: "Women's Slim Jeans", price: 59000, image: "/images/women/women2.jpg", description: "Stylish slim-fit jeans.", rating: 5 },
  { id: 3, category: "women", subcategory: "상의", title: "Women's Summer Dress", price: 79000, image: "/images/women/women3.jpg", description: "Lightweight summer dress.", rating: 3 },
  { id: 4, category: "women", subcategory: "상의", title: "Women's Hoodie", price: 69000, image: "/images/women/women4.jpg", description: "Warm and cozy hoodie.", rating: 4 },
  { id: 5, category: "women", subcategory: "상의", title: "Women's Jacket", price: 99000, image: "/images/women/women5.jpg", description: "Trendy outdoor jacket.", rating: 5 },

  { id: 6, category: "women", subcategory: "하의", title: "Women's Skirt", price: 49000, image: "/images/women/women6.jpg", description: "Elegant midi skirt.", rating: 3 },
  { id: 7, category: "women", subcategory: "하의", title: "Women's Blouse", price: 55000, image: "/images/women/women7.jpg", description: "Soft chiffon blouse.", rating: 4 },
  { id: 8, category: "women", subcategory: "하의", title: "Women's Cardigan", price: 62000, image: "/images/women/women8.jpg", description: "Light knit cardigan.", rating: 2 },
  { id: 9, category: "women", subcategory: "하의", title: "Women's Coat", price: 129000, image: "/images/women/women9.jpg", description: "Long winter coat.", rating: 5 },
  { id: 10, category: "women", subcategory: "하의", title: "Women's Shorts", price: 39000, image: "/images/women/women10.jpg", description: "Casual summer shorts.", rating: 3 },

  // MEN
  { id: 11, category: "men", subcategory: "상의", title: "Men's T-Shirt", price: 25000, image: "/images/men/men1.jpg", description: "Basic cotton t-shirt.", rating: 4 },
  { id: 12, category: "men", subcategory: "상의", title: "Men's Jeans", price: 65000, image: "/images/men/men2.jpg", description: "Regular fit denim jeans.", rating: 5 },
  { id: 13, category: "men", subcategory: "상의", title: "Men's Shirt", price: 45000, image: "/images/men/men3.jpg", description: "Formal button-up shirt.", rating: 3 },
  { id: 14, category: "men", subcategory: "하의", title: "Men's Jacket", price: 110000, image: "/images/men/men4.jpg", description: "Windbreaker jacket.", rating: 4 },
  { id: 15, category: "men", subcategory: "하의", title: "Men's Hoodie", price: 70000, image: "/images/men/men5.jpg", description: "Comfortable hoodie.", rating: 4 },

  { id: 16, category: "men", subcategory: "상의", title: "Men's Shorts", price: 35000, image: "/images/men/men6.jpg", description: "Light summer shorts.", rating: 2 },
  { id: 17, category: "men", subcategory: "상의", title: "Men's Coat", price: 140000, image: "/images/men/men7.jpg", description: "Classic long coat.", rating: 5 },
  { id: 18, category: "men", subcategory: "상의", title: "Men's Sweater", price: 60000, image: "/images/men/men8.jpg", description: "Warm knit sweater.", rating: 3 },
  { id: 19, category: "men", subcategory: "상의", title: "Men's Suit", price: 220000, image: "/images/men/men9.jpg", description: "Formal business suit.", rating: 5 },
  { id: 20, category: "men", subcategory: "상의", title: "Men's Polo Shirt", price: 48000, image: "/images/men/men10.jpg", description: "Casual polo shirt.", rating: 4 },

  // JEWELERY
  { id: 21, category: "jewelery", subcategory: "모자", title: "Gold Necklace", price: 199000, image: "/images/jewelery/jewelery1.jpg", description: "Elegant gold necklace.", rating: 5 },
  { id: 22, category: "jewelery", subcategory: "모자", title: "Silver Ring", price: 59000, image: "/images/jewelery/jewelery2.jpg", description: "Minimal silver ring.", rating: 3 },
  { id: 23, category: "jewelery", subcategory: "모자", title: "Diamond Earrings", price: 299000, image: "/images/jewelery/jewelery3.jpg", description: "Luxury diamond earrings.", rating: 5 },
  { id: 24, category: "jewelery", subcategory: "모자", title: "Bracelet", price: 79000, image: "/images/jewelery/jewelery4.jpg", description: "Stylish bracelet.", rating: 4 },
  { id: 25, category: "jewelery", subcategory: "모자", title: "Pendant", price: 89000, image: "/images/jewelery/jewelery5.jpg", description: "Simple pendant necklace.", rating: 4 },

  { id: 26, category: "jewelery", subcategory: "가방", title: "Pearl Necklace", price: 159000, image: "/images/jewelery/jewelery6.jpg", description: "Classic pearl necklace.", rating: 5 },
  { id: 27, category: "jewelery", subcategory: "가방", title: "Gold Ring", price: 129000, image: "/images/jewelery/jewelery7.jpg", description: "Premium gold ring.", rating: 4 },
  { id: 28, category: "jewelery", subcategory: "가방", title: "Anklet", price: 49000, image: "/images/jewelery/jewelery8.jpg", description: "Trendy anklet.", rating: 3 },
  { id: 29, category: "jewelery", subcategory: "가방", title: "Brooch", price: 69000, image: "/images/jewelery/jewelery9.jpg", description: "Elegant brooch.", rating: 4 },
  { id: 30, category: "jewelery", subcategory: "가방", title: "Charm Bracelet", price: 99000, image: "/images/jewelery/jewelery10.jpg", description: "Custom charm bracelet.", rating: 5 },

  // ELECTRONICS
  { id: 31, category: "electronics", subcategory: "운동화", title: "Smartphone", price: 999000, image: "/images/electronics/electronics1.jpg", description: "Latest smartphone model.", rating: 5 },
  { id: 32, category: "electronics", subcategory: "운동화", title: "Laptop", price: 1599000, image: "/images/electronics/electronics2.jpg", description: "High performance laptop.", rating: 5 },
  { id: 33, category: "electronics", subcategory: "운동화", title: "Wireless Earbuds", price: 199000, image: "/images/electronics/electronics3.jpg", description: "Noise cancelling earbuds.", rating: 4 },
  { id: 34, category: "electronics", subcategory: "운동화", title: "Smartwatch", price: 299000, image: "/images/electronics/electronics4.jpg", description: "Fitness tracking smartwatch.", rating: 4 },
  { id: 35, category: "electronics", subcategory: "운동화", title: "Tablet", price: 699000, image: "/images/electronics/electronics5.jpg", description: "Portable tablet device.", rating: 4 },

  { id: 36, category: "electronics", subcategory: "샌들", title: "Bluetooth Speaker", price: 129000, image: "/images/electronics/electronics6.jpg", description: "Portable speaker.", rating: 3 },
  { id: 37, category: "electronics", subcategory: "샌들", title: "Monitor", price: 249000, image: "/images/electronics/electronics7.jpg", description: "Full HD monitor.", rating: 4 },
  { id: 38, category: "electronics", subcategory: "샌들", title: "Keyboard", price: 89000, image: "/images/electronics/electronics8.jpg", description: "Mechanical keyboard.", rating: 3 },
  { id: 39, category: "electronics", subcategory: "샌들", title: "Mouse", price: 49000, image: "/images/electronics/electronics9.jpg", description: "Wireless mouse.", rating: 3 },
  { id: 40, category: "electronics", subcategory: "샌들", title: "Camera", price: 899000, image: "/images/electronics/electronics10.jpg", description: "Digital camera.", rating: 5 }
];