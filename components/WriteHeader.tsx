import React, {Dispatch, SetStateAction, useEffect, useReducer} from 'react';
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

interface IState {
  mode: 'date' | 'time' | undefined;
  visible: boolean;
}

type Action =
  | {type: 'OPEN'; payload: {mode: 'date' | 'time'}}
  | {type: 'CLOSE'};

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case 'OPEN':
      return {mode: action.payload.mode, visible: true};
    case 'CLOSE':
      return {mode: undefined, visible: false};
    default:
      throw new Error('Unhandled');
  }
};

const WriteHeader = ({
  save,
  goBack,
  remove,
  isEditing,
  date,
  setDate,
}: IWriteHeaderProps) => {
  const [datetimeState, dispatch] = useReducer(reducer, {
    mode: undefined,
    visible: false,
  });

  const open = (selectedMode: 'date' | 'time') =>
    dispatch({type: 'OPEN', payload: {mode: selectedMode}});

  const close = () => dispatch({type: 'CLOSE'});

  const changeDate = (selectedDate: Date) => {
    dispatch({type: 'CLOSE'});
    setDate(selectedDate);
  };

  useEffect(() => {
    console.log(datetimeState.visible);
  }, [datetimeState.visible]);

  return (
    <View style={styles.block}>
      <TransparentCircleButton
        name="arrow-back"
        color="#424242"
        onPress={goBack}
      />
      <View style={styles.datetime}>
        <Pressable onPress={() => open('date')}>
          <Text>{format(date, 'PPP', {locale: ko})}</Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={() => open('time')}>
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
        mode={datetimeState.mode}
        onConfirm={changeDate}
        onCancel={close}
        isVisible={datetimeState.visible}
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
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
  separator: {
    width: 8,
  },
});

export default WriteHeader;
