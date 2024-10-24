import React from 'react';
import { Box, CircularProgress } from "@mui/material";

const Loader: React.FC = () => {
  return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    }}><CircularProgress style={{ 'color' : '#6D30A8' }} /></Box>
  );
};

export default Loader;