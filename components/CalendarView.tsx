import {Calendar} from 'react-native-calendars';
import {IMarkedDates} from '../screens/CalendarScreen';
import {Dispatch, SetStateAction} from 'react';

interface ICalendarViewProps {
  markedDates: IMarkedDates;
  selectedDate: string;
  onSelectDate: Dispatch<SetStateAction<string>>;
}

const CalendarView = ({
  markedDates,
  selectedDate,
  onSelectDate,
}: ICalendarViewProps) => {
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  console.log(JSON.stringify(markedSelectedDates, null, 2));

  return (
    <Calendar
      markedDates={markedSelectedDates}
      theme={{
        arrowColor: '#504aed',
        selectedDayBackgroundColor: '#504aed',
        selectedDayTextColor: '#fff',
        selectedDotColor: '#fff',
        todayTextColor: '#504aed',
        textDisabledColor: '#dce2ec',
        dotColor: '#504aed',
      }}
      onDayPress={day => onSelectDate(day.dateString)}
    />
  );
};
export default CalendarView;
