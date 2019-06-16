// export default LocationSearchInput;
import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import SearchLocation from "./SearchLocation";
import "./SearchLocationPage.scss";
const mapStyles = {
  height: `100%`
  // width: `50%`,
  // display: "flex",
  // flexDirection: "column-reverse"
};

class SearchLocationPage extends Component {
  state = {
    lat: 47.444,
    lng: -122.176
  };

  changeLocation = ({ lat, lng }) => {
    this.setState({
      lat,
      lng
    });
  };
  render() {
    return (
      <div className="searchmap">
        <SearchLocation changeLocation={this.changeLocation} />
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          center={{ lat: this.state.lat, lng: this.state.lng }}
        />
      </div>
    );
  }
}

// export default FormikForm;
export default GoogleApiWrapper({
  apiKey: "AIzaSyDBunJ4GXNEC3KJlpoGJO-iB--CjPv4o-s"
})(SearchLocationPage);
