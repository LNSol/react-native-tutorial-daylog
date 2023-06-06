import React, {
  PropsWithChildren,
  createContext,
  useState,
  useContext,
} from 'react';
import {v4 as uuidv4} from 'uuid';

interface ILog {
  id?: string;
  title: string;
  body: string;
  date: Date;
}
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
  const [logs, setLogs] = useState<ILog[]>([]);

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
