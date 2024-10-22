import React, { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

interface SnackbarProps {
  message: string;
  severity: 'success' | 'error' | 'warning' | 'info';
  open: boolean;
  onClose: () => void;
}

const SnackbarProvider: React.FC<SnackbarProps> = ({ message, severity, open, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarProvider;