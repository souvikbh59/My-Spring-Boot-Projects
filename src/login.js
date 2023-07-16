import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
  Paper,
  Avatar,
} from "@material-ui/core";

import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 380,
    margin: "20px auto",
  };
  const avatarColor = { backgroundColor: "green" };
  const btnStyle = { margin: "8px 0" };
  const linkStyle = { margin: "5px 0", FontFace: "bold" };

  const handleLogin = (e) => {
    console.log("Data log is :" + email, password);
    if (email === "admin" && password === "admin") {
      navigate("/front");
    } else if (email !== "" && password !== "") {
      alert("Wrong Credentials !!!");
    }
  };
  return (
    <>
      <form action="">
        <Container>
          <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                <Avatar style={avatarColor}>
                  <LockIcon />
                </Avatar>
                <h1>Log In</h1>
              </Grid>

              <TextField
                label="Email or Username"
                placeholder="Email or Username"
                fullWidth
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                label="Password"
                placeholder="Password"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <FormControlLabel
                control={<Checkbox name="checkdB" colour="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                style={btnStyle}
                onClick={() => handleLogin()}
              >
                Login
              </Button>
              <Typography>
                <Link href="#" align="left" style={linkStyle}>
                  Forgot Password ?
                </Link>
              </Typography>
              <Typography>
                <Link href="#" variant="body2" align="right">
                  Get me a coffee ?
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Container>
      </form>
    </>
  );
};

export default Login;
