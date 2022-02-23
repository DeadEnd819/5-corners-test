import React, {Component, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {extend} from '../../utils';

const defaultOption = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11,
  draggable: true,
  lat: 59.95,
  lng: 30.33
};

function AnyReactComponent({text}) {
  return (
    <div style={{
      position: 'absolute',
      left: '-10px',
      top: '-10px',
      borderRadius: '50%',
      width: '36px',
      height: '36px',
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

function Map() {
  const [state, setState] = useState(defaultOption);
  console.log(state)
  const onCircleInteraction = (childKey, childProps, mouse) => {
    setState({
      draggable: false,
      lat: mouse.lat,
      lng: mouse.lng
    });
    /*eslint-disable-next-line*/
    console.log('onCircleInteraction called with', childKey, childProps, mouse);
  };

  const onCircleInteraction3 = (childKey, childProps, mouse) => {
    setState(extend(state,{draggable: true}));
    /*eslint-disable-next-line*/
    console.log('onCircleInteraction called with', childKey, childProps, mouse);
  };

  const onChange = ({center, zoom}) => {
    setState(extend(state,{
      center: center,
      zoom: zoom,
    }));
  };

  return (
    <div style={{ height: '50vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAHZ5949QgmBK94SOpqeBZPQ3YU8pJ643E'}}
        defaultCenter={state.center}
        defaultZoom={state.zoom}

        onChange={onChange}
        onChildMouseDown={onCircleInteraction}
        onChildMouseUp={onCircleInteraction3}
        onChildMouseMove={onCircleInteraction}
        /*eslint-disable-next-line*/
        onChildClick={() => console.log('child click')}
        /*eslint-disable-next-line*/
        onClick={() => console.log('mapClick')}
      >
        <AnyReactComponent
          lat={state.lat}
          lng={state.lng}
          text="?"
        />
      </GoogleMapReact>
    </div>
  );
}

// class TestMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11,
//     draggable: true,
//     lat: 59.95,
//     lng: 30.33
//   };
//
//   onCircleInteraction(childKey, childProps, mouse) {
//     this.setState({
//       draggable: false,
//       lat: mouse.lat,
//       lng: mouse.lng
//     });
//     /*eslint-disable-next-line*/
//     console.log('onCircleInteraction called with', childKey, childProps, mouse);
//   }
//
//   onCircleInteraction3(childKey, childProps, mouse) {
//     this.setState({draggable: true});
//     /*eslint-disable-next-line*/
//     console.log('onCircleInteraction called with', childKey, childProps, mouse);
//   }
//
//   _onChange = ({center, zoom}) => {
//     this.setState({
//       center: center,
//       zoom: zoom,
//     });
//   };
//
//   render() {
//     return (
//       <div style={{ height: '50vh', width: '100%'}}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyAHZ5949QgmBK94SOpqeBZPQ3YU8pJ643E'}}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//
//           onChange={this._onChange}
//           onChildMouseDown={this.onCircleInteraction}
//           onChildMouseUp={this.onCircleInteraction3}
//           onChildMouseMove={this.onCircleInteraction}
//           /*eslint-disable-next-line*/
//           onChildClick={() => console.log('child click')}
//           /*eslint-disable-next-line*/
//           onClick={() => console.log('mapClick')}
//         >
//           <AnyReactComponent
//             lat={this.props.lat}
//             lng={this.props.lng}
//             draggable
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

export default Map;
