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

import image from "assets/img/register.jpg";
import route from  'react-router-dom'

const useStyles = makeStyles(styles);

export default function RegisterPage(props) {
  const [loading, setloading] = useState(false);
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  
  const [user, setuser] = useState({ username_shop: "", password_shop: "" });
  async function handlelogin() {
    setloading(true)
    try {
      console.log(user);
      let resp = await axios.post(
        "https://cors-anywhere.herokuapp.com/https://c1d03b1a3fb5.ngrok.io/shopowner",
        { ...user }
      );
     
      if(resp.data.idShopOwner){
        props.history.push('/login-page')
        setloading(false)
      }
    } catch (e) {
      console.log(e);
      setloading(false)
    }
  }
  const { ...rest } = props;
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
                    <h3>Cadastro</h3>
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
                          setuser({ ...user, username_shop: e.target.value });
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
                      id="senha"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "password",
                        onChange: (e) => {
                          setuser({ ...user, password_shop: e.target.value });
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
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
                          setuser({ ...user, password_shop2: e.target.value });
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
                        Cadastrar-se
                      </Button>
                    )}
                  </CardFooter>
                </form>
              </Card>
              <h4 style={{ textAlign: "center" }}>
                Já possui uma conta?
                <a href="/login-page">
                  {" "}
                  <span style={{ color: "#D72638", fontWeight: "700" }}>
                    Entrar
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
