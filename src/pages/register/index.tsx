import {
  Box,
} from "@mui/material";
import { AuthPage, ThemedTitleV2 } from "@refinedev/mui";
import GoogleIcon from '@mui/icons-material/Google';

export const PageRegister = () => {
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
        type="register"
        title="ACE HRM"
        providers={[
          {
            name: "google",
            // icon: GoogleIcon,
            label: "Sign in with Google",
          }
        ]}
        formProps={{

        }}
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
