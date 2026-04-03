"use client";
import CommonSlider from "@/commonComponent/slider";
import InputField from "@/commonComponent/textField";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const router = useRouter();
  const loginSchema = Yup.object({
    Email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    Password: Yup.string()
      .min(6, "Minimum 6 characters required")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      router.push("/");
    },
  });
  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
          alignItems: "center",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/BloodBankBannerImage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          p: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: { xs: "100%", sm: "90%", md: "900px" },
            height: { xs: "auto", md: "500px" },
            backgroundColor: "#fff",
            borderRadius: "30px",
            overflow: "hidden",
            mr: { xs: 0, md: 6 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              height: { xs: "200px", sm: "250px", md: "100%" },
            }}
          >
            <CommonSlider />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: { xs: "20px", sm: "30px", md: "40px" },
            }}
          >
            <img
              src="/assets/bloodicon.svg"
              alt="bloodImage"
              style={{ height: "50px" }}
            />
            <Typography
              variant="h5"
              mb={3}
              textAlign="center"
              sx={{ fontSize: "40px", color: "#ff8533", fontWeight: "700" }}
            >
              Login
            </Typography>

            <InputField
              name="Email"
              label="Email"
              starRequired={true}
              inputType="text"
              fullWidth={true}
              placeholder="Enter Email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Email && Boolean(formik.errors.Email)}
              helperText={formik.touched.Email && formik.errors.Email}
            />

            <InputField
              name="Password"
              label="Password"
              starRequired={true}
              inputType="password"
              fullWidth={true}
              placeholder="Enter Password"
              value={formik.values.Password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.Password && Boolean(formik.touched.Password)
              }
              helperText={formik.touched.Password && formik.errors.Password}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  borderRadius: "10px",
                  width: { xs: "100%", md: "40%" },
                  fontWeight: "700",
                  backgroundColor: "#f2ddff",
                  color: "blue",
                  fontSize: "20px",
                }}

                
              >
                Login
              </Button>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "nowrap",
                  gap: "10px",
                  paddingTop: "20px",
                }}
              >
                <Typography>
                  Don't have an account?{" "}
                  <span
                    style={{
                      color: "red",
                      cursor: "pointer",
                      display: "inline-block",
                      transition: "transform 0.3s ease",
                    }}
                    onClick={() => router.push("/register")}
                    onMouseEnter={(e) => {
                      const el = e.target as HTMLElement;
                      el.style.color = "gray";
                      el.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.target as HTMLElement;
                      el.style.color = "red";
                      el.style.transform = "scale(1)";
                    }}
                  >
                    Register
                  </span>
                </Typography>

                <Typography
                  sx={{
                    color: "red",
                    cursor: "pointer",
                    display: "inline-block",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "gray",
                      transform: "scale(1.1)",
                    },
                  }}
                  onClick={() => router.push("/forgotpassword")}
                >
                  Forgot Password
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
