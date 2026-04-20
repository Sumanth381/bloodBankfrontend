"use client";
import InputField from "@/commonComponent/textField";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import FormSingleSelected from "@/commonComponent/singleSelected";
import { RegisterUser } from "@/api/login";
import { showNotification } from "@/redux/notificationslice";
import { useDispatch } from "react-redux";

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const registerSchema = Yup.object({
    Name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone No. is required"),
    Email: Yup.string().required("Email is required"),
    address: Yup.string().required("Address is required"),
    bloodgroup: Yup.string().required("Blood Group is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      Name: "",
      phone: "",
      Email: "",
      address: "",
      bloodgroup: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const paylod = {
          name: values.Name,
          phone_number: values.phone,
          email: values.Email,
          password: values.password,
          blood_type: values.bloodgroup,
          address: values.address,
        };

        const res = await RegisterUser(paylod);

        dispatch(
          showNotification({ message: res.message, severity: "success" })
        );

        resetForm();

        router.push("/login");
      } catch (error: any) {
        console.log(error);

        dispatch(
          showNotification({
            message: error.message || "Register failed",
            severity: "error",
          })
        );

      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          backgroundImage: `url("/assets/Register_image.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={8}
            sx={{
              position: "relative",
              width: {
                xs: "90%",
                sm: "90%",
                md: "600px",
              },

              overflowY: {
                xs: "auto",
              },
              marginTop: {
                xs: "55px",
              },

              marginBottom: {
                xs: "30px",
              },

              maxWidth: "100%",
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: 3,
              zIndex: 2,
              backdropFilter: "blur(10px)",
              background: "rgba(255,255,255,0.9)",
            }}
          >
            <Typography
              variant="h5"
              textAlign="center"
              mb={2}
              fontWeight="bold"
            >
              Register
            </Typography>
            <InputField
              name="Name"
              label="Full Name"
              starRequired={true}
              inputType="text"
              fullWidth={true}
              placeholder="Enter Full Name"
              value={formik.values.Name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Name && Boolean(formik.errors.Name)}
              helperText={formik.touched.Name && formik.errors.Name}
            />
            <InputField
              name="phone"
              label="Phone No"
              starRequired={true}
              inputType="text"
              fullWidth={true}
              placeholder="Enter 10 digit phone number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
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
              name="address"
              label="Address"
              starRequired={true}
              inputType="text"
              fullWidth={true}
              placeholder="Enter Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <FormSingleSelected
              name="bloodgroup"
              label="Select Blood Group"
              starRequired={true}
              value={formik.values.bloodgroup}
              onChange={formik.handleChange}
              placeholder="Select Blood Group"
              onBlur={formik.handleBlur}
              options={[
                { label: "O+", value: "1" },
                { label: "O-", value: "2" },
                { label: "A+", value: "3" },
                { label: "A-", value: "4" },
                { label: "B+", value: "5" },
                { label: "B-", value: "6" },
                { label: "AB+", value: "7" },
                { label: "AB-", value: "8" },
              ]}
              error={
                formik.touched.bloodgroup && Boolean(formik.errors.bloodgroup)
              }
              helperText={formik.touched.bloodgroup && formik.errors.bloodgroup}
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
                  width: { xs: "100%", md: "40%" },
                  fontWeight: "700",
                  backgroundColor: "#f2ddff",
                  color: "blue",
                  fontSize: "20px",
                }}
              >
                Register
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
    </Box>
  );
};

export default Register;
