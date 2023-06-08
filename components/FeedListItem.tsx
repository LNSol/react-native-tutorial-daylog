import {Platform, Pressable, StyleSheet, Text} from 'react-native';
import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';
import {ISavedLog} from '../contexts/LogContext';

const truncate = (text: string) => {
  const replaced = text.replace(/\n/g, '');
  return replaced.length < 100
    ? replaced
    : replaced.slice(0, 100).concat('...');
};

const formatDate = (date: string) => {
  const createdDate = new Date(date);
  const now = Date.now();
  const diff = (now - createdDate.getTime()) / 1000;

  if (diff < 60) {
    return '방금 전';
  } else if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(createdDate, {addSuffix: true, locale: ko});
  } else {
    return format(createdDate, 'PPP EEE p', {locale: ko});
  }
};

const FeedListItem = ({log}: {log: ISavedLog}) => {
  const {title, body, date} = log;

  console.log(formatDistanceToNow(new Date(), {addSuffix: true, locale: ko}));
  console.log(new Date().getTime());
  console.log(format(new Date(), 'PPP EEE p', {locale: ko}));

  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#f9f9f9'},
      ]}
      android_ripple={{color: '#f5f5f5'}}>
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 15,
  },
  date: {
    color: '#999',
    fontSize: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#111',
    marginVertical: 8,
  },
  body: {
    fontSize: 16,
    color: '#444',
    lineHeight: 21,
  },
});
export default FeedListItem;
