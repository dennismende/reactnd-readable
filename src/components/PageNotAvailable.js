import React from 'react';
import {
  Grid,
  Header,
} from 'semantic-ui-react';

const PageNotAvailable = () => (
  <Grid>
    <Grid.Row>
      <Header size='huge'>404 - Page Not Found</Header>
    </Grid.Row>
    <Grid.Row>
      The page you are looking for doesn't exist.

      Please check your entered URL.
    </Grid.Row>
  </Grid>
);

export default PageNotAvailable;
