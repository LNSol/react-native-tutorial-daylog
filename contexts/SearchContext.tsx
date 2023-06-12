import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface ISearchContext {
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
}
const DefaultSearchContext = {
  keyword: '',
  setKeyword: () => {},
};

const SearchContext = createContext<ISearchContext>(DefaultSearchContext);

const SearchProvider = ({children}: PropsWithChildren) => {
  const [keyword, setKeyword] = useState('');

  return (
    <SearchContext.Provider value={{keyword, setKeyword}}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);

export {SearchProvider, useSearch};
