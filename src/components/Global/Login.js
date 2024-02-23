import React from "react";
import { Avatar, Button, Grid, Paper, TextField, Link, Typography } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const login = (handleChange) => {
    const navigateTo = useNavigate();
    const initialValues = {
        username: '',
        password: '',
        remembered: false
    };

    const onSubmit = (values, props) => {
        console.log(values);
        console.log(props);
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
            navigateTo('/dashboard');
        }, 1000);
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().email("Enter a valid email").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required")
    });

    return (
        <Grid>
            <Paper elevation={20} className="Login" style={{ margin: "10% auto", padding: "20px", width: "300px", textAlign: "center" }}>
                <Avatar style={{ backgroundColor: '#D20000', margin: "0 auto", marginTop: "20px" }}><LockOpenIcon /></Avatar>
                <h2 style={{ color: "black" }}>Sign in</h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {(props) => (
                        <Form>
                            <Field
                                helperText={<ErrorMessage name="username" />}
                                as={TextField}
                                name='username'
                                label='Username'
                                placeholder="Enter username"
                                fullWidth
                                required
                            />
                            <Field
                                helperText={<ErrorMessage name="password" />}
                                as={TextField}
                                name='password'
                                label='Password'
                                placeholder="Enter password"
                                fullWidth
                                required
                                type="password"
                            />
                            <FormGroup>
                                <FormControlLabel control={<Field
                                    as={Checkbox}
                                    name='remember'
                                    defaultChecked
                                    style={{ color: "#D20000" }}
                                />} label={<span style={{ color: "#D20000" }}>Remember me</span>} />
                            </FormGroup>
                            <Button
                                type="submit"
                                color="primary"
                                fullWidth
                                variant="contained"
                                className="button"
                                disabled={props.isSubmitting}
                                style={{ backgroundColor: "#D20000" }}
                            >
                                {props.isSubmitting ? "Loading" : "Sign In"}
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Typography>
                    <Link href="#" style={{ color: "#D20000", borderBottom: "none" }}>Forgot Password?</Link>
                </Typography>
                <Typography>
                    Do you have an account?{' '}
                    <Link href="#" style={{ color: "#D20000"}}>
                        Register Now
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default login;
