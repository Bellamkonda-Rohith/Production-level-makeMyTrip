import React from 'react'
import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
const Custombutton = ({ text1, text2, variant, color, fontsize, fontcolor, size, className, onClick, ...props }) => {
    return (
        <>
            <Button
                variant={variant}
                color={color}
                size={size}
                {...props}
                className={className}
                text1={text1}
                text2={text2}
                onClick={onClick}
            >
                <Box textAlign="start">
                    <Typography variant="body1" component="div" fontSize={fontsize} color={fontcolor}>
                        {text1}
                    </Typography>
                    <Typography variant="body2" component="div" fontSize={fontsize} color={fontcolor}>
                        {text2}
                    </Typography>
                </Box>
            </Button>
        </>
    )
}

export default Custombutton
