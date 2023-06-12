import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSearch} from '../contexts/SearchContext';

const SearchHeader = () => {
  const {keyword, setKeyword} = useSearch();
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.block, {width: width - 32}]}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        placeholderTextColor="#8292aa"
        value={keyword}
        onChangeText={setKeyword}
        autoFocus
      />
      <Pressable
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
        onPress={() => setKeyword('')}>
        <Icon name="cancel" size={24} color="#8292aa" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});

export default SearchHeader;
