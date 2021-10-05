import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface userProps {
    id: number,
    name: string,
    email: string,
    phone: number,
    city: string,
    uf: string
}

interface casesProps {
    id?: number;
    title: string;
    desc: string;
    value: number;
    date: number;
    ong_id: number;
}

interface CasesContextProps {
    user?: userProps;
    cases: casesProps[];
    createCase: (CaseInput: casesProps) => Promise<void>;
}

interface ContextProviderProps {
    children: ReactNode;
}

export const CasesContext = createContext<CasesContextProps>({} as CasesContextProps);

export function CasesContextProvider({ children }: ContextProviderProps) {
    const [user, setUser] = useState<userProps>();
    const [cases, setCases] = useState<casesProps[]>([]);

    useEffect(() => {
        api.get('/ongs')
            .then((res) => setUser(res.data.users[0]));

        api.get('/cases')
            .then(res => setCases(res.data.cases));
    }, [])

    async function createCase(caseInput: casesProps) {
        await api.post('/cases', caseInput);

        await api.get('/cases')
            .then(res => setCases(res.data.cases));
    }

    return (
        <CasesContext.Provider value={{ user, cases, createCase }}>
            {children}
        </CasesContext.Provider>
    );
}

export function useCases() {
    const context = useContext(CasesContext);

    return context;
}
