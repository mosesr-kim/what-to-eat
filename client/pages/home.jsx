import React from 'react';
import Header from '../components/header.jsx';
import { ThemeProvider } from '@material-ui/core/styles';

export default function Home(props) {
  return (
    <>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </>
  );
}
