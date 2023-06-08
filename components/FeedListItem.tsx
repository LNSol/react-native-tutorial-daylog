import {Platform, Pressable, StyleSheet, Text} from 'react-native';
import {ISavedLog} from '../contexts/LogContext';

const truncate = (text: string) => {
  const replaced = text.replace(/\n/g, '');
  return replaced.length < 100
    ? replaced
    : replaced.slice(0, 100).concat('...');
};

const FeedListItem = ({log}: {log: ISavedLog}) => {
  const {title, body, date} = log;

  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#f9f9f9'},
      ]}
      android_ripple={{color: '#f5f5f5'}}>
      <Text style={styles.date}>{date}</Text>
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
