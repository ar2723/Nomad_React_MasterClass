import styled from "styled-components";

export const Container = styled.div`
    max-width: 480px;
    margin: 0 auto;
`;

export const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CoinList = styled.ul`
    
`;

export const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

export const Coin = styled.li`
    background-color: white;
    color:${props => props.theme.textColor};
    
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        padding: 20px;
        transition: color 0.2s ease-in;
        display: block;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor};
        }
    }
`;

export const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`;

export const Loader = styled.span`
    text-align: center;
    display: block;
`;
export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #D0FCB3;
  padding: 10px 20px;
  border-radius: 10px;
`;
export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 33%;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
export const Description = styled.p`
  margin: 20px 0px;
`;

export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

export const Tab = styled.span<{ $isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: #D0FCB3;
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.$isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    padding: 7px 0px;
    display: block;
  }
`;

export const ReturnBtn = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px;
    a {
        background-color: #D0FCB3;
        border-radius: 10px;
        width: 30%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`