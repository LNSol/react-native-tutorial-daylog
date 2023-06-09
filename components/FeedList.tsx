import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from 'react-native';
import {ISavedLog} from '../contexts/LogContext';
import FeedListItem from './FeedListItem';

interface IFeedListProps {
  logs: ISavedLog[];
  onScrolledToBottom: (isBottom: boolean) => void;
}

const ItemSeparator = () => <View style={styles.separator} />;

const FeedList = ({logs, onScrolledToBottom}: IFeedListProps) => {
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    // console.log('contentSize > ', contentSize);
    // console.log('layoutMeasurement > ', layoutMeasurement);
    // console.log('contentOffset > ', contentOffset);

    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;

    onScrolledToBottom(distanceFromBottom < 80);
  };

  return (
    <FlatList
      style={styles.block}
      data={logs}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id?.toString()}
      ItemSeparatorComponent={ItemSeparator}
      onScroll={onScroll}
    />
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});
export default FeedList;
