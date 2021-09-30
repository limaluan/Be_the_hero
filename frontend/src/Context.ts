import { createContext } from "react";

interface userProps {
    id: number,
    name: string,
    email: string,
    phone: number,
    city: string,
    uf: string
}

interface casesProps {
    id: number;
    title: string;
    desc: string;
    value: number;
    date: number;
    ong_id: number;
}

interface CasesContextProps {
    user?: userProps;
    cases: casesProps[];
}

export const CasesContext = createContext<CasesContextProps>({} as CasesContextProps);


