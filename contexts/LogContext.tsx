import React, {
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';

interface ILogContext {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

const LogContext = createContext<ILogContext>({text: '', setText: () => {}});

function LogProvider({children}: PropsWithChildren) {
  const [text, setText] = useState('안녕하세요');

  return (
    <LogContext.Provider value={{text, setText}}>
      {children}
    </LogContext.Provider>
  );
}
const useLog = () => useContext(LogContext);

export {LogProvider, useLog};
