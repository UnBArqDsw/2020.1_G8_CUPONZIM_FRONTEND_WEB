import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import TextField from "@material-ui/core/TextField";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import profile from "assets/img/faces/christian.jpg";
import Paper from "@material-ui/core/Paper";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import image from "assets/img/indice.jpeg";
const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const rows = [
    createData(1, "PS5 PROMO", "10/11/2020", 0),
    createData(2, "PS5 PROMO", "10/11/2020", 1),
    createData(3, "PS5 PROMO", "10/11/2020", 0),
    createData(4, "PS5 PROMO", "10/11/2020", 0),
    createData(5, "PS5 PROMO", "10/11/2020", 1),
    createData(6, "HOMEM ARANHA", "9/08/2020", 1),
    createData(7, "HOMEM ARANHA", "9/08/2020", 0),
    createData(8, "HOMEM ARANHA", "9/08/2020", 1),
    createData(9, "HOMEM ARANHA", "9/08/2020", 0),
    createData(10, "HOMEM ARANHA", "9/08/2020", 1),
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 id="simple-modal-title">Text in a modal</h4>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Cuponzim"
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/fundinho.png")} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Paper style={{ width: "30%", margin: "auto", padding: "5px" }}>
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
            Cadastre de novos cupons!
          </h3>

          <TextField
            id="standard-basic"
            label="Descrição"
            style={{ margin: "20px", textAlign: "center" }}
          />
          <TextField
            id="standard-basic"
            label="Preço Original"
            style={{ margin: "20px", textAlign: "center" }}
          />
          <TextField
            id="standard-basic"
            label="Preço com desconto"
            style={{ margin: "20px", textAlign: "center" }}
          />
          <TextField
            id="standard-basic"
            label="data de vencimento"
            style={{ margin: "20px", textAlign: "center" }}
          />
          <TextField
            id="standard-basic"
            label="Qtd de cupons"
            style={{ margin: "20px", textAlign: "center" }}
          />

          <Button
            variant="contained"
            style={{ backgroundColor: "#D72638", margin: "40px" }}
          >
            Criar Lote
          </Button>
        </Paper>
      </Modal>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={image} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>MRD Nerdstore</h3>
                    <h6>10 Cupons</h6>
                    <Fab
                      aria-label="add"
                      onClick={handleOpen}
                      style={{
                        float: "right",
                        marginBottom: "20px",
                        backgroundColor: "#D72638",
                        color: "white",
                      }}
                    >
                      <AddIcon />
                    </Fab>
                    
                    <TableContainer
                      component={Paper}
                      style={{ marginBottom: "40px" }}
                    >
                      <Table
                        className={classes.table}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Lote</TableCell>
                            <TableCell align="right">Criado</TableCell>
                            <TableCell align="right">Usado?</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>
                              <TableCell align="right">
                                {row.calories}
                              </TableCell>
                              <TableCell align="right">{row.fat}</TableCell>
                              <TableCell align="right">{row.carbs?(<h4 style={{color:"green"}}>SIM</h4> ):(<h4  style={{color:"red"}}>NÃO</h4> )}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
