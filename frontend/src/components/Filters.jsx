import React, { useState } from "react";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  FormControlLabel,
  Checkbox,
  Box,
  Divider,
  Slider,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const durations = [
  "1 Month",
  "2 Months",
  "3 Months",
  "4 Months",
  "5 Months",
  "6 Months",
];

const locations = [
  "Remote",
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
];

const marks = [
  { value: 0, label: "0" },
  { value: 2000, label: "2k" },
  { value: 4000, label: "4k" },
  { value: 6000, label: "6k" },
  { value: 8000, label: "8k" },
  { value: 10000, label: "10k" },
];

function valuetext(value) {
  return `₹${value}`;
}

export default function Filters({ filters, onFilterChange }) {
  const [stipend, setStipend] = useState(0);

  const handleTextChange = (field) => (event) => {
    onFilterChange({
      ...filters,
      [field]: event.target.value,
    });
  };

  const handleSelectChange = (field) => (event) => {
    onFilterChange({
      ...filters,
      [field]: event.target.value,
    });
  };

  const handleStipendChange = (event, newValue) => {
    setStipend(newValue);
    onFilterChange({
      ...filters,
      minStipend: newValue,
    });
  };

  return (
    <Stack spacing={3}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <FilterListIcon />
        <Typography variant="h6" sx={{ fontSize: "1.1rem" }}>
          Filters
        </Typography>
      </Box>

      <FormControlLabel
        control={<Checkbox size="small" />}
        label={
          <Typography variant="body2" sx={{ color: "#666" }}>
            As per my preferences
          </Typography>
        }
      />

      <Divider />

      <Box>
        <Typography variant="subtitle2" gutterBottom sx={{ color: "#333" }}>
          Profile
        </Typography>
        <TextField
          size="small"
          fullWidth
          placeholder="e.g. Marketing"
          value={filters.profile}
          onChange={handleTextChange("profile")}
        />
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom sx={{ color: "#333" }}>
          Location
        </Typography>
        <FormControl fullWidth size="small">
          <Select
            value={filters.location}
            onChange={handleSelectChange("location")}
            displayEmpty
          >
            <MenuItem value="">All Locations</MenuItem>
            {locations.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          control={<Checkbox size="small" />}
          label={
            <Typography variant="body2" sx={{ color: "#666" }}>
              Work from home
            </Typography>
          }
          sx={{ mt: 1 }}
        />
      </Box>

      <Box>
        <Typography variant="subtitle2" gutterBottom sx={{ color: "#333" }}>
          Duration
        </Typography>
        <FormControl fullWidth size="small">
          <Select
            value={filters.duration}
            onChange={handleSelectChange("duration")}
            displayEmpty
          >
            <MenuItem value="">Any Duration</MenuItem>
            {durations.map((duration) => (
              <MenuItem key={duration} value={duration}>
                {duration}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography variant="subtitle2" gutterBottom sx={{ color: "#333" }}>
          Desired minimum monthly stipend
        </Typography>
        <Box
          sx={{
            px: 1,
            mt: 2,
            mb: 1,
            width: "calc(100% - 16px)", // Account for parent padding
            "& .MuiSlider-markLabel": {
              fontSize: "0.75rem",
            },
          }}
        >
          <Slider
            value={stipend}
            onChange={handleStipendChange}
            getAriaValueText={valuetext}
            step={1000}
            min={0}
            max={10000}
            marks={marks}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `₹${value}`}
            sx={{
              color: "#008BDC",
              "& .MuiSlider-markLabel": {
                fontSize: "0.75rem",
                color: "#666",
              },
              "& .MuiSlider-thumb": {
                height: 20,
                width: 20,
                backgroundColor: "#fff",
                border: "2px solid currentColor",
                "&:hover": {
                  boxShadow: "0 0 0 8px rgba(0, 139, 220, 0.16)",
                },
              },
              "& .MuiSlider-track": {
                height: 4,
              },
              "& .MuiSlider-rail": {
                height: 4,
                opacity: 0.2,
              },
              "& .MuiSlider-mark": {
                backgroundColor: "#bfbfbf",
                height: 8,
                width: 1,
                "&.MuiSlider-markActive": {
                  opacity: 1,
                  backgroundColor: "currentColor",
                },
              },
              "& .MuiSlider-valueLabel": {
                backgroundColor: "#008BDC",
                fontSize: "0.75rem",
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 1,
            mt: 1,
            fontSize: "0.75rem",
            color: "#666",
          }}
        >
          <span>₹0</span>
          <span>₹5K</span>
          <span>₹10K</span>
        </Box>
      </Box>
    </Stack>
  );
}
