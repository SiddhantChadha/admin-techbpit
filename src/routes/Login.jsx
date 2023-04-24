import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text" align="center" {...props}>
      {"Copyright Â© "}
      <Link color="inherit" href="https://mui.com/">
        TechBPIT Admin
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 10,
          borderRadius: 2,
          p: 2,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <svg
          id="vector"
          xmlns="http://www.w3.org/2000/svg"
          width="102.51"
          height="102.51"
          viewBox="0 0 102.51 102.51"
        >
          <path fill="#2e3094" d="M0,36.42V72.83H70.14V0H0Z" id="path_0" />
          <path
            fill="#f14440"
            d="M83.63,43.16V86.32H0v16.19H102.51V0H83.63V43.16Z"
            id="path_1"
          />
        </svg>

        <Typography component="h1" variant="h3">
          TechBPIT
        </Typography>
        <Typography component="h1" variant="h5">
          Admin
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="name"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{ color: "#2E3094" }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
