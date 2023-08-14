import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './src/screens/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
