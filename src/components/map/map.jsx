import React, {useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';
import {fetchAddress} from '../../store/api-actions';
import {getCoords, getMarkerFlag} from '../../store/selectors';
import {changeMarkerFlag, setCoords} from '../../store/action';
import {KEY, defaultMapOption} from '../../const';

/*eslint-disable-next-line*/
function Marker({text}) {
  return (
    <div style={{
      position: 'absolute',
      left: '-16px',
      top: '-16px',
      borderRadius: '50%',
      width: '32px',
      height: '32px',
      backgroundColor: 'red',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid blue',
      color: 'yellow'
    }}
    >
      {text}
    </div>
  );
}


function Map({coords, getAddress, isMarkerShown, setMarkerShown, setCoords}) {
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
    setCoords({
      lat: evt.lat,
      lng: evt.lng
    });
  };

  return (
    <div style={{height: '50vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: KEY}}
        defaultCenter={defaultMapOption.center}
        defaultZoom={defaultMapOption.zoom}
        center={coords}
        onClick={handleMapClick}
      >
        {isMarkerShown && <Marker lat={coords.lat} lng={coords.lng} text/>}
      </GoogleMapReact>
    </div>
  );
}

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
  setCoords(coords) {
    dispatch(setCoords(coords));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
