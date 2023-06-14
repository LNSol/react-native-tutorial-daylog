import {useState} from 'react';
import {format} from 'date-fns';
import {useLog} from '../contexts/LogContext';
import CalendarView from '../components/CalendarView';
import FeedList from '../components/FeedList';

export interface IMarkedDates {
  [date: string]: {marked: boolean};
}

const CalendarScreen = () => {
  const {logs} = useLog();
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );

  const markedDates = logs.reduce((acc: IMarkedDates, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = {marked: true};
    return acc;
  }, {});

  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
};

export default CalendarScreen;
