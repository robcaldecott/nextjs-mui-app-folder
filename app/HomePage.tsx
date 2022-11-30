"use client";

import { Container, Grid, MenuItem, TextField } from "@mui/material";

export function HomePage() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <TextField fullWidth placeholder="Search" />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField select fullWidth label="Country" value="GB">
            <MenuItem value="GB">UK</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </Container>
  );
}
