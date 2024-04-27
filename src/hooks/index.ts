import {useEffect, useState} from 'react';
import {API_BASE_URL, END_POINT_USER_HOLDINGS} from '../constants';
import {UserHolding} from '../types';

const POLLING_INTERVAL = 5000;

/**
 * Custom hook to fetch user holding data from the server at regular intervals.
 *
 * @returns {{ data: UserHolding[] }} An object containing the user holding data.
 */
export const useHoldingData = () => {
  const [data, setData] = useState<UserHolding[]>([]);

  // TODO Improvements: If the custom hook is called multiple places better to use state management.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await fetch(API_BASE_URL + END_POINT_USER_HOLDINGS);
        const result = await reponse.json();
        setData(result?.userHolding);
      } catch (err) {
        console.error(err);
      }
    };

    // Fetch data initially and set up polling
    fetchData();
    const timeInterval = setInterval(fetchData, POLLING_INTERVAL);

    // Clean-up function to clear interval on component unmount
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return {data};
};
