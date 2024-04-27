import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type HeaderProps = {
  title: string;
};

/**
 * A functional component to display a header with a title.
 *
 * @param {object} props The props for the Header component.
 * @param {string} props.title The title to display in the header.
 * @returns {JSX.Element} A JSX element representing the Header component.
 */
const Header = ({title}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default Header;
