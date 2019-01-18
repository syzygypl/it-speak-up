import get from 'lodash.get';
import { createSelector } from 'reselect';
import PagePartToComponent from '../../Services/PagePartToComponent';

const getSlots = state => get(state, 'hotelCard.template.slots', []);

export const getSlotsSelector = expectedSlots =>
  createSelector(
    [getSlots],
    currentSlots =>
      currentSlots
        .filter(slot => expectedSlots.includes(slot.name))
        .reduce(
          (resultsSlots, { name, components }) => ({
            ...resultsSlots,
            [name]: components.map(PagePartToComponent),
          }),
          {},
        ),
  );

export default getSlotsSelector;
