import {FlatList, StyleSheet, View} from 'react-native';
import {ISavedLog} from '../contexts/LogContext';
import FeedListItem from './FeedListItem';

const ItemSeparator = () => <View style={styles.separator} />;

const FeedList = ({logs}: {logs: ISavedLog[]}) => {
  return (
    <FlatList
      style={styles.block}
      data={logs}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id?.toString()}
      ItemSeparatorComponent={ItemSeparator}
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
