

export const validatorAuth = ({email,password}) => {
    
    const userData = {
        data: [
            {
                email: "jorge@gmail.com",
                password: "123456"
            },
        ]
    }
      
      for (let i = 0; i < userData.data.length; i++) {
        const user = userData.data[i];
       
        if (user.email === email && user.password === password) {
         
          console.log('¡Inicio de sesión exitoso!');
          return true; 
        }
        
      }
      
      console.log('¡Los datos de inicio de sesión son incorrectos!');
      return false; 
    
  
}
