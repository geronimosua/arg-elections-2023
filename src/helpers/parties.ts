import { Name, ScopePartido } from '../querys/results';
import { Theme } from '../styles/Theme';

export const getPartiesData = (parties: ScopePartido[]) => {
  const sortedParties = parties.sort((a, b) => b.votos - a.votos);

  return sortedParties.slice(0, 3);
};

export const getPartyColor = (partyName: Name) => {
  switch (partyName) {
    case Name.UnionPorLaPatria: {
      return Theme.primary;
    }
    case Name.LaLibertadAvanza: {
      return '#7c4dff';
    }
    case Name.JuntosPorElCambio: {
      return '#ff8426';
    }
    default: {
      return '#263238';
    }
  }
};
