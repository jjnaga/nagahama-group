import { createContext, ReactNode, useState, useContext } from 'react';
import { PossibleLanguages } from 'types/types';

interface ContextValues {
  headerHeight: number;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
  language: PossibleLanguages;
  setLanguage: React.Dispatch<React.SetStateAction<PossibleLanguages>>;
}

const AppContext = createContext<ContextValues | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const Provider: React.FC<Props> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [language, setLanguage] = useState<PossibleLanguages>('en');

  return (
    <AppContext.Provider
      value={{ headerHeight, setHeaderHeight, language, setLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) throw new Error('useContext must be used within Provider');

  return context;
};
