import React from "react";
import { Avatar,Grid, Paper, TextField, Typography, Button } from "@mui/material";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import {Formik,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {FormHelperText} from '@mui/material';


const registration =()=>{
    const paperStyle= {padding: 20 , width:300, margin:"0 auto"}
    const headerStyle={margin:'0'}
    const initialValues={
        name:'',
        blood:'',
        age:'',
        gender:'',
        email:'',
        phone:'',
        password:'',
        terms:false
    }
    const onSubmit=(values, props)=>{
        console.log(values);
        console.log(props);
        setTimeout(()=>{
            props.resetForm();
            props.setSubmitting(false);
        },2000)
    }
    const validationSchema=Yup.object().shape({
        name:Yup.string().min(3,"It's too short").required("Required"),
        blood:Yup.string().oneOf(["a+","A+","b+","B+","o+","O+","AB+","ab+","a-","A-","b-","B-","o-","O-","AB-","ab-"],"Enter a valid tybe blood").required("Required"),
        age:Yup.number().typeError("Enter a valid age").required("Required"),
        gender:Yup.string().oneOf(["male", "female"],"Choose an appropiate gender").required("Required"),
        email:Yup.string().email("Enter a valid email").required("Required"),
        phone:Yup.number().typeError("Enter a valid phone number").required("Required"),
        password:Yup.string().min(8,"Password minimum length should be 8").required("Required"),
        terms:Yup.string().oneOf(["true"],"Accept terms and conditions")
    })
    return(
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={{ backgroundColor: '#1976D2', color: '#fff' }}><AccountBoxOutlinedIcon></AccountBoxOutlinedIcon></Avatar>
                    <h2 style={headerStyle}>Inscription</h2>
                    <Typography gutterBottom variant="caption">veuillez remplir ce formulaire pour s'inscrire</Typography>
                    <Formik 
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}>
                        {(props)=>(
                            <form>
                                <Field
                                    helperText={<ErrorMessage name="name"></ErrorMessage>} 
                                    as ={TextField}
                                    name="name"
                                    label='Nom'
                                    placeholder="Entrer votre nom"
                                    fullWidth
                                    required>
                                </Field>
        
                                <Field 
                                    helperText={<ErrorMessage name="Prenom"></ErrorMessage>}
                                    as ={TextField}
                                    name="Prenom"
                                    label=' Prenom'
                                    placeholder="Entrer votre prenom"
                                    fullWidth
                                    required>
                                </Field>
        
                                <Field 
                                    helperText={<ErrorMessage name="CIN"></ErrorMessage>}
                                    as ={TextField}
                                    name="CIN"
                                    label='CIN'
                                    placeholder="Enter votre cin"
                                    fullWidth
                                    required>
                                </Field>
                                <Field
                                    helperText={<ErrorMessage name="Date de naissance"></ErrorMessage>}
                                    as ={TextField} 
                                    name="Date de naissance"
                                    label='Date de naissance'
                                    placeholder="Entrer votre Date de naissance"
                                    fullWidth
                                    required
                                    type="Date de naissance">
                                </Field>
                               
                                
                                <Field
                                    helperText={<ErrorMessage name="Lieu e naissance"></ErrorMessage>}
                                    as ={TextField} 
                                    name="lieu e naissance"
                                    label='Lieu de naissance'
                                    placeholder="Entrer votre lieu de naissance"
                                    fullWidth
                                    required
                                    type="lieu de naissance">
                                </Field>
                                <Field
                                    helperText={<ErrorMessage name="Nationalité"></ErrorMessage>}
                                    as ={TextField} 
                                    name="Nationalité"
                                    label='Nationalité'
                                    placeholder="Entrer votre Nationalité"
                                    fullWidth
                                    required
                                    type="Nationalité">
                                </Field>

                                <Field
                                    helperText={<ErrorMessage name="Specialité"></ErrorMessage>}
                                    as ={TextField} 
                                    name="Specialité"
                                    label='Specialité'
                                    placeholder="Entrer votre Specialité"
                                    fullWidth
                                    required
                                    type="Specialité">
                                </Field>
                                <Field
                                    helperText={<ErrorMessage name="Grade"></ErrorMessage>}
                                    as ={TextField} 
                                    name="Grade"
                                    label='Grade'
                                    placeholder="Entrer votre Grade"
                                    fullWidth
                                    required
                                    type="Grade">
                                </Field>
                                
        
                                <FormControl style={{marginTop:5}} align='left'>
                                    <FormLabel id="demo-radio-buttons-group-label">Genre</FormLabel>
                                    <Field
                                        helperText={<ErrorMessage name="gender"></ErrorMessage>}
                                        as={RadioGroup}
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="gender"
                                        style={{display:'initial'}}>
                                        <FormControlLabel value="female" control={<Radio style={{ color: '#1976D2' }} />} label="Feminin" />
                                        <FormControlLabel value="male" control={<Radio style={{ color: '#1976D2' }} />} label="Masculin" />
                                    </Field>
                                </FormControl>
                                <FormHelperText><ErrorMessage name="gender"></ErrorMessage></FormHelperText>

                                <Field 
                                    helperText={<ErrorMessage name="email"></ErrorMessage>}
                                    as ={TextField}
                                    name="email"
                                    label='Email'
                                    placeholder="Enter your email"
                                    fullWidth
                                    required
                                    type="email">
                                </Field>
        
                                <Field 
                                    helperText={<ErrorMessage name="phone"></ErrorMessage>}
                                    as ={TextField}
                                    name="phone"
                                    label='Tel'
                                    placeholder="entrer votre numero de telephone"
                                    fullWidth
                                    required>
                                </Field>
        
                                <Field
                                    helperText={<ErrorMessage name="password"></ErrorMessage>}
                                    as ={TextField} 
                                    name="password"
                                    label='Mot de Passe'
                                    placeholder="Entrer votre mot de passe"
                                    fullWidth
                                    required
                                    type="password">
                                </Field>
                                
                                <FormGroup>
                                    <FormControlLabel control={<Field 
                                    as={Checkbox} 
                                    style={{ color: '#1976D2' }}
                                    name="terms" 
                                    defaultChecked
                                    helperText={<ErrorMessage name="terms"></ErrorMessage>} />} 
                                    label="J'accepte les termes et les conditions." />
                                </FormGroup> 
                                <FormHelperText><ErrorMessage name="terms"></ErrorMessage></FormHelperText>

                                <Button 
                                type="submit" 
                                fullWidth 
                                variant="contained" 
                                className="button"
                                style={{ backgroundColor: '#1976D2' }}
                                disabled={props.isSubmitting}>
                                {props.isSubmitting?"Loading":"Envoyer"}
                                </Button>
    
                            </form>

                        )}
                    </Formik>
                </Grid>
                       
            </Paper>
        </Grid>
    )
}

export default registration;