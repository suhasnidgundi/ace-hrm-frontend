import { useState } from "react";
import { useLogin } from "@refinedev/core";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import { HrLogo } from "@/icons";
import { AuthPage, ThemedTitleV2 } from "@refinedev/mui";

export const PageLogin = () => {
  const { mutate: login } = useLogin();

  const RememeberMe = () => {
    const { register } = useFormContext();

    return (
      <FormControlLabel
        sx={{
          span: {
            fontSize: "12px",
            color: "text.secondary",
          },
        }}
        color="secondary"
        control={
          <Checkbox size="small" id="rememberMe" {...register("rememberMe")} />
        }
        label="Remember me"
      />
    );
  };

  return (
    <Box
      sx={{
        position: "relative",
        background:
          "linear-gradient(180deg, #7DE8CD 0%, #C6ECD9 24.5%, #5CD6D6 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
      }}
    >
      <AuthPage
        type="login"
        rememberMe={<RememeberMe />}
        title="ACE HRM"
      />

      <Box
        sx={{
          zIndex: 1,
          width: {
            xs: "240px",
            sm: "370px",
            md: "556px",
          },
          height: {
            xs: "352px",
            sm: "554px",
            md: "816px",
          },
          position: "absolute",
          left: "0px",
          bottom: "0px",
        }}
      >
        <img
          src="/images/login-left.png"
          alt="flowers"
          width="100%"
          height="100%"
        />
      </Box>
      <Box
        sx={{
          zIndex: 1,
          width: {
            xs: "320px",
            sm: "480px",
            md: "596px",
          },
          height: {
            xs: "312px",
            sm: "472px",
            md: "584px",
          },
          position: "absolute",
          right: "0px",
          top: "0px",
        }}
      >
        <img
          src="/images/login-right.png"
          alt="flowers"
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  );
};
