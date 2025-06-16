// Home.jsx - Product catalog home page with search and filter
import styled from "styled-components";
import { ProductCard } from "../components/ProductCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiChevronDown, FiFilter, FiSearch } from "react-icons/fi";

export const Home = () => {
  // State for loading, products, search, and category filter
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch products from public/products.json on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Extract unique categories from products
  const categories = [...new Set(products.map((product) => product.category))];

  // Filter products by category and search query
  const filteredProducts = products.filter((p) => (selectedCategory ? p.category === selectedCategory : true)).filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      {/* Page title */}
      <HomeText>Discover our amazing collection of products</HomeText>

      {/* Search and filter controls */}
      <SearchAndFilter>
        <SearchContainer>
          <SearchInput type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <SearchIcon>
            <FiSearch />
          </SearchIcon>
        </SearchContainer>

        <FilterContainer>
          <FilterCategory value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </FilterCategory>
          <FilterIcons>
            <FiFilter />
            <FiChevronDown />
          </FilterIcons>
        </FilterContainer>
      </SearchAndFilter>

      {/* Product listing grid */}
      <ProductListing>
        {loading && "Loading..."}
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductListing>
    </div>
  );
};

const HomeText = styled.p`
  color: ${({ theme }) => theme.tertiary};
`;

const SearchAndFilter = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 3.125vw, 32px);
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  /* min-width: 250px; */
`;

const SearchInput = styled.input`
  width: calc(100% - 44px);
  padding: 8px 8px 8px 32px;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.secondary};
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.secondary};
  pointer-events: none;
`;

const FilterContainer = styled.div`
  position: relative;
  min-width: 25%;
`;

const FilterCategory = styled.select`
  width: calc(100% - 68px);
  padding: 8px 32px;
  font-size: 16px;
  background: ${({ theme }) => theme.primary};
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.secondary};
`;

const FilterIcons = styled.div`
  position: absolute;
  padding: 8px;
  top: 5%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.secondary};
  pointer-events: none;
`;

const ProductListing = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 217px), 1fr));
  gap: clamp(16px, 3.125vw, 32px);
`;
