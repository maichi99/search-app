import React from "react";
import { Chip, Stack } from "@mui/material";
import "./MultipleChip.scss";
export interface ChipProps {
  label: string;
  color?: "default" | "primary" | "secondary";
  onDelete?: () => void;
}

interface MultipleChipsProps {
  chips: ChipProps[];
}

const MultipleChips: React.FC<MultipleChipsProps> = ({ chips }) => {
  return (
    <Stack direction="row" spacing={3} className="chip-container">
      {chips.map((chip, index) => (
        <Chip
          key={index}
          label={chip.label}
          color={chip.color}
          onDelete={chip.onDelete}
        />
      ))}
    </Stack>
  );
};

export default MultipleChips;
