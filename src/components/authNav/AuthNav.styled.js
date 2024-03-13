import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Links = styled(NavLink)`
  @media only screen and (max-width: 600px) {
    justify-content: space-around;
  }
  display: inline-block;
  text-decoration: none;
  margin-bottom: 6px;
  padding: 8px 16px;
  border-radius: 10px;
  font-weight: 700;
  color: black;

  &.active {
    color: #fff;
    background: linear-gradient(271deg,#90c9ad,#316d80,#363a3c);
  }
`;