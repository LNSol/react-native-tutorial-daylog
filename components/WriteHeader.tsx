import React, {Dispatch, SetStateAction, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import TransparentCircleButton from './TransparentCircleButton';
import DateTimePicker from 'react-native-modal-datetime-picker';

interface IWriteHeaderProps {
  isEditing: boolean;
  save: () => void;
  goBack: () => void;
  remove: () => void;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}

const WriteHeader = ({
  save,
  goBack,
  remove,
  isEditing,
  date,
  setDate,
}: IWriteHeaderProps) => {
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [visible, setVisible] = useState(false);

  const selectDateTime = (selectedDate: Date) => {
    setDate(selectedDate);
    setVisible(false);
  };

  const openSelectDateModal = (selectedMode: 'date' | 'time') => {
    setMode(selectedMode);
    setVisible(true);
  };

  return (
    <View style={styles.block}>
      <TransparentCircleButton
        name="arrow-back"
        color="#424242"
        onPress={goBack}
      />
      <View style={styles.datetime}>
        <Pressable onPress={() => openSelectDateModal('date')}>
          <Text>{format(date, 'PPP', {locale: ko})}</Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={() => openSelectDateModal('time')}>
          <Text>{format(date, 'p', {locale: ko})}</Text>
        </Pressable>
      </View>
      <View style={styles.buttons}>
        {isEditing && (
          <TransparentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight
            onPress={remove}
          />
        )}
        <TransparentCircleButton name="check" color="#009688" onPress={save} />
      </View>
      <DateTimePicker
        date={date}
        mode={mode}
        onConfirm={selectDateTime}
        onCancel={() => setVisible(false)}
        isVisible={visible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  datetime: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
  separator: {
    width: 8,
  },
});

export default WriteHeader;
