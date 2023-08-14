import { FlatList, View } from 'react-native';
import React from 'react';
import { Mapa } from '../../querys/results';
import StateBox from '../pure/StateBox';

interface Props {
  states: Mapa;
}

const StatesContainer: React.FC<Props> = ({ states }) => (
  <FlatList
    data={states.scopes}
    style={{ width: '100%' }}
    renderItem={({ item }) => <StateBox state={item} />}
    keyExtractor={(item) => item.scopeId}
    contentContainerStyle={{ marginHorizontal: 16, paddingVertical: 32 }}
    ItemSeparatorComponent={() => <View style={{ marginVertical: 16 }} />}
  />
);

export default StatesContainer;
