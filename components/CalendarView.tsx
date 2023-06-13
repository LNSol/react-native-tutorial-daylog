import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {IMarkedDates} from '../screens/CalendarScreen';
import {Dispatch, SetStateAction} from 'react';

interface ICalendarViewProps {
  selectedDate: string;
  markedDates: IMarkedDates;
  onSelectDate: Dispatch<SetStateAction<string>>;
}

const CalendarView = ({
  selectedDate,
  markedDates,
  onSelectDate,
}: ICalendarViewProps) => {
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDates}
      theme={{
        selectedDayBackgroundColor: '#504aed',
        arrowColor: '#504aed',
        dotColor: '#504aed',
        calendarBackground: '#fff',
        textSectionTitleColor: '#000',
        selectedDayTextColor: '#fff',
        todayTextColor: '#504aed',
        dayTextColor: '#000',
        textDisabledColor: '#8292aa',
      }}
      onDayPress={day => onSelectDate(day.dateString)}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#dce2ec',
  },
});
export default CalendarView;
