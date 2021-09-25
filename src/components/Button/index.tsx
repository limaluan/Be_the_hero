import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface buttonProp {
    children: ReactNode;
    onClick?: () => void;
}

export function Button({children}: buttonProp) {
    return(
        <ButtonStyled>{children}</ButtonStyled>
    );
}
