import React, {useMemo} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {DEFAULT_CURRENCY_SYMBOL} from '../../constants';
import styles from './styles';
import {formatCurrencyWithCommas} from '../../utils';

interface CurrencyTextProps {
  /**
   * The value to be displayed as currency.
   */
  value: string | number;
  /**
   * Determines whether to apply profit/loss colors to the text.
   * @default false
   */
  showPlColors?: boolean;
  /**
   * Additional styles to be applied to the text.
   */
  style?: TextStyle;
}

/**
 * A memoized component to display currency values with optional profit/loss colors.
 *
 * @param {CurrencyTextProps} props The props for the PriceText component.
 * @returns {JSX.Element} A JSX element representing the PriceText component.
 */

const PriceText = React.memo((props: CurrencyTextProps) => {
  const {value, showPlColors = false, style} = props;

  // Memoize the formatted currency value
  const text = useMemo(() => formatCurrencyWithCommas(value), [value]);

  // Determine the text style based on the value and showPlColors flag
  const textStyle = useMemo(() => {
    if (style) {
      return style;
    }
    if (!showPlColors) {
      return StyleSheet.compose(styles.defaultText, style);
    }
    if (Number(value) >= 0) {
      return styles.profitText;
    }
    return styles.lossText;
  }, [value, style, showPlColors]);

  return <Text style={textStyle}>{`${DEFAULT_CURRENCY_SYMBOL} ${text}`}</Text>;
});

export default PriceText;
