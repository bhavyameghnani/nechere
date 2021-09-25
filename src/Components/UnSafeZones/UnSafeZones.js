import React from 'react';
import * as Constants from '../../Constants';

export default class UnSafeZones extends React.Component {
    mapRef = React.createRef();

    state = {
      // The map instance to use during cleanup
      map: null
    };
  
    componentDidMount() {
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: "bEe33LxPaw30KNQOQRUSb8-npEfpmTBCDq2xckKvN2w"
        });
    
        const defaultLayers = platform.createDefaultLayers();
    
        // Create an instance of the map
        const map = new H.Map(
          this.mapRef.current,
          defaultLayers.vector.normal.map,
          {
            // This map is centered over Europe
            center: { lat: 19.016211, lng:72.840183 },
            zoom: 15,
            pixelRatio: window.devicePixelRatio || 1
          }
        );
     
         // MapEvents enables the event system
      // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
      // This variable is unused and is present for explanatory purposes
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
      // Create the default UI components to allow the user to interact with them
      // This variable is unused
      const ui = H.ui.UI.createDefault(map, defaultLayers);
  
      this.setState({ map });
      this.addAllZones(map);
    }
    componentWillUnmount() {
      this.state.map.dispose();
    }
  
  
    addAllZones(map){
        this.addCircleToMap(map,19.016211, 72.840183, 50, Constants.UNSAFE_ZONE);
        this.addCircleToMap(map,19.018896, 72.839226, 45, Constants.UNSAFE_ZONE);
        this.addCircleToMap(map,19.016055, 72.836506, 30, Constants.UNSAFE_ZONE);
        this.addCircleToMap(map,19.013306, 72.837300, 35, Constants.UNSAFE_ZONE);
        this.addCircleToMap(map,19.020045, 72.837964, 25, Constants.UNSAFE_ZONE);
    }

    addCircleToMap(map, lat, long, radius, color){
        const H = window.H;
        map.addObject(new H.map.Circle(
          // The central point of the circle
          {lat:lat, lng:long},
          // The radius of the circle in meters
          radius,
          {
            style: {
            //   strokeColor: 'rgba(55, 85, 170, 0.6)', // Color of the perimeter
              lineWidth: 1,
              fillColor: color  // Color of the circle
            }
          }
        ));
      }
  
    
      render() {
        return (
          // Set a height on the map so it will display
          <div>
              <center>
              <div ref={this.mapRef} style={{ width:"80%", height: "600px" }} />
              </center>
        </div>
         
        );
      }
    }