import React from 'react';
import * as Constants from '../../Constants';

export default class RouteOps extends React.Component {
    mapRef = React.createRef();

    state = {
      // The map instance to use during cleanup
      map: null
    };


componentDidMount() {

// Instantiate a map and platform object:
const H = window.H;
var platform = new H.service.Platform({
    'apikey': 'bEe33LxPaw30KNQOQRUSb8-npEfpmTBCDq2xckKvN2w'
  });
  // Retrieve the target element for the map:
  var targetElement = document.getElementById('mapContainer');
  
  // Get the default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();
  
  // Instantiate the map:
  
  var map = new H.Map(
    this.mapRef.current,
    defaultLayers.vector.normal.map,
    {
      zoom: 10,
      center: { lat: 19.0225634, lng:72.8374501 }
    });
  
  // Create the parameters for the routing request:
  var routingParameters = {
    'routingMode': 'fast',
    'transportMode': 'car',
    // The start point of the route:
    'origin': '19.0225634,72.8374501',
    // The end point of the route:
    'destination': '19.0812189,72.8909388',
    // Include the route shape in the response
    'return': 'polyline'
  };

      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      const ui = H.ui.UI.createDefault(map, defaultLayers);
  
  // Define a callback function to process the routing response:
  var onResult = function(result) {
    // ensure that at least one route was found
    if (result.routes.length) {
      result.routes[0].sections.forEach((section) => {
           // Create a linestring to use as a point source for the route line
          let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
  
          // Create a polyline to display the route:
          let routeLine = new H.map.Polyline(linestring, {
            style: { strokeColor: 'blue', lineWidth: 3 }
          });
  
          // Create a marker for the start point:
          let startMarker = new H.map.Marker(section.departure.place.location);
  
          // Create a marker for the end point:
          let endMarker = new H.map.Marker(section.arrival.place.location);
  
          // Add the route polyline and the two markers to the map:
          map.addObjects([routeLine, startMarker, endMarker]);
  
          // Set the map's viewport to make the whole route visible:
          map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
      });
    }
  };
  
  // Get an instance of the routing service version 8:
  var router = platform.getRoutingService(null, 8);
  this.addCircleToMap(map,19.070894, 72.894803, Constants.UNSAFE_ZONE_RADIUS_ROUTE, Constants.UNSAFE_ZONE)
  this.addCircleToMap(map,19.042697, 72.873981, Constants.UNSAFE_ZONE_RADIUS_ROUTE, Constants.UNSAFE_ZONE)
  // Call calculateRoute() with the routing parameters,
  // the callback and an error callback function (called if a
  // communication error occurs):
  router.calculateRoute(routingParameters, onResult,
    function(error) {
      alert(error.message);
    });
  
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
            <div ref={this.mapRef} style={{ width:"80%", height: "500px" }} />   
             </center>
      </div>
       
      );
    }
  }