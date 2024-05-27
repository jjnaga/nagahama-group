import { createContext, ReactNode, useState, useContext } from 'react';

interface ContextValues {
  headerHeight: number;
  setHeaderHeight: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = createContext<ContextValues | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const Provider: React.FC<Props> = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <AppContext.Provider value={{ headerHeight, setHeaderHeight }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) throw new Error('useContext must be used within Provider');

  return context;
};
