import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 0.5vw 0.5vw;
  min-width: 780px;
  max-width: 780px;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  display: block;
  font-size: 1.1rem;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  text-align: center;
  font-family: Roboto;
  font-weight: 700;
`;

export const SelectWrapper = styled.div`
  margin: 0.5vw 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  text-align: center;
  margin-top: 0.5vw;
`;
export const SpinnerWrapper = styled.div`
  position: absolute;
  left: 49%;
  top: 25%
`;

