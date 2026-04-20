"use client";

import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { hideNotification } from "@/redux/notificationslice";

export default function Notification() {
  const dispatch = useDispatch();

  const { open, message, severity } = useSelector(
    (state: RootState) => state.notification
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => dispatch(hideNotification())}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        severity={severity}
        variant="filled"
        onClose={() => dispatch(hideNotification())}
         sx={{borderRadius:"20px"}}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}