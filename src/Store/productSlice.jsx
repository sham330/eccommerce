// src/Store/productSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: "Elegant Diamond Ring",
    description: "A stunning diamond ring to complement your look.",
    price: 299,
    images: ["https://media.istockphoto.com/id/1201985365/photo/custom-promise-infinity-rings-for-her-personalized-engagement-rings.jpg?s=1024x1024&w=is&k=20&c=3iCz7NIn2KobZofhDJ4CGmMbij6RvzptlRKtQGut_b4=","https://media.istockphoto.com/id/961789254/photo/emerald-and-diamond-earrings.jpg?s=1024x1024&w=is&k=20&c=Tn1OriPbb0CHaB-_TweiGDEJXksRcC_DoNc_18NEDMc="],
    special: false,
    rating: 4.8,
    category: "Rings", // Added category
  },
  {
    id: 2,
    name: "Gold Bracelet",
    description: "Beautifully crafted with 24k gold.",
    price: 399,
    images: ["https://media.grtjewels.com/catalog/product/cache/247e1f07978143b834843cfd80a1aa2a/1/3/135a979656_base_2.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLRjbxosFaEhEtkdbMvIGc2EnEsV5lYi1bluYvJTbiJHks5GVtMaAXj3-62pneXwezAFU&usqp=CAU"],
    special: false,
    rating: 4.2,
    category: "Bracelets", // Added category
  },
  {
    id: 3,
    name: "Silver Necklace",
    description: "Modern silver necklace for every occasion.",
    price: 199,
    images: ["https://i.etsystatic.com/9898887/r/il/2b216f/2344682312/il_fullxfull.2344682312_bedr.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvM7c03RYRqrOZKj6RDVTWgpz5Sr0YKd0qHqeOFRsjphMer_UeQHykcSxWlfGY5nJGl4&usqp=CAU"],
    special: false,
    rating: 4.5,
    category: "Necklaces", // Added category
  },
  {
    id: 4,
    name: 'Limited Edition Ring - Midnight Blue',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ieVac_pFlRsOQIaCjUB3pEW3IF3w8k34Rr21VnBWcO8Kib6FbMfhf2WuUD0Gp35pbc0&usqp=CAU', 'https://i.etsystatic.com/31198883/r/il/1c1448/4253698519/il_fullxfull.4253698519_nzlj.jpg'],
    description: "Modern silver necklace for every occasion.",
    story: 'The Midnight Blue edition represents elegance and sophistication.',
    category: 'Rings', // Added category
    price: 299.99,
    special: true,
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Limited Edition Bracelet - Golden Dawn',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTINS9OoZV0Dp2BxFCNdCviOy3D17GkUikSKw&s', 'https://kinclimg8.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BIPO0671V01-POSTER-50047.jpg'],
    description: "Modern silver necklace for every occasion.",
    story: 'Inspired by the beauty of a sunrise, the Golden Dawn bracelet.',
    category: 'Bracelets', // Added category
    price: 199.99,
    special: true,
    rating: 3.8,
  },
  {
    id: 6,
    name: 'Limited Edition Necklace - Silver Moon',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGjsDpxYYBm1osYaXDsmfAoeqN9S-nY23VA&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-yxa_pjmdMmaUml0wRnZ7Skx0ldrRNWit-8Ox4Xw2XLfxCz28ICUF12GarsBy8FdWSs&usqp=CAU'],
    description: "Modern silver necklace for every occasion.",
    story: 'The Silver Moon necklace reflects the calmness and serenity of moonlight.',
    category: 'Necklaces', // Added category
    price: 149.99,
    special: true,
    rating: 4.1,
  },
  // Add more products with categories
  {
    id: 7,
    name: "Rose Gold Ring",
    description: "An exquisite rose gold ring adorned with intricate designs.",
    price: 350,
    images: ["https://assets.ajio.com/medias/sys_master/root/20230620/6DXa/649210e2d55b7d0c637f4fa7/-473Wx593H-463129334-pink-MODEL.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjmCAoxVFXRazb9Dzob5s69yHzkGekBTsF0SGUOCQa-fOSpsK_LMvKBSZ-eTQEi8zWgc&usqp=CAU"],
    special: false,
    rating: 4.6,
    category: "Rings", // Added category
  },
  {
    id: 8,
    name: "Classic Pearl Earrings",
    description: "Timeless pearl earrings for every elegant occasion.",
    price: 120,
    images: ["https://m.media-amazon.com/images/I/7103p73TPBL._AC_UY1000_.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiA6PJRXm5xbBRq8CfPkpXkOaYPqBF1tASNA&s"],
    special: false,
    rating: 4.4,
    category: "Earrings", // Added category
  },
  {
    id: 9,
    name: "Titanium Bracelet",
    description: "Stylish titanium bracelet with a modern touch.",
    price: 199,
    images: ["https://m.media-amazon.com/images/I/716VjpcAs6L._AC_UY1000_.jpg","https://m.media-amazon.com/images/I/71WwUvVeUbL._AC_UY350_.jpg"],
    special: false,
    rating: 4.0,
    category: "Bracelets", // Added category
  },
  {
    id: 10,
    name: "Vintage Brooch",
    description: "A stunning vintage brooch that adds a classic touch.",
    price: 250,
    image: ["https://unboxkar.in/cdn/shop/files/butterfly-brooch-ubk1684-856175_800x.jpg?v=1731932986",],
    special: false,
    rating: 4.7,
    category: "Brooches", // Added category
  },
];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

// Selector for all products
export const selectAllProducts = (state) => state.products;

// Selector for special products sorted by rating
export const selectSpecialProductsByRating = (state) =>
    state.products
      .filter(product => product.special)
      .sort((a, b) => b.rating - a.rating);

// Selector for special products
export const selectSpecialProducts = (state) => state.products.filter(product => product.special);

export default productSlice.reducer;
