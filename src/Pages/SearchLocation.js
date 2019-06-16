import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import "./SearchLocation.scss";
class SearchLocation extends Component {
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

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="modal-search-location">
            <div className="inputForm">
              <label>
                <i class="fas fa-square-full" />
              </label>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input"
                })}
              />
              <button className="search-button" type="submit">
                <i class="fas fa-search" />
              </button>
            </div>

            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
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
                    {/* <span>{suggestion.description}</span> */}
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

// const SearchLocationForm = withFormik({
//   mapPropsToValues({ phonenumber, agree }) {
//     return {
//       phonenumber: "",
//       agree: true
//     };
//   },
//   handleSubmit(values, { props }) {
//     console.log(values);
//     const { phonenumber, agree } = values;
//     localStorage.setItem("phonenumber", phonenumber);
//     localStorage.setItem("agree", agree);
//     props.history.push("/codepage");
//   },

//   validationSchema: Yup.object().shape({
//     phonenumber: Yup.string()
//       .required("Phone number is required")
//       .min(10, "Phone number must have min 10 characters")
//       .max(11, "Phone number must have max 11 characters")
//   })
// })(SearchLocation);
// export default SearchLocationForm;
export default SearchLocation;
