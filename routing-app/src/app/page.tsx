"use client";
import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  InputLabel,
  Input,
  Container,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
     <div style={{ display: "flex", marginLeft:"10px"
      }}
      >
        <div><Link href="/signin"  style={{marginLeft:"10px"}} >Sigin</Link></div>
     <div> <Link href="/signup" style={{marginLeft:"10px"}} >Sigup</Link></div>
     <div><Link href="./document" style={{marginLeft:"10px"}} >catchurl</Link></div>
     <div><Link href="./home/page.tsx" style={{marginLeft:"10px"}} >urlProps</Link></div>
     
     </div>
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
       
      <Card
        variant="outlined"
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="div" sx={{textAlign:"center"}} gutterBottom>
          Register Page 
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
         <FormControl fullWidth sx={{ mt: 3 }} error={!!errors.email}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
              type="email"
              placeholder="Enter an email"
            />
            {errors.email && (
              <FormHelperText sx={{color:"red"}}>{errors.email.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl fullWidth sx={{ mt: 3 }} error={!!errors.password}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <FormHelperText>This field is required</FormHelperText>
            )}
          </FormControl>
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" variant="contained">
              <Link href="/city" passHref  style={{ textDecoration: 'none', color: 'inherit' }}>
               
                  Register
                
              </Link>
            </Button>
          </Box>
        </form>
      </Card>
    
    </Container>
    </>
  );
};

export default RegisterForm;
