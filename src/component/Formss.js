import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import "../styling/formss.css";
// import { styled } from "@material-ui/core";

// const StyledTextField = styled(TextField)``;
// &.MuiOutlinedInput-notchedOutline{borderColor: 'white'}

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup
    .string("Enter your Name")
    .min(3, "Name should be of minimum 3 characters length")
    .required("Name is required"),
});

const useStyles = makeStyles({
  // root:{
  //   '&$focused $notchedOutline':{
  //     borderColor: 'white'
  //   }
  // },
  // focused:{},
  // notchedOutline:{},
  // form: {
  //   width: "50%",
  //   margin: "0 auto",
  // },
  textfield: {
    color:"#FFFFFF",
    maxWidth: 600,
    margin: "20px auto",
    
  },
  address: {
    display: "flex",
    justifyContent: "space-between",
  },
  contactHeader: {
    width: "50%",
    margin: "2rem auto",
  },
  button: {
    backgroundColor: "#1A2B6D",
    letterSpacing: "1.5px",
    textTransform: "capitalize",
    padding: "1rem 2rem",
    "&:hover": {
      backgroundColor: "#D41317",
    },
  },
});

const Formss = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const classes = useStyles();
  return (
    <div className="container" id="contactUs">
      <h2 >
        Contact Us
      </h2>
      <form onSubmit={formik.handleSubmit} className='form' noValidate>
        <TextField
          InputLabelProps={{
            style: {
              color: "white",
              fontSize: "1rem",
              
            },
          }}
          inputProps={{
            style:{
              color: 'white'
            }
          }}
          // inputProps={{
          //   classes:{
          //     root: classes.root,
          //     focused: classes.focused,
          //     notchedOutline: classes.notchedOutline
          //   }
          // }}
          required
          variant="outlined"
          className={classes.textfield}
          fullWidth
          id="name"
          name="name"
          label="Enter Your Name"
          // placeholder="Enter Your Name"
          type="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          InputLabelProps={{
            style: {
              color: "white",
              fontSize: "1.1rem",
            },
          }}
          inputProps={{
            style:{
              color: 'white'
            }
          }}
          required
          className={classes.textfield}
          variant="outlined"
          fullWidth
          id="email"
          name="email"
          label="Enter Your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          InputLabelProps={{
            style: {
              color: "white",
              fontSize: "1.1rem",
            },
          }}
          inputProps={{
            style:{
              color: 'white'
            }
          }}
          className={classes.textfield}
          label="Type Your Message Here..."
          variant="outlined"
          fullWidth
          multiline
          rows={5}
        />
        <br />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          className={classes.button}
        >
          Submit
        </Button>
      </form>
      <div
        className={`${classes.address} ${classes.contactHeader} addressSection`}
      >
        <p>Address. 500 Terry Francois Street San Francisco, CA 94158</p>
        <p>Tel. 123-456-7890</p>
        <p>Email. info@mysite.com</p>
      </div>
      <p className={classes.contactHeader}>
        @Copyright 2022 - Created by Sanky2020
      </p>
    </div>
  );
};
export default Formss;
