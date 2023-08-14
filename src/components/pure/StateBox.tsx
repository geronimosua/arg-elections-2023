import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Box from './Box';
import { Scope, ScopePartido } from '../../querys/results';
import { Theme } from '../../styles/Theme';
import { formatPopulation } from '../../helpers/population';
import { getPartiesData, getPartyColor } from '../../helpers/parties';

interface Props {
  state: Scope;
}

interface VoteLabelProp {
  quantity: number;
  label: string;
  isPerc?: boolean;
}

const VoteLabel: React.FC<VoteLabelProp> = ({ quantity, label, isPerc }) => (
  <Text style={style.voteLabel}>
    {label}{' '}
    <Text style={{ fontWeight: '500' }}>
      {isPerc ? `${quantity}%` : formatPopulation(quantity)}
    </Text>
  </Text>
);

const PartyLabel: React.FC<{ party: ScopePartido }> = ({ party }) => (
  <Text style={[style.voteLabel, { color: getPartyColor(party.name) }]}>
    {party.name} {party.perc}%
  </Text>
);

const StateBox: React.FC<Props> = ({ state }) => {
  const parties = getPartiesData(state.partidos);

  return (
    <Box>
      <View style={style.stateContainer}>
        <View style={{ width: '58%' }}>
          <Text style={style.stateName} numberOfLines={2} lineBreakMode='tail'>
            {state.name === 'Ciudad Autónoma de Buenos Aires'
              ? 'CABA'
              : state.name}
          </Text>
          <VoteLabel label='Totales' quantity={state.totalVotos} />
          <VoteLabel label='Afirmativos' quantity={state.afirmativos} />
          <VoteLabel label='En blanco' quantity={state.blancos} />
          <VoteLabel label='Impugnados' quantity={state.impugnados} />
          <VoteLabel
            label='Participación'
            quantity={state.participation}
            isPerc
          />
        </View>
        <View style={{ width: '42%' }}>
          {parties.map((party) => (
            <PartyLabel party={party} />
          ))}
        </View>
      </View>
    </Box>
  );
};

const style = StyleSheet.create({
  stateName: {
    fontFamily: 'Arial',
    fontSize: 18,
    fontWeight: '500',
    color: Theme.primary,
    marginBottom: 16,
    width: '70%',
  },
  voteLabel: {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: '400',
    color: Theme.dark,
    marginBottom: 6,
  },
  stateContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  partyLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StateBox;
