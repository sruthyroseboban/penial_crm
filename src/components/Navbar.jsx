import React from 'react'
import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';

import { Link } from 'react-router-dom';
import headerImage from '../assets/peniel-technology-logo.png'


const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "Bigin",
      to: "/" 
    },
    {
      text: "CRM Plus",
      to: "/"
    },
    {
        text: "Desk",
        to: "/"
    },
    {
        text: "Campaigns",
        to: "/"
    },
    {
        text: "Surveys",
        to: "/"
    },
    {
        text: "TeamInbox",
        to: "/"
    },
    // {
    //     text: "All Products",
    //     to: "/"
    // }
];


const Navbar = () => {
    
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: 'white', 
        }}
        elevation={0}
        >
            <StyledToolbar>
                   <img
                src={headerImage}
                alt="headerImg"
                style={{ 
                    marginBottom: -3,
                    marginTop:15,
                    marginLeft:30,
                }}
                /> 
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: 'black',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#1e2a5a',
                                    }
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
