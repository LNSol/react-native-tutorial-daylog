import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import {v4 as uuidv4} from 'uuid';

export interface IUnSavedLog {
  title: string;
  body: string;
  date: string;
}
export interface ISavedLog extends IUnSavedLog {
  id: string;
}
const DefaultLogs = Array.from({length: 10}, (_, idx) => ({
  id: uuidv4(),
  title: `Log ${idx + 1}`,
  body: `Log ${idx + 1}의 본문 내용`,
  date: new Date().toString(),
}));
interface ILogContext {
  logs: ISavedLog[];
  addLog: (log: IUnSavedLog) => void;
}
const DefaultLogContext = {
  logs: [],
  addLog: () => {},
};

const LogContext = createContext<ILogContext>(DefaultLogContext);

const LogProvider = ({children}: PropsWithChildren) => {
  const [logs, setLogs] = useState<ISavedLog[]>(DefaultLogs);

  const addLog = ({title, body, date}: IUnSavedLog) => {
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
