import { TextField, Typography } from "@mui/material";

interface FormControls {
  name: string;
  label: string;
  starRequired: boolean;
  inputType: string;
  fullWidth?: boolean;
  placeholder: string;
  sx?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  error?: boolean;
  helperText?: React.ReactNode;
}

const InputField: React.FC<FormControls> = ({
  name,
  label,
  starRequired,
  inputType,
  fullWidth,
  placeholder,
  sx,
  value,
  onChange,
  onBlur,
  error,
  helperText,
}) => {
  const asteriskStyle = {
    color: "red",
    fontSize: "16px",
    fontWeight: "600",
  };

  const labelStyle = {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "600",
    color: "#1C252E",
  };

  const sxStyle = {
    margin: "20px 0px",
  };

  const textFieldInputProps = {
    borderRadius: "20px",
    backgroundColor: "#f5f5f5",
    marginTop: "10px",
    marginBottom: "10px",
    padding: "0px 10px",
    "& .MuiOutlinedInput-input": {
      padding: "13.5px 14px",
    },

    "&.MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f0dbff",
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: "#d1a3ff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#a64dff",
        borderWidth: "1px",
      },
    },
  };

  return (
    <div>
      {label?.trim() && (
        <Typography sx={labelStyle}>
          {starRequired && <span style={asteriskStyle}>*</span>} {label}
        </Typography>
      )}
      <TextField
        name={name}
        type={inputType}
        fullWidth={fullWidth}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
        sx={{
          ...(sx && sxStyle),
        }}
        InputProps={{
          sx: textFieldInputProps,
        }}
      />
    </div>
  );
};

export default InputField;
