import React from 'react';

export default class TreeMap extends React.Component {
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
          center: { lat: 19.9975, lng: 73.7898 },
          zoom: 6,
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
    this.addMarkersToMap(map);
  }
  componentWillUnmount() {
    this.state.map.dispose();
  }


   addMarkersToMap(map) {
    const H = window.H;
    var nasikMarker = new H.map.Marker({lat:19.9975, lng:73.7898});
    map.addObject(nasikMarker);

    var mumbaiMarker = new H.map.Marker({lat:19.0760, lng: 72.8777});
    map.addObject(mumbaiMarker);

    var puneMarker = new H.map.Marker({lat:18.5204, lng:73.8567});
    map.addObject(puneMarker);

    var nagpurMarker = new H.map.Marker({lat:21.1458, lng: 79.0882});
    map.addObject(nagpurMarker);

    var akolaMarker = new H.map.Marker({lat:20.700, lng:77.0082});
    map.addObject(akolaMarker);
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