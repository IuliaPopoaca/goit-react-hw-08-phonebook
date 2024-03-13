import styled from 'styled-components';

export const ContactItems = styled.li`
  align-items: center;
  background-color: transparent;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3px;
  gap: 10px;
`;

export const ContactName = styled.span`
  color: black;
  font-weight: bold;
`;

export const ContactNumber = styled.a`
  color: black;
  font-weight: bold;
  cursor: pointer;

  &&:hover {
    text-decoration: underline;
  }
`;

export const EditButton = styled.button`
  background: linear-gradient(271deg,#90c9ad,#316d80,#25caaf,#5a847d);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  &&:hover {
    background: linear-gradient(271deg,#90c9ad,#316d80,#25caaf,#5a847d);
  }
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  @media only screen and (max-width: 600px) {
    margin-right: 10px;
  }
  background: linear-gradient(271deg,#90c9ad,#316d80,#363a3c);
  border-radius: 4px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  padding: 8px 16px;
  text-align: center;
  &&:hover {
    background: linear-gradient(271deg,#90c9ad,#316d80,#363a3c);
  }
`;