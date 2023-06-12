import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSearch} from '../contexts/SearchContext';
import ScreenWrapper from './ScreenWrapper';
import {useLog} from '../contexts/LogContext';
import FeedList from '../components/FeedList';
import EmptySearchResult from '../components/EmptySearchResult';

const SearchScreen = () => {
  const {logs} = useLog();
  const {keyword} = useSearch();

  const filtered = keyword
    ? logs.filter(log =>
        [log.title, log.body].some(text => text.includes(keyword)),
      )
    : [];

  if (!keyword) return <EmptySearchResult type="EMPTY_KEYWORD" />;
  else if (keyword && !filtered.length)
    return <EmptySearchResult type="NOT_FOUND" />;

  return (
    <ScreenWrapper>
      <View style={styles.block}>
        <FeedList logs={filtered} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default SearchScreen;
