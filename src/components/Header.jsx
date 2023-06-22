import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import Form from './Form';
// import headerImage from '../assets/crmheader.avif'

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: 'blue',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>

            <BoxText 
            component='section'
            >

                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#fff',
                }}
                >
                    Best CRM Software in Dubai - 2023
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#fff',
                }}
                >
                   Discover our features and pricing to see why we 
                   stand out among the competition as the best CRM 
                   software in Dubai.
                </Typography>

                <Box>
                    <Button 
                    component={Link} 
                    to={'/about'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#fff',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        "&&:hover": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        }
                    }}
                    >
                        Book Free Demo Now
                    </Button>
                </Box>
            </BoxText>
<BoxText>
<Form></Form>

</BoxText>
            {/* <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <div >

                </div>
                {/* <img
                src={headerImage}
                alt="headerImg"
                style={{ 
                    width: "100%", 
                    marginBottom: -3,
                    marginTop:-80,
                }}
                /> */}
            {/* </Box> */} 

        </CustomBox>
    )
}

export default Header