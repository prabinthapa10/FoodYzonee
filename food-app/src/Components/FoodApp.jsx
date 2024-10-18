import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchedFood from "./SearchedFood";

URL = "http://localhost:9000";

export default function FoodApp() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedType, setSelectedType] = useState([]);

  //   effect for the page
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  //   searched data process
  const searchedData = (e) => {
    const searchedValue = e.target.value;

    if (searchedValue === "") {
      setFilteredData();
    }

    const filter = data.filter((food) =>
      food.name.toLowerCase().includes(searchedValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  //   button on clicked process

  const filterType = (type) => {};

  return (
    <MainContainer>
      <TopContainer>
        <div>
          <img src="/logo.svg" alt="" />
          <input
            onChange={searchedData}
            type="text"
            placeholder="Search food..."
          />
        </div>
        <FilterContainer>
          <Button onClick={() => handleClick("all")}>All</Button>
          <Button onClick={() => handleClick("breakfast")}>BreakFast</Button>
          <Button onClick={() => handleClick("Lunch")}>Lunch</Button>
          <Button onClick={() => handleClick("Dinner")}>Dinner</Button>
        </FilterContainer>
      </TopContainer>
      <SearchedFood data={filteredData} url={URL} />
    </MainContainer>
  );
}
const MainContainer = styled.div``;
const TopContainer = styled.div``;
const FilterContainer = styled.div``;
const Button = styled.button``;
