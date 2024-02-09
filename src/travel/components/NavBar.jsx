
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button, Tabs, Tab, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import { CreateComponent } from './CreateComponent';
import { ReadComponent } from './ReadComponent';
import { UpdateComponent } from './UpdateComponent';
import { DeleteComponent } from './DeleteComponent';


export const NavBar = () => {

    const [value, setValue] = useState(0)

    const handlePage = (index) => {
        setValue(index);

    }

    const renderContent = () => {
        switch (value) {
            case 0:
                return <CreateComponent />;
            case 1:
                return <ReadComponent />;
            case 2:
                return <UpdateComponent />;
            case 3:
                return <DeleteComponent />;
            default:
                return null;
        }
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Travel App
                        </Typography>
                        <RouterLink component={RouterLink} to="/auth/login">
                            <Button variant="contained">Salir</Button>
                        </RouterLink>
                    </Toolbar>
                </AppBar>
            </Box>

            <Card style={{ display: 'flex', flexDirection: 'vertical' }}>
                <CardContent sx={{ backgroundColor: 'three.main', height: '535px', width: '360px', paddingTop: '150px' }}>
                    <Tabs
                        value={value}
                        orientation="vertical"
                    >
                        <Tab label="Create" onClick={() => handlePage(0)} />
                        <Tab label="Read" onClick={() => handlePage(1)} />
                        <Tab label="Update" onClick={() => handlePage(2)} />
                        <Tab label="Delete" onClick={() => handlePage(3)} />
                    </Tabs>
                </CardContent>

                <CardContent
                    sx={{
                        backgroundColor: 'three.main',
                        height: '535px',
                        width: '1136px',
                        paddingBottom: '50px',
                    }}>
                    <CardContent

                        sx={{
                            height: '500px',
                            padding: '50px',
                            borderRadius: '12px',
                            backgroundColor: 'primary.main'
                        }}>


                        {renderContent()}
                    </CardContent>



                </CardContent>
            </Card>




        </>
    )
}
