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
export const DefaultLog = {
  title: '',
  body: '',
  date: '',
};
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
  modifyLog: (modifiedLog: ISavedLog) => void;
  removeLog: (id: string) => void;
}

const DefaultLogContext = {
  logs: [],
  addLog: () => {},
  modifyLog: () => {},
  removeLog: () => {},
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

  const modifyLog = (modifiedLog: ISavedLog) => {
    const modifiedLogs = logs.map(log =>
      log.id === modifiedLog.id ? modifiedLog : log,
    );
    setLogs(modifiedLogs);
  };

  const removeLog = (id: string) => {
    const removedLogs = logs.filter(log => log.id !== id);
    setLogs(removedLogs);
  };

  return (
    <LogContext.Provider value={{logs, addLog, modifyLog, removeLog}}>
      {children}
    </LogContext.Provider>
  );
};
const useLog = () => useContext(LogContext);

export {LogProvider, useLog};
