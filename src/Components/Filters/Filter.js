import React from "react";
import "./Filter.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useProductProvider } from "../../Context/ProductContext";
import Checkbox from "@material-ui/core/Checkbox";

function Filter() {
  const { state, dispatch } = useProductProvider();

  const handleChange = (event) => {
    dispatch({ action: "SORT", type: "sort", payload: event.target.value });
  };

  const handleCheckChange = (key, item) => {
    dispatch({ action: "FILTER", type: key, payload: item });
  };
  return (
    <div className="filterContent">
      <div className="clear" onClick={() => dispatch({ action: "CLEAR" })}>
        <b>Clear All</b>
      </div>
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Price</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={state.sortby}
            onChange={handleChange}
          >
            <FormControlLabel
              value="LOW_TO_HIGH"
              control={<Radio />}
              label="Low to High"
            />
            <FormControlLabel
              value="HIGH_TO_LOW"
              control={<Radio />}
              label="High to Low"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <div>Filters</div>
        <div>
          {Object.keys(state.filterCategories).map((key) => {
            return (
              <div>
                <h3>{key}</h3>
                {state.filterCategories[key].map((item) => {
                  return (
                    <div>
                      <Checkbox
                        checked={
                          state.filterby[key].includes(item) ? true : false
                        }
                        onChange={() => handleCheckChange(key, item)}
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                      {item}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filter;
