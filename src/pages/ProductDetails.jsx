// ProductDetails.jsx - Displays details for a single product
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiArrowLeft, FiHeart, FiShoppingCart, FiStar } from "react-icons/fi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

export const ProductDetails = () => {
  // Get product from navigation state or fetch by id
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(state?.product || null);

  // Add to cart handler
  const addToCart = () => {
    toast("Added to Cart!");
  };

  // Fetch product details if not provided in state
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!product) {
          const response = await fetch(`/products/${id}`);
          const data = await response.json();
          setProduct(data);
        }
      } catch (error) {
        toast.error("Failed to fetch");
      }
    };

    fetchProduct();
  }, [id, product]);

  return (
    <StyledDetailsPage>
      {/* Back button to product list */}
      <BackButton onClick={() => navigate(-1)}>
        <FiArrowLeft />
        Back to Products
      </BackButton>

      {/* Product details layout */}
      <StyledDetails>
        <ImageWrappper>
          <ProductImage src={product.image} alt={product.name} />
        </ImageWrappper>

        <DetailsBody>
          <Category>{product.category}</Category>
          <Name>{product.name}</Name>
          <Rating>
            <Star>
              <FiStar fill="gold" color="yellow" />
              <FiStar fill="gold" color="yellow" />
              <FiStar fill="gold" color="yellow" />
              <FiStar fill="gold" color="yellow" />
              <FiStar fill="gold" color="yellow" />
            </Star>
            <p>({product.rating}/5)</p>
          </Rating>
          <Price>
            <SellingPrice>₹{product.price}</SellingPrice>
            {product.originalPrice && <OriginalPrice>₹{product.originalPrice}</OriginalPrice>}
          </Price>
          <Description>{product.description}</Description>
          <Availability>
            Availability: <InStock>{product.inStock ? "In Stock" : "Out of Stock"}</InStock>
          </Availability>

          <hr />

          <CartButton onClick={addToCart}>
            <FiShoppingCart /> Add to Cart
          </CartButton>
          <Wishlist>
            <FiHeart /> Add to Wishlist
          </Wishlist>

          <ProductFeatures>
            <FeatureText>Product Features</FeatureText>
            <ul>
              {product.features.map((feature, index) => (
                <Features key={index}>{feature}</Features>
              ))}
            </ul>
          </ProductFeatures>
        </DetailsBody>
      </StyledDetails>
    </StyledDetailsPage>
  );
};

const StyledDetailsPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BackButton = styled.button`
  padding-block: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
  cursor: pointer;
  color: ${({ theme }) => theme.tertiary};
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

const ImageWrappper = styled.div`
  margin-top: 32px;
  aspect-ratio: 1/1;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.tertiary};
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  color: ${({ theme }) => theme.primary};
`;

const StyledDetails = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
`;

const DetailsBody = styled.div`
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Category = styled.p`
  width: fit-content;
  font-size: 12px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  padding: 2px 8px;
`;

const Name = styled.h3`
  font-size: 30px;
  font-weight: 700;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.tertiary};
`;
const Star = styled.div`
  font-size: 14px;
`;

const Price = styled.div`
  margin-top: 16px;
  height: 33px;
  display: flex;
  align-items: center;
`;

const SellingPrice = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

const OriginalPrice = styled.p`
  color: ${({ theme }) => theme.tertiary};
  text-decoration: line-through;
  margin-left: 8px;
  font-size: 20px;
`;

const Description = styled.p`
  margin-top: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.tertiary};
`;

const Availability = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  display: flex;
  gap: 4px;
`;

const InStock = styled.div`
  margin-left: 4px;
  width: fit-content;
  font-size: 12px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  padding: 2px 8px;
`;

const CartButton = styled.button`
  margin-top: 24px;
  text-align: center;
  width: calc(100% -32px);
  padding: 12px;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.secondary};
`;

const Wishlist = styled.button`
  margin-top: 16px;
  text-align: center;
  width: calc(100% -36px);
  padding: 12px;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.secondary};
`;

const ProductFeatures = styled.div`
  margin-top: 16px;
  padding: 16px;
  border: 2px solid ${({ theme }) => theme.secondary};
`;

const FeatureText = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 700;
`;

const Features = styled.li`
  font-size: 14px;
  margin-left: 16px;
  margin-top: 2px;
  color: ${({ theme }) => theme.tertiary};
`;
