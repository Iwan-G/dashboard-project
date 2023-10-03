import React from "react";
import styled from "styled-components";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyles } from "./ReusableStyles"; // Import your cardStyles

export default function Analytics() {
  return (
    <Section>
      <Analytic>
        <Content>
          <h5>Spent this month</h5>
          <h2>7800.50 RM</h2>
        </Content>
        <Logo>
          <BsFillCalendar2WeekFill />
        </Logo>
      </Analytic>
      <Analytic>
        <Logo>
          <IoStatsChart />
        </Logo>
        <Content>
          <h5>Earnings</h5>
          <h2>6500.40 RM</h2>
        </Content>
      </Analytic>
      <Analytic>
        <Logo>
          <BiGroup />
        </Logo>
        <Content>
          <h5>New clients</h5>
          <h2>321</h2>
        </Content>
      </Analytic>
      <Analytic>
        <Content>
          <h5>Activity</h5>
          <h2>700.50 RM</h2>
        </Content>
        <Logo>
          <FiActivity />
        </Logo>
      </Analytic>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Analytic = styled.div`
  ${cardStyles};
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #ffc107;
    color: black;
  }
`;

const Logo = styled.div`
  background-color: black;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  svg {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
h2 {
  font-size: 16px;
}
`;
