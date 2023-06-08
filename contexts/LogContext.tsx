import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import {v4 as uuidv4} from 'uuid';

export interface ILog {
  id?: string;
  title: string;
  body: string;
  date: string;
}
const DefaultLog = {
  id: 'test',
  title: '안녕하세요',
  body: '여기는 본문입니다. 하하',
  date: 'Thu Jun 08 2023 13:43:27 GMT+0900',
};
interface ILogContext {
  logs: ILog[];
  addLog: (log: ILog) => void;
}
const DefaultLogContext = {
  logs: [],
  addLog: () => {},
};

const LogContext = createContext<ILogContext>(DefaultLogContext);

const LogProvider = ({children}: PropsWithChildren) => {
  const [logs, setLogs] = useState<ILog[]>([DefaultLog]);

  const addLog = ({title, body, date}: ILog) => {
    const newLog = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs(prevLogs => [...prevLogs, newLog]);
  };

  return (
    <LogContext.Provider value={{logs, addLog}}>{children}</LogContext.Provider>
  );
};
const useLog = () => useContext(LogContext);

export {LogProvider, useLog};
