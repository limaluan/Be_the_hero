import styled from "styled-components";

interface IButtonProps {
  isPrimary?: boolean;
}

export const Container = styled.button<IButtonProps>`
  width: 100%;
  padding: 20px 0;
  border-radius: 8px;
  border-style: none;
  transition: filter 0.1s;

  background-color: ${(props) =>
    props.isPrimary ? "var(--red)" : "var(--background)"};
  color: ${(props) =>
    props.isPrimary ? "var(--background)" : "var(--subtitle)"};
  border: ${(props) => (props.isPrimary ? "" : "4px solid var(--gray-light)")};

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
