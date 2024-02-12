/** @jsxImportSource @emotion/react */
import React from 'react';
import { Grid } from '@mui/material';
import { css } from '@emotion/react'

const outerContainer = css({
  width: '100vh',
  height: '100vh'
})

const headerStyles = css({
  padding: '10px',
  background: 'blue'
})

export const Home = () => {

  return (
    <Grid container css={outerContainer}>
      <Grid item xs={12}>
        <div css={headerStyles} >
          Header
        </div>
      </Grid>
    </Grid>
  )
};
