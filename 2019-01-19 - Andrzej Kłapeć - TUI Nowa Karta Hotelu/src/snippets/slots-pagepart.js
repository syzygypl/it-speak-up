import React from 'react';
import PropTypes from 'prop-types';

import Location from '../Containers/LocationContainer';
import GuestsAppreciate from '../Containers/GuestsAppreciateContainer';
import Benefits from '../PageParts/Benefits';
import ShowOnMap from '../PageParts/ShowOnMap';
import Price from '../PageParts/Price';
import HotelBenefits from '../PageParts/HotelBenefits';
import Rooms from '../PageParts/Rooms';
import Alimentation from '../PageParts/Alimentation';
import SkiInfo from '../PageParts/SkiInfo';
import Accommodation from '../PageParts/Accommodation';
import RegionInfo from '../PageParts/RegionInfo';
import TripPlan from '../PageParts/TripPlan';
import TopReasons from '../PageParts/TopReasons';
import TopSection from '../PageParts/TopSection';
import ImportantInfo from '../PageParts/ImportantInfo';
import TripAdvisor from '../PageParts/TripAdvisor';
import TripAdvisorFull from '../PageParts/TripAdvisorFull';
import Configurator from '../PageParts/Configurator';
import FacultativeTrip from '../PageParts/FacultativeTrip';
import Directions from '../PageParts/Directions';
import NearbyPlaces from '../PageParts/NearbyPlaces';
import Weather from '../PageParts/Weather';

const components = {
  PRICE_INCLUDES: Benefits,
  SHOW_ON_MAP: ShowOnMap,
  PRICE: Price,
  CONFIGURATOR: Configurator,
  ACCOMMODATION: Accommodation,
  REGION: RegionInfo,
  TITLE_DATA: TopSection,
  FOOD: Alimentation,
  HOTEL: HotelBenefits,
  LOCATION: Location,
  ROOMS: Rooms,
  SKI_INFO: SkiInfo,
  TOUR_PLAN: TripPlan,
  TOP_REASONS: TopReasons,
  IMPORTANT_INFORMATION: ImportantInfo,
  TRIP_ADVISOR: TripAdvisor,
  TRIP_ADVISOR_FULL: TripAdvisorFull,
  FACULTATIVE_TRIPS: FacultativeTrip,
  SKI_ROUTE: Directions,
  HOTEL_RATINGS: GuestsAppreciate,
  NEARBY_PLACES: NearbyPlaces,
  WEATHER: Weather,
};

const PagePart = ({ name, options }) => {
  const Component = components[name];

  if (!Component) {
    return null;
  }

  return <Component {...options} name={name} />;
};

PagePart.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.string),
};

PagePart.defaultProps = {
  options: null,
};

export default (pagePart, key) => <PagePart key={key} {...pagePart} />;
