import { ReactNode } from "react";
import { Container } from "./styles";

interface IButtonProps {
  children: ReactNode;
  isPrimary?: boolean;
  width?: string;
}

export function Button({ children, isPrimary, width = "100%" }: IButtonProps) {
  return (
    <Container isPrimary={isPrimary} type="submit" style={{ width }}>
      <h3>{children}</h3>
    </Container>
  );
}
