import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import "./SliderFilter.scss";

const minDistance = 10;

interface SliderFilterProps {
  onRangeChange: (range: number[]) => void;
}

export default function SliderFilter({ onRangeChange }: SliderFilterProps) {
  const [value, setValue] = useState<number[]>([0.01, 200]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
    onRangeChange(value);
  };

  return (
    <div className="slider-filter-wrapper">
      <Box sx={{ margin: "0 10px" }}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0.01}
          step={1}
          max={200}
          marks={[
            { value: 0.01, label: "0.01 ETH" },
            { value: 200, label: "200 ETH" },
          ]}
          className="slider"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body2"
            sx={{ cursor: "pointer", color: "#D6D6D6" }}
          >
            {0.01} ETH
          </Typography>
          <Typography
            variant="body2"
            sx={{ cursor: "pointer", color: "#D6D6D6" }}
          >
            {200} ETH
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
