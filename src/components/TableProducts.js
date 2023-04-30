import React from "react";
import styled from "styled-components";

export const TableProducts = ({
  store,
  incrementProductHandler,
  decrementProductProductHandler,
  removeProductHandler,
}) => {
  const totalPrice = store.map((item) => {
    if (item.quantity === 0) {
      const result = { ...item, price: (item.price = 0) };
      return result.price;
    } else {
      return item.price;
    }
  });

  const resultTotal = totalPrice.reduce((a, b) => a + b, 0);

  return (
    <Container>
      <div>
        <Table>
          <Thead>
            <p className="id">#</p>
            <p>Product</p>
            <p>Product Name</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </Thead>
            <ol>
            {store.map((item) => {
              return (
                item.quantity !== 0 && 
                (
                  <li key={item.id}>
                    <Tbody>
                      <div className="itemId">{item.id}</div>
                      <TableImg >
                        <img src={item.url} alt={item.productName} />
                      </TableImg>
                      <div>{item.productName}</div>
                      <div>{item.price}$</div>

                      <CountContainer>
                        <CountBtn
                          onClick={() =>
                            decrementProductProductHandler(item.id)
                          }
                        >
                          -
                        </CountBtn>
                        <span>{item.quantity}</span>
                        <CountBtn
                          onClick={() => incrementProductHandler(item.id)}
                        >
                          +
                        </CountBtn>
                      </CountContainer>
                      <div>
                        <DeleteBtn
                          onClick={() => removeProductHandler(item.id)}
                        >
                          Remove
                        </DeleteBtn>
                      </div>
                    </Tbody>
                  </li>
                )
                );
              })}
              </ol>
        </Table>
        </div>
      <div className="totalBlock">
        <p style={{ fontSize: "2rem" }}>TOTAL: {resultTotal}$</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;  

  ol {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  li:nth-child(odd) {
    background-color: #ccad89;
  }

  li:nth-child(even) {
    background-color: #988fba;
    color: white;
  }

  .itemId {
    width: 50px;
  }

  .totalBlock {
    width: 80vw;
    display: flex;
    justify-content: flex-end;
  }
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Thead = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 1.6rem;
  font-weight: 600;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.259);
  background-color: #8caad4;
  padding-top: 20px;

   .id {
     width: 100px;
     display: flex;
     justify-content: center;
     margin-top: -10px;
   }

   p {
     width: 230px;
     height: 20px;
     display: flex;
     justify-content: center;
     margin-top: -10px;
   }
 `;

const TableImg = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 95px;
    height: 76px;
    object-fit: contain;
  }
`;

const Tbody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.259);

  .id {
    width: 100px;
    font-weight: 600;
    display: flex;
    justify-content: center;
  }

  div {
    width: 240px;
    display: flex;
    justify-content: center;
  }
`;


const CountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const CountBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: #19a1b7;
  color: #fff;
  border-radius: 4px;
  border: none;
`;

const DeleteBtn = styled.button`
  width: 180px;
  height: 60px;
  font: inherit;
  cursor: pointer;
  border: 1px solid rgba(255,255,0, 0.3);
  background-color: rgba(235,235,50, 0.6);
  color: black;
  border-radius: 12px;
  margin-right: 1rem;
  transition: all .2s linear;

  &:hover,
  &:active {
    border: 1px solid rgba(255, 0, 0, 0.3);
  background-color: rgba(235, 50, 50, 0.6);
  color: white;
  }
`;