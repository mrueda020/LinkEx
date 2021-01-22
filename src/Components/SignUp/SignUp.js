import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { PostData } from "../Services/PostData";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        LinkEX
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignUp() {
  const [user, setUser] = useState({
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    redirectToReferrer: false
  });

  const classes = useStyles();

  const signup = () => {
    console.log(user);
    PostData("signup", user).then(result => {
      let responseJson = result;
      if (responseJson.userData) {
        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        setUser({ ...user, redirectToReferrer: true });
      } else {
        document.getElementById("id01").style.display = "block";
      }
    });
    var x = document.getElementById("myTopnav");
    if ((x.className = "topnav responsive")) {
      x.className = "topnav";
    }
  };

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  if (user.redirectToReferrer || sessionStorage.getItem("userData")) {
    return <Redirect to={"/home"} />;
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registro
        </Typography>
        <div className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                label="Nombre"
                autoFocus
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Apellidos"
                name="lastname"
                autoComplete="lname"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signup}
          >
            Registrate
          </Button>
        </div>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>

      <div id="id01" className="w3-modal">
        <div className="w3-modal-content">
          <div
            className="w3-container w3-black w3-animate-opacity"
            style={{ textAlign: "center" }}
          >
            <span
              onClick={() => {
                document.getElementById("id01").style.display = "none";
              }}
              className="w3-button w3-display-topright"
            >
              X
            </span>
            <p style={{ fontSize: "20px" }}>
              Llena los datos correspondientes.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SignUp;
