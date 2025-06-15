import toast from "react-hot-toast";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const ProductCard = ({ product }) => {
  const { category, description, id, image, inStock, name, originalPrice, price, rating } = product;

  const addToCart = () => {
    toast("Added to Cart!");
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${id}`, { state: { product } });
  };

  return (
    <StyledCard>
      <ImageWrappper>
        <CardImage onClick={handleNavigate} src={image} alt={name} />
      </ImageWrappper>
      <CardBody>
        <BrandAndRating>
          <Category>{category}</Category>
          <Rating>
            <FiStar fill="gold" color="yellow" /> {rating}
          </Rating>
        </BrandAndRating>
        <Name onClick={handleNavigate}>{name}</Name>
        <Description>{description}</Description>
        <Price>
          <SellingPrice>₹{price}</SellingPrice>
          {originalPrice && <OriginalPrice>₹{originalPrice}</OriginalPrice>}
        </Price>
        <CartBtn onClick={addToCart}>
          <FiShoppingCart /> <span>Add</span>
        </CartBtn>
      </CardBody>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.secondary};
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

const ImageWrappper = styled.div`
  aspect-ratio: 1/1;
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.tertiary};
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  color: ${({ theme }) => theme.primary};
`;

const CartBtn = styled.button`
  padding: 8px 16px;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.secondary};
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: fit-content;
`;

const Price = styled.div`
  position: absolute;
  bottom: 8px;
  height: 36px;
  display: flex;
  align-items: center;
`;
const OriginalPrice = styled.p`
  color: ${({ theme }) => theme.tertiary};
  text-decoration: line-through;
  margin-left: 8px;
  font-size: 14px;
`;
const SellingPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const Description = styled.p`
  height: 40px;
  font-size: 12px;
  color: ${({ theme }) => theme.tertiary};
`;

const Name = styled.h3`
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const Rating = styled.p`
  margin-right: 8px;
  font-size: 10px;
`;

const Category = styled.p`
  width: fit-content;
  font-size: 12px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  padding: 2px 8px;
`;

const BrandAndRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  margin-bottom: 54px;
`;
