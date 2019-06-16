import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import "./FromAddressPage.scss";

import { withRouter } from "react-router-dom";
class FromAddress extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.props.changeLocation(latLng);
      })
      .catch(error => console.error("Error", error));
  };
  handleSubmit = (history, event) => {
    console.log(this.state.address);
    localStorage.setItem("fromAddress", this.state.address);
    history.push("./phonepage");
    event.preventDefault();
  };

  render() {
    const { history } = this.props;
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        onSubmit={this.handleSubmit}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="modal-search-location">
            <div className="inputForm">
              <label>
                <i class="fas fa-square-full" />
              </label>
              <input
                {...getInputProps({
                  placeholder: "Where to?",
                  className: "location-search-input"
                })}
              />
              <button
                className="search-button"
                type="submit"
                onClick={event => this.handleSubmit(history, event)}
              >
                <i class="fas fa-search" />
              </button>
            </div>

            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";

                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <div className="show-item-suggestion">
                      <i class="fas fa-map-marker-alt" />
                      <div>
                        <h5>{suggestion.formattedSuggestion.mainText}</h5>
                        <p>{suggestion.formattedSuggestion.secondaryText}</p>
                      </div>
                    </div>
                    {console.log(suggestion)}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

const SearchLocationWithRouter = withRouter(FromAddress);
export default SearchLocationWithRouter;
