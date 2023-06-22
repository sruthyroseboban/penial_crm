import React from 'react'
import { 
    Grid,
    styled,
    Typography,
} from '@mui/material'

const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor:'black',
        background: "linear-gradient(#161616, #484444);",
    })
    const TitleTypography=styled(Typography)({
        fontSize: '3rem',
        lineHeight: '1.5',
        color: 'white',
        marginTop: '1.5rem',
        justifyContent: 'center',
        paddingLeft:'60px'


    })
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: 'white',
        marginTop: '1.5rem',
        marginBottom:'2rem',
        paddingLeft:'60px'
    })

    return (
            
        <Grid 
        >
            <CustomGridItem
            component = 'section'
           
            >
                
                    <TitleTypography>
                    Build excellent customer relationships
                    </TitleTypography>
                   
                    <CustomTypography>
                        Listing are updated continuously so you
                        won't miss out on homes that just hit
                        market until you find your perfect home.
                    </CustomTypography> 

            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;