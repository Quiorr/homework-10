import React from "react";
import styled from "styled-components";

export const Product = (props) => {
  return (
      <Container>
        <ProductList>{props.store.map((el) => {
          return <ProductItem key={el.id}>
            <ProductImg>
              <img src={el.url} alt="productPhotos" />
            </ProductImg>

            <ProductDataContainer>
              <ProductText>
                {el.productName} - {el.staticPrice}$
              </ProductText>

                <Button 
                  onClick={() => props.addProductHandler(el.id)}
                  disabled={el.quantity > 0}
                >
                  Add
                </Button>
            </ProductDataContainer>
          </ProductItem>
        })}
        </ProductList>
      </Container>
  );
};

const Container = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const ProductList = styled.ul`
width: 90vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ProductItem = styled.li`
  list-style: none;
  width: 250px;
  height: 350px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.259);
`;

const ProductImg = styled.div`
  width: 199px;
  height: 170px;
  border-bottom: 1px solid #dcdcdc;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProductDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 20px;
`;

const ProductText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0%;
`;

const Button = styled.button`
  font-size: 1.8rem;
  padding: 10px 36px;

  font: inherit;
  cursor: pointer;
  border: 1px solid rgba(255,255,0, 0.3);
  background-color: rgba(235,235,50, 0.6);
  color: black;
  border-radius: 12px;
  transition: all .2s linear;

  &:hover,
  &:active {
    background-color: rgba(56, 15, 151, 0.27);
    color: white;
    border: 1px solid rgba(63, 9, 190, 0.27)
  }

  :disabled {
    background-color: rgba(58, 49, 77, 0.196);
    color: rgb(0, 0, 0);
    border: 1px solid rgba(80, 71, 101, 0.21)
  }
`;