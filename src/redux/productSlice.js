import { createSlice } from "@reduxjs/toolkit";
import product from "../data/product";

const initialState = {
    allProducts: product,
    category: "all",
    priceRange: [0, 1500],
    searchTerm: "",
    currentPage: 1,
    itemsPerPage: 4,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setCategory: (state, action) => { state.category = action.payload; state.currentPage = 1; },
        setPriceRange: (state, action) => { state.priceRange = action.payload; state.currentPage = 1; },
        setSearchTerm: (state, action) => { state.searchTerm = action.payload; state.currentPage = 1; },
        setCurrentPage: (state, action) => { state.currentPage = action.payload; }
    },
});

export const selectFilteredProducts = (state) => {
    const { allProducts, category, priceRange, searchTerm, currentPage, itemsPerPage } = state.product;
    const [min, max] = priceRange;
    const filtered = allProducts.filter((p) => {
        const matchCategory = category === "all" || p.category === category;
        const matchPrice = p.price >= min && p.price <= max;
        const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchPrice && matchSearch;
    });
    const start = (currentPage - 1) * itemsPerPage;
    return {
        items: filtered.slice(start, start + itemsPerPage),
        totalPages:Math.max(1,Math.ceil(filtered.length / itemsPerPage)),
    };
};
export const { setCategory, setPriceRange, setSearchTerm, setCurrentPage } = productSlice.actions;
export default productSlice.reducer;