import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryContainer: {
    backgroundColor: '#6200ee',
  },
  secondaryContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#6200ee',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#6200ee',
  },
  disabled: {
    opacity: 0.6,
  },
});
