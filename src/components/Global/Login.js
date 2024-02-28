import React from "react";
import { Avatar, Button, Grid, Paper, TextField, Link, Typography } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Connexion = (handleChange) => {
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
                <Avatar style={{ backgroundColor: '#1976D2', margin: "0 auto", marginTop: "20px" }}><LockOpenIcon /></Avatar>
                <h2 style={{ color: "black" }}>Connexion</h2>
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
                                label='Nom'
                                placeholder="Entrer votre nom"
                                fullWidth
                                required
                            />
                            <Field
                                helperText={<ErrorMessage name="password" />}
                                as={TextField}
                                name='password'
                                label='Mot de Passe'
                                placeholder="Entrer votre mot de passe"
                                fullWidth
                                required
                                type="password"
                            />
                            <FormGroup>
                                <FormControlLabel control={<Field
                                    as={Checkbox}
                                    name='remember'
                                    defaultChecked
                                    style={{ color: "#1976D2" }}
                                />} label={<span style={{ color: "#1976D2" }}> me rappeler</span>} />
                            </FormGroup>
                            <Button
                                type="submit"
                                color="primary"
                                fullWidth
                                variant="contained"
                                className="button"
                                disabled={props.isSubmitting}
                                style={{ backgroundColor: "#1976D2" }}
                            >
                                {props.isSubmitting ? "Loading" : "Connecter"}
                            </Button>
                        </Form>
                    )}
                </Formik>
                <Typography>
                    <Link href="#" style={{ color: "#1976D2", borderBottom: "none" }}>Mot de passe oublié?</Link>
                </Typography>
                <Typography>
                    Vous avez deja un compte??{' '}
                    <Link href="#" style={{ color: "#1976D2"}}>
                        connecter d'ici
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Connexion;
