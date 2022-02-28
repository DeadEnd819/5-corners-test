import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';
import Total from '../total/total';
import Marker from '../marker/marker';
import {fetchAddress} from '../../store/api-actions';
import {getCoords, getMarkerFlag} from '../../store/selectors';
import {changeMarkerFlag, setCoords} from '../../store/action';
import {KEY, defaultMapOption} from '../../const';

function Map({coords, getAddress, isMarkerShown, setMarkerShown, addCoords}) {
  useEffect(() => {
    if (coords.lat === null || coords.lng === null) {
      return;
    }

    getAddress({lat: coords.lat, lng: coords.lng});

    if (isMarkerShown) {
      return;
    }

    setMarkerShown(true);
  }, [coords.lat, coords.lng]);

  const handleMapClick = (evt) => {
    addCoords({
      lat: evt.lat,
      lng: evt.lng
    });
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key: KEY}}
        zoom={defaultMapOption.zoom}
        center={(coords.lat && coords.lng) ? coords : defaultMapOption.center}
        onClick={handleMapClick}
      >
        {isMarkerShown && <Marker lat={coords.lat} lng={coords.lng} text/>}
      </GoogleMapReact>

      <MediaQuery minWidth={1024}> <Total value={3790}/> </MediaQuery>
    </div>
  );
}

Map.propTypes = {
  coords: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  getAddress: PropTypes.func.isRequired,
  isMarkerShown: PropTypes.bool.isRequired,
  setMarkerShown: PropTypes.func.isRequired,
  addCoords: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  isMarkerShown: getMarkerFlag(store),
  coords: getCoords(store),
});

const mapDispatchToProps = (dispatch) => ({
  getAddress(date) {
    dispatch(fetchAddress(date));
  },
  setMarkerShown(flag) {
    dispatch(changeMarkerFlag(flag));
  },
  addCoords(coords) {
    dispatch(setCoords(coords));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
