import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  iconContainer: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 20,
    marginTop: 4,
    color: '#5a2989',
  },
  collapsibleContainer: {},
  rowContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  keyText: {
    fontWeight: 'bold',
  },
});

export default styles;
