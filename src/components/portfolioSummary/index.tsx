import React, {useState} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import {PortfolioSummaryData} from '../../types';
import PriceText from '../currencyText';
import styles from './styles';

/**
 * A memoized component to display the portfolio summary including current value, total investment, today's profit & loss, and total profit & loss.
 *
 * @param {PortfolioSummaryData} props An object containing portfolio summary data.
 * @param {number} props.currentValue The current value of the portfolio.
 * @param {number} props.totalInvestment The total investment in the portfolio.
 * @param {number} props.todaysPl The profit or loss made today.
 * @param {number} props.pl The total profit or loss in the portfolio.
 * @returns {JSX.Element} A JSX element representing the PortfolioSummary component.
 */
const PortfolioSummary = React.memo((props: PortfolioSummaryData) => {
  console.log('PortfolioSummary');
  const {currentValue, totalInvestment, todaysPl, pl} = props;

  const [collapsed, setCollapsed] = useState(true);
  const [animation] = useState(new Animated.Value(0));

  /**
   * Toggles the collapse state of the portfolio summary section and animates the height change.
   */
  const toggleCollapse = () => {
    if (collapsed) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
    setCollapsed(!collapsed);
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={toggleCollapse}>
        <Text style={styles.icon}>{collapsed ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      <Animated.View style={{height: heightInterpolate}}>
        <View style={styles.rowContainer}>
          <Text style={styles.keyText}>Current Value:</Text>
          <PriceText value={currentValue} showPlColors />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.keyText}>Total Investment:</Text>
          <PriceText value={totalInvestment} />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.keyText}>Today's Profit & Loss:</Text>
          <PriceText value={todaysPl} showPlColors />
        </View>
      </Animated.View>

      <View style={styles.rowContainer}>
        <Text style={styles.keyText}>Profit & Loss: </Text>
        <PriceText value={pl} showPlColors />
      </View>
    </View>
  );
});

export default PortfolioSummary;
