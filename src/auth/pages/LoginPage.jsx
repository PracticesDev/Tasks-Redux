import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hook';
import { checkingAuthenticated, startChekingGoogle } from '../../store/auth';
import { validatorAuth } from '../validatorAuth';
import { Link } from 'react-router-dom';
import { TravelPage } from '../../travel/pages/TravelPage';
//import { TravelRoutes } from '../../travel/routes/TravelRoutes';



export const LoginPage = () => {

  const dispatch = useDispatch();

  const navivegate = useNavigate();


  const { onInputChange, email, password } = useForm({
    email: 'jorge@gmail.com',
    password: ''

  });

  const onSubmit = (event) => {

    event.preventDefault();

    if (validatorAuth({ email, password })) {
      navivegate("/travelapp")
      dispatch(checkingAuthenticated());

    } else {
      // Si la autenticación falla, manejar el caso de error
    }
  }

  const onSubmitGoogle = () => {
    alert('NO SE TIENE configuracion Back-End ')
    dispatch(startChekingGoogle());
  }


  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              name='email'
              value={email}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              name='password'
              value={password}
              onChange={onInputChange}
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button 
              type='submit' 
              variant='contained' 
              fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onSubmitGoogle}
                variant='contained'
                fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

        </Grid>


      </form>

    </AuthLayout>
  )
}
