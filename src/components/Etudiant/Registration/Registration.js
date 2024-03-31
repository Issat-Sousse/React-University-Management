import React from "react";
import { Avatar, Grid, Paper, TextField, Typography, Button } from "@mui/material";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const Registration = () => {
    const paperStyle = { padding: 20, width: 500, margin: "0 auto" }
    const headerStyle = { margin: '0' }
    const fieldStyle = { marginBottom: '20px' } // Déclaration de fieldStyle
    const initialValues = {
        role: '',
        name: '',
        prenom: '',
        cin: '',
        dateNaissance: '',
        lieuNaissance: '',
        nationalite: '',
        specialite: '',
        grade: '',
        situation: '',
        diplome: '',
        genre: '',
        email: '',
        tel: '',
        password: ''
    }
    const onSubmit = (values, props) => {
        console.log(values);
        console.log(props);
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000)
    }
    const validationSchema = Yup.object().shape({
        role: Yup.string().required("Choisissez un rôle"),
        name: Yup.string().min(3, "It's too short").required("Required"),
        prenom: Yup.string().min(3, "It's too short").required("Required"),
        cin: Yup.string().required("Required"),
        dateNaissance: Yup.date().required("Required"),
        lieuNaissance: Yup.string().required("Required"),
        nationalite: Yup.string().required("Required"),
        specialite: Yup.string().required("Required"),
        grade: Yup.string().required("Required"),
        situation: Yup.string().required("Required"),
        diplome: Yup.string().required("Required"),
        genre: Yup.string().required("Required"),
        email: Yup.string().email("Enter a valid email").required("Required"),
        tel: Yup.string().required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required")
    })

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={{ backgroundColor: '#1976D2', color: '#fff' }}><AccountBoxOutlinedIcon /></Avatar>
                    <h2 style={headerStyle}>Inscription</h2>
                    <Typography gutterBottom variant="caption">Veuillez remplir ce formulaire pour vous inscrire</Typography>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}>
                        {(props) => (
                            <form onSubmit={props.handleSubmit}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Rôle</FormLabel>
                                    <RadioGroup
                                        aria-label="role"
                                        name="role"
                                        value={props.values.role}
                                        onChange={props.handleChange}>
                                        <FormControlLabel value="etudiant" control={<Radio />} label="Étudiant" />
                                        <FormControlLabel value="enseignant" control={<Radio />} label="Enseignant" />
                                    </RadioGroup>
                                    <ErrorMessage name="role" component="div" style={{ color: 'red' }} />
                                </FormControl>

                                {props.values.role === "etudiant" && (
                                    <React.Fragment>
                                        <Field
                                            as={TextField}
                                            name="name"
                                            label='Nom'
                                            placeholder="Entrer votre nom"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="prenom"
                                            label='Prénom'
                                            placeholder="Entrer votre prénom"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                            
                                        />
                                        <Field
                                            as={TextField}
                                            name="cin"
                                            label='CIN'
                                            placeholder="Entrer votre CIN"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="dateNaissance"
                                            label='Date de naissance'
                                            type="date"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="lieuNaissance"
                                            label='Lieu de naissance'
                                            placeholder="Entrer votre lieu de naissance"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="nationalite"
                                            label='Nationalité'
                                            placeholder="Entrer votre nationalité"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="specialite"
                                            label='Spécialité'
                                            placeholder="Entrer votre spécialité"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="diplome"
                                            label='Diplôme'
                                            placeholder="Entrer votre diplôme"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="situation"
                                            label='Situation'
                                            placeholder="Entrer votre situation"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="genre"
                                            label='Genre'
                                            placeholder="Entrer votre genre"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                    </React.Fragment>
                                )}

                                {props.values.role === "enseignant" && (
                                    <React.Fragment>
                                        <Field
                                            as={TextField}
                                            name="name"
                                            label='Nom'
                                            placeholder="Entrer votre nom"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="prenom"
                                            label='Prénom'
                                            placeholder="Entrer votre prénom"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="cin"
                                            label='CIN'
                                            placeholder="Entrer votre CIN"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="dateNaissance"
                                            label='Date de naissance'
                                            type="date"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="lieuNaissance"
                                            label='Lieu de naissance'
                                            placeholder="Entrer votre lieu de naissance"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="nationalite"
                                            label='Nationalité'
                                            placeholder="Entrer votre nationalité"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="specialite"
                                            label='Spécialité'
                                            placeholder="Entrer votre spécialité"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="grade"
                                            label='Grade'
                                            placeholder="Entrer votre grade"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                        <Field
                                            as={TextField}
                                            name="genre"
                                            label='Genre'
                                            placeholder="Entrer votre genre"
                                            fullWidth
                                            required
                                            style={fieldStyle} // Ajout du style pour les champs
                                        />
                                    </React.Fragment>
                                )}

                                <Field
                                    as={TextField}
                                    name="email"
                                    label='Email'
                                    placeholder="Entrer votre email"
                                    fullWidth
                                    required
                                    style={fieldStyle} // Ajout du style pour les champs
                                />
                                <Field
                                    as={TextField}
                                    name="tel"
                                    label='Téléphone'
                                    placeholder="Entrer votre téléphone"
                                    fullWidth
                                    required
                                    style={fieldStyle} // Ajout du style pour les champs
                                />
                                <Field
                                    as={TextField}
                                    name="password"
                                    label='Mot de passe'
                                    placeholder="Entrer votre mot de passe"
                                    type="password"
                                    fullWidth
                                    required
                                    style={fieldStyle} // Ajout du style pour les champs
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    style={{ backgroundColor: '#1976D2', marginTop: '20px' }}
                                    disabled={props.isSubmitting}>
                                    {props.isSubmitting ? "Loading" : "Envoyer"}
                                </Button>
                            </form>
                        )}
                    </Formik>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Registration;
