import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import CircularProgress from "@material-ui/core/CircularProgress";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import axios from "axios";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bgMain.jpg";
import { contextType } from "react-datetime";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const [user, setuser] = useState({
    username: "",
    password: "",
    isShopOwner: true,
  });
  const [loading, setloading] = useState(false);
  async function handlelogin() {
    try {
      console.log(user);
      await setloading(true)
      let resp = await axios.post(
        "https://cors-anywhere.herokuapp.com/https://c1d03b1a3fb5.ngrok.io/login",
        { ...user }
      );
      if(resp.data.Token){
props.history.push('/home')
        console.log(resp)
      }
      await setloading(false)
    } catch (e) {
      console.log(e);
      await setloading(false)
    }
  }
  return (
    <div>
      <Header absolute color="transparent" brand="Cuponzim" {...rest} />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader
                    style={{ backgroundColor: "#D72638", color: "White" }}
                    className={classes.cardHeader}
                  >
                    <h3>Login</h3>
                  </CardHeader>

                  <CardBody>
                    <CustomInput
                      labelText="Nome..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        onChange: (e) => {
                          setuser({ ...user, username: e.target.value });
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <CustomInput
                      labelText="Senha"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        onChange: (e) => {
                          setuser({ ...user, password: e.target.value });
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>

                  <CardFooter className={classes.cardFooter}>
                    {loading ? (
                      <CircularProgress color="secondary" />
                    ) : (
                      <Button
                        onClick={handlelogin}
                        simple
                        style={{ color: "#140f2d" }}
                        size="lg"
                      >
                        Entrar
                      </Button>
                    )}
                  </CardFooter>
                </form>
              </Card>
              <h4 style={{ textAlign: "center" }}>
                Ainda não possui uma conta?
                <a href="/register-page">
                  {" "}
                  <span style={{ color: "#D72638", fontWeight: "700" }}>
                    Cadastre-se
                  </span>
                </a>
              </h4>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
