import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useQueryResults from '../hooks/useQueryResults';
import StatesContainer from '../components/containers/StatesContainer';
import { Theme } from '../styles/Theme';

const Home = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const { top } = useSafeAreaInsets();
  const { resultsQuery } = useQueryResults();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    resultsQuery.refetch().then(() => setRefreshing(false));
  }, []);

  return (
    <View style={{ marginTop: top }}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {resultsQuery.isLoading ? (
          <ActivityIndicator size='large' color={Theme.dark} />
        ) : resultsQuery.data ? (
          <StatesContainer states={resultsQuery.data.mapa[0]} />
        ) : (
          <Text>Something went wrong</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
