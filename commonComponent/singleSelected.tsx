import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Typography,
  FormHelperText,
} from "@mui/material";

interface SingleSelectedFormProps {
  name: string;
  value: string;
  onChange: (e: any) => void;
  starRequired?: boolean;
  label: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  onBlur?: (e: React.FocusEvent<any>) => void;
  error?: boolean;
  helperText?: React.ReactNode;
}

const FormSingleSelected: React.FC<SingleSelectedFormProps> = ({
  name,
  value,
  onChange,
  starRequired,
  label,
  placeholder = "Select",
  options,
  onBlur,
  error,
  helperText,
}) => {
  const labelStyle = {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "600",
    color: "#1C252E",
    marginBottom: "8px",
  };

  const selectStyle = {
    borderRadius: "20px",
    backgroundColor: "#f5f5f5",
    marginTop: "10px",
    marginBottom: "10px",
    padding: "0px 10px",
    "& .MuiSelect-select": {
      padding: "13.5px 14px",
    },
    "&.MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: error ? "red" : "#f0dbff",
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: error ? "red" : "#d1a3ff",
      },
      "&.Mui-focused fieldset": {
        borderColor: error ? "red" : "#a64dff",
      },
    },
  };

  return (
    <div>
      {/* Label */}
      <Typography sx={labelStyle}>
        {starRequired && <span style={{ color: "red" }}>*</span>} {label}
      </Typography>

      <FormControl fullWidth error={error}>
        <Select
          name={name}
          value={value || ""}
          onChange={onChange}
          onBlur={onBlur} 
          displayEmpty
          renderValue={(selected) => {
            if (!selected) {
              return <span style={{ color: "#A9A9A9" }}>{placeholder}</span>;
            }
            const selectedOption = options.find(
              (o) => o.value === selected
            );
            return selectedOption ? selectedOption.label : "";
          }}
          sx={selectStyle}
          variant="outlined"
        >
          <MenuItem value="">
            <em>{placeholder}</em>
          </MenuItem>

          {options.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </div>
  );
};

export default FormSingleSelected;