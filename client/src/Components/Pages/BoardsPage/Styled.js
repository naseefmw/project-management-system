import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  background-position: 50%;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Title = styled.h1`
  cursor: default;
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  width: 100vw;
  margin-bottom: 1rem;
  color: black;
  user-select: none;
`;

export const Wrapper = styled.div`
  margin-top: 3.1rem;
  width: 100%;
  height: calc(100vh - 3.1rem);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: auto;
`;

export const Board = styled.div`
  color: white;
  padding: 33px 0;
  text-align: center;
  font-size: 1rem;
  margin: 0 0.8rem 1rem 0.8rem;
  width: 200px;
  height: 92px;
  border-radius: 2px;
  ${(props) =>
    props.isImage
      ? "background-image: url(" + props.link + ");"
      : "background-color: " + props.link + ";"}

  background-position: center center;
  background-size: cover;
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  opacity: 88%;
  cursor: pointer;
  will-change: opacity;
  transition: opacity 450ms;
  &:hover {
    opacity: 100%;
    transition: opacity 150ms;
    font-weight: 600;
  }
`;

export const AddBoard = styled(Board)`
  background-color: #4a148c;
  font-size: 1rem;
  transition: 1.5s;
  opacity: 35%;
  background-size: 200% auto;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    background-position: right center;
    color: #fff;
    transition: 400ms ease-in;
  }
`;
