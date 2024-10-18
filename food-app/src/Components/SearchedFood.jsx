import React from "react";
import styled from "styled-components";

export default function SearchedFood({ data, url }) {
  return (
    <FoodContainer>
      <FoodCards>
        {data.map((food) => (
          <FoodCard key={food.name}>
            <img src={url + food.image} alt="" />
            <h1>{food.name}</h1>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodContainer>
  );
}
const FoodContainer = styled.div``;
const FoodCards = styled.div``;
const FoodCard = styled.div``;
