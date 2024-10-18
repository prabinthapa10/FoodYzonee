import React from "react";
import styled from "styled-components";

export default function SearchedFood({ data, url }) {
  return (
    <FoodContainer>
      <FoodCards>
        {data.map((food) => (
          <FoodCard key={food.name}>
            <img src={url + food.image} alt="" />
            <div>
              <h1>{food.name}</h1>
              <p>{food.text}</p>
              <button>{food.price}</button>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodContainer>
  );
}
const FoodContainer = styled.div`
  height: 100vh;
  background-image: url("/bg.png");
  display: flex;
`;
const FoodCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  flex-wrap: wrap;
`;
const FoodCard = styled.div`
  display: flex;
  div button {
    background-color: red;
  }
`;
