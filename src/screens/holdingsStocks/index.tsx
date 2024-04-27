import React, {useMemo} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Header from '../../components/header';
import HoldingStockItem from '../../components/holdingStockItem';
import {UserHolding} from '../../types';
import PortfolioSummary from '../../components/portfolioSummary';
import {getPortfolioSummary} from '../../utils';
import {useHoldingData} from '../../hooks';
import styles from './styles';

/*
Some improvements can be made
 - Color Themes
 - Adding Localization support
*/

/**
 * A component to display the user's holdings along with portfolio summary.
 *
 * @returns {JSX.Element} A JSX element representing the Holdings component.
 */
const Holdings = () => {
  const {data} = useHoldingData();
  // Calculate portfolio summary based on user holding data
  const portfolioSummaryData = useMemo(() => getPortfolioSummary(data), [data]);

  const renderHoldingItem = (itemData: {index: number; item: UserHolding}) => {
    return <HoldingStockItem {...itemData?.item} />;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.safeAreaContainer}>
        <Header title={'Upstox Holdings'} />

        <View style={styles.listContainer}>
          <FlatList
            data={data}
            renderItem={renderHoldingItem}
            keyExtractor={(item: UserHolding) => item?.symbol}
            contentContainerStyle={styles.listContentContainer}
          />
        </View>

        <PortfolioSummary {...portfolioSummaryData} />
      </View>
    </SafeAreaView>
  );
};

export default Holdings;
