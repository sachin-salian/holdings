import React from 'react';
import {Text, View} from 'react-native';
import {UserHolding} from '../../types';
import {getProfitLoss} from '../../utils';
import PriceText from '../currencyText';
import styles from './styles';

/**
 * A memoized component to display information about a single holding stock item, including symbol, last traded price (LTP), quantity, and profit/loss.
 *
 * @param {UserHolding} props An object containing information about the holding stock item.
 * @param {string} props.symbol The symbol of the holding stock.
 * @param {number} props.ltp The last traded price of the holding stock.
 * @param {number} props.quantity The quantity of the holding stock.
 * @returns {JSX.Element} A JSX element representing the HoldingStockItem component.
 */
const HoldingStockItem = React.memo((props: UserHolding) => {
  const {symbol, ltp, quantity} = props || {};
  const plPrice = getProfitLoss(props);

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.symbolText}>{symbol}</Text>
        <Text>
          <Text>{'LTP: '}</Text>
          <PriceText value={ltp} />
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <Text>{`${quantity}`}</Text>
        <Text>
          <Text>{'P/L: '}</Text>
          <PriceText value={plPrice} showPlColors />
        </Text>
      </View>
    </View>
  );
});

export default HoldingStockItem;
