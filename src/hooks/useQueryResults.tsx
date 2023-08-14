import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { resultsUrl } from '../helpers/constants';
import { ElectionResults } from '../querys/results';

const getResults = async () => {
  const { data } = await axios.get<ElectionResults>(resultsUrl);
  return data;
};

const useQueryResults = () => {
  const resultsQuery = useQuery(['results'], getResults, {
    refetchOnWindowFocus: false,
    refetchInterval: 500,
  });

  return { resultsQuery };
};

export default useQueryResults;
