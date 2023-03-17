import React, { useContext, useState, useMemo } from 'react';

interface SearchBarContextProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  show: boolean | undefined;
  setShow: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

export const Context = React.createContext<SearchBarContextProps>({
  query: '',
  setQuery: () => {},
  show: false,
  setShow: () => {},
});

interface SearchBarContextProviderProps {
  children: React.ReactNode;
}

export function SearchBarContextProvider({
  children,
}: SearchBarContextProviderProps) {
  const [show, setShow] = useState<boolean | undefined>();
  const [query, setQuery] = useState<string>('');

  const value = useMemo(
    () => ({
      show,
      setShow,
      query,
      setQuery,
    }),
    [show, setShow, query, setQuery]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export const useSearchBarQuery = () => {
  return useContext(Context);
};
