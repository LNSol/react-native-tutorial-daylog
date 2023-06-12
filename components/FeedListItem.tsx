import {Platform, Pressable, StyleSheet, Text} from 'react-native';
import {format, formatDistanceToNow} from 'date-fns';
import {ko} from 'date-fns/locale';
import {ISavedLog} from '../contexts/LogContext';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackScreenParamList} from '../screens/RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainTabScreenParamList} from '../screens/MainTab';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

type ComposedNavigation = CompositeNavigationProp<
  BottomTabNavigationProp<MainTabScreenParamList, 'Feed'>,
  NativeStackNavigationProp<RootStackScreenParamList>
>;

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
  const navigation = useNavigation<ComposedNavigation>();
  const {title, body, date} = log;

  const goToWriteScreen = () => {
    navigation.navigate('Write', {log});
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.block,
        Platform.OS === 'ios' && pressed && {backgroundColor: '#f9f9f9'},
      ]}
      android_ripple={{color: '#f5f5f5'}}
      onPress={goToWriteScreen}>
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
