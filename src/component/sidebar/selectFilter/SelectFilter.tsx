import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React, { useState, useCallback, useEffect } from "react";
import "./SelectFilter.scss";

export type SelectFilterOption = {
  label: string;
  value: string;
};

export type SelectValue = {
  value: string;
  category: string;
};

export type SelectFilterProps = {
  options: SelectFilterOption[];
  category: string;
  defaultValue?: string;
  handleSearchFilter?: ({ value, category }: SelectValue) => void;
  refreshKey: number;
};

const SelectFilter: React.FC<SelectFilterProps> = ({
  options,
  category,
  defaultValue = "",
  handleSearchFilter,
  refreshKey,
}) => {
  const [value, setValue] = useState<string>(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue, refreshKey]);

  const handleChange = useCallback(
    (event: SelectChangeEvent<string>) => {
      const newValue = event.target.value;
      if (handleSearchFilter) {
        handleSearchFilter({ value: newValue, category });
      }
      setValue(newValue);
    },
    [category, handleSearchFilter]
  );

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }} className="select-filter">
      <Typography className="select-filter__category">{category}</Typography>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Select filter" }}
        sx={{
          ".MuiInputBase-input": {
            color: "white",
            textAlign: "left",
          },
          ".MuiSvgIcon-root": {
            fill: "white",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: "black",
              ".MuiMenuItem-root": {
                padding: 2,
              },
            },
          },
        }}
      >
        {options.map((opt) => (
          <MenuItem
            key={opt.value}
            value={opt.value}
            sx={{
              "&.MuiMenuItem-root": {
                color: "white",
                backgroundColor: "black",
              },
              "&.Mui-selected": {
                backgroundColor: "#2d0851",
                color: "white",
                fontWeight: 600,
              },
            }}
          >
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFilter;
