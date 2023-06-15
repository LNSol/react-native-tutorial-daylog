import AsyncStorage from '@react-native-community/async-storage';
import {ISavedLog} from '../contexts/LogContext';

const KEY = 'logs';

const logsStorage = {
  async get() {
    try {
      const rawLogs = await AsyncStorage.getItem(KEY);
      const savedLogs = rawLogs ? JSON.parse(rawLogs) : [];
      return savedLogs;
    } catch (error) {
      throw new Error('Failed to load logs');
    }
  },
  async set(logs: ISavedLog[]) {
    try {
      await AsyncStorage.setItem(KEY, JSON.stringify(logs));
    } catch (error) {
      throw new Error('Failed to save logs');
    }
  },
};

export default logsStorage;
