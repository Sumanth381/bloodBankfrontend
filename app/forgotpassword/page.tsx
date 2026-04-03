"use client";
import InputField from "@/commonComponent/textField";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const ForgotPassword = () => {
  const router = useRouter();
  const registerSchema = Yup.object({
    Email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      Email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      router.push("/login");
    },
  });
  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          position: "relative",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            backgroundColor: "white",
            width: {
              xs: "90%",
              sm: "90%",
              md: "600px",
            },
            maxWidth: "100%",
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <InputField
            name="Email"
            label="Email Id"
            starRequired={true}
            inputType="text"
            fullWidth={true}
            placeholder="Enter Email Id"
            value={formik.values.Email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            helperText={formik.touched.Email && formik.errors.Email}
          />
          <InputField
            name="password"
            label="Password"
            starRequired={true}
            inputType="text"
            fullWidth={true}
            placeholder="Enter Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                borderRadius: "10px",
                width: { xs: "100%", md: "60%" },
                fontWeight: "700",
                backgroundColor: "#f2ddff",
                color: "blue",
                fontSize: "20px",
                marginBottom:"20px"
              }}
            >
              Forgot Password
            </Button>
          </Box>
          <Typography
            sx={{ cursor: "pointer", color: "blue" }}
            onClick={() => router.push("/login")}
          >
            Back To Login →
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
