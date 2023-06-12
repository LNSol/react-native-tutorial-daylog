import {StyleSheet, Text, View} from 'react-native';
import ScreenWrapper from '../screens/ScreenWrapper';

export const MESSAGE = {
  NOT_FOUND: '검색 결과가 없습니다.',
  EMPTY_KEYWORD: '검색어를 입력하세요',
};

const EmptySearchResult = ({type}: {type: keyof typeof MESSAGE}) => {
  return (
    <ScreenWrapper>
      <View style={styles.block}>
        <Text style={styles.message}>{MESSAGE[type]}</Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 16,
    letterSpacing: 0.7,
    color: '#8292aa',
  },
});
export default EmptySearchResult;
