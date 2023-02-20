/* eslint-disable no-nested-ternary */
import { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { useLocalStorage } from 'usehooks-ts';
import useMapStore from '../hooks/useMapStore';

import { loadKakaoMap } from '../utils/KakaoMap';

import PlaceInformationPopup from '../components/PlaceInformationPopup';
import FilterBar from '../components/FilterBar';
import Filters from '../components/Filters';
import FilterResultBar from '../components/FilterResultBar';
import FilteredPlacesList from '../components/FilteredPlacesList';
import UnauthorizedAccessModal from '../components/UnauthorizedAccessModal';

const MapArea = styled.div`
  display: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 550px;
  max-height: 900px;
  min-width: 400px;
  min-height: 900px;
  margin-top: 2em;
`;

export default function MapPage() {
  const [filterPageOn, setFilterPageOn] = useState(false);

  const [filteredListsPageOn, setFilteredListsPageOn] = useState(false);

  const [isPlaceSelected, setIsPlaceSelected] = useState(false);

  const [filterResultBarOn, setFilterResultBarOn] = useState(false);

  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  const mapStore = useMapStore();

  const kakaoMap = useRef(null);

  const navigate = useNavigate();

  const makeClickListener = (placeId) => {
    mapStore.selectedPlaceShortInformation(placeId);
    setIsPlaceSelected(true);
  };

  const { search } = document.location;

  const {
    selectedPlace, sido, sigungu, category,
  } = mapStore;

  useEffect(() => {
    const fetchData = async () => {
      await mapStore.fetchFilteredPlaces(sido, sigungu, category);
      const { places } = mapStore;

      loadKakaoMap(kakaoMap.current, places, makeClickListener);
    };

    fetchData();

    setIsPlaceSelected(false);
  }, [filterPageOn, filteredListsPageOn, search]);

  const setFilteredPlaces = (sidoCondition, sigunguCondition, categoryCondition) => {
    mapStore.fetchFilteredPlaces(sidoCondition, sigunguCondition, categoryCondition);
  };

  const setSido = (sidoCondition) => {
    mapStore.changeSido(sidoCondition);
  };

  const setSigungu = (sigunguCondition) => {
    mapStore.changeSigungu(sigunguCondition);
  };

  const setPlaceCategory = (categoryCondition) => {
    mapStore.changePlaceCategory(categoryCondition);
  };

  const goFilterPage = () => {
    setFilterPageOn(true);
  };

  const resetFilter = async () => {
    mapStore.clearFilterState();
    navigate('/map');
  };

  const goBackFromFilterPage = () => {
    mapStore.clearFilterState();
    setFilterPageOn(false);
  };

  const runFiltering = () => {
    setFilterPageOn(false);
    setFilterResultBarOn(true);
    setFilteredPlaces(sido, sigungu, category);
    navigate(`/map?sido=${sido}&sigungu=${sigungu}&type=${category}`);
  };

  const closePopup = () => {
    setIsPlaceSelected(false);
  };

  const goFilteredPlaceListPage = () => {
    setFilteredListsPageOn(true);
  };

  const goBackFromPlaceListPage = () => {
    setFilteredListsPageOn(false);
  };

  const toggleModal = () => {
    setIsAccessModalOpen(!isAccessModalOpen);
  };

  const goToPlaceDetailPage = (placeId) => {
    if (accessToken && accessToken !== 'temporaryAccessToken') {
      navigate(`/places/${placeId}`);
      return;
    }
    toggleModal();
  };

  const goToLogin = () => {
    navigate('/login');
    setAccessToken('');
    toggleModal();
  };

  const { places } = mapStore;

  return (
    <div>
      {!filterPageOn && !filteredListsPageOn ? (
        <div>
          <FilterBar
            goFilterPage={goFilterPage}
            resetFilter={resetFilter}
            sido={sido}
            sigungu={sigungu}
            category={category}
          />
          <MapArea ref={kakaoMap}>
            {isPlaceSelected && (
              <PlaceInformationPopup
                selectedPlace={selectedPlace}
                goToPlaceDetailPage={goToPlaceDetailPage}
                closePopup={closePopup}
              />
            )}
            {(sigungu && category) && (
              <FilterResultBar
                goFilteredPlaceListPage={goFilteredPlaceListPage}
                places={places}
              />
            )}
          </MapArea>
          <UnauthorizedAccessModal
            isAccessModalOpen={isAccessModalOpen}
            toggleModal={toggleModal}
            goToLogin={goToLogin}
          />
        </div>
      )
        : filterPageOn && !filteredListsPageOn ? (
          <Filters
            goBackFromFilterPage={goBackFromFilterPage}
            runFiltering={runFiltering}
            setSido={setSido}
            setSigungu={setSigungu}
            setPlaceCategory={setPlaceCategory}
            sido={sido}
            sigungu={sigungu}
            category={category}
          />
        ) : (
          <div>
            <FilteredPlacesList
              places={places}
              goBackFromPlaceListPage={goBackFromPlaceListPage}
              goToPlaceDetailPage={goToPlaceDetailPage}
            />
            <UnauthorizedAccessModal
              isAccessModalOpen={isAccessModalOpen}
              toggleModal={toggleModal}
              goToLogin={goToLogin}
            />
          </div>
        )}
    </div>
  );
}
