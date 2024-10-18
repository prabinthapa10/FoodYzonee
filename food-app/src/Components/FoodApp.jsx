import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchedFood from "./SearchedFood";

URL = "http://localhost:9000";

export default function FoodApp() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  //   effect for the page
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const json = await response.json();
      setData(json);
      setFilteredData(json);
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

  const handleClick = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedType("all");
      return;
    }

    const filterType = data.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filterType);
    setSelectedType(type);
  };

  return (
    <>
      <TopContainer>
        <Container>
          <img src="/logo.svg" alt="" />
          <input
            onChange={searchedData}
            type="text"
            placeholder="Search food..."
          />
        </Container>
        <FilterContainer>
          <Button onClick={() => handleClick("all")}>All</Button>
          <Button onClick={() => handleClick("breakfast")}>BreakFast</Button>
          <Button onClick={() => handleClick("Lunch")}>Lunch</Button>
          <Button onClick={() => handleClick("Dinner")}>Dinner</Button>
        </FilterContainer>
      </TopContainer>
      <SearchedFood data={filteredData} url={URL} />
    </>
  );
}

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #323234;
  height: 140px;
  gap: 30px;
  padding-top: 50px;
`;
const Container = styled.div`
  width: 1500px;
  display: flex;
  justify-content: space-around;
  input {
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  background-color: #945959;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #585050;
  }
`;
