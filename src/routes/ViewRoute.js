import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button, ButtonGroup, Layout, Pane, Paneset } from '@folio/stripes/components';
import css from './ViewRoute.css';
import ViewPatronRequest from '../components/ViewPatronRequest';

const ViewRoute = ({ children, history, location: { pathname }, match: { url, params } }) => (
  <React.Fragment>
    <Paneset>
      <Pane
        paneTitle={`Request ${params.id}`}
        padContent={false}
        onClose={history.goBack}
        dismissible
        defaultWidth="fill"
        subheader={
          <Layout className={`${css.tabContainer} flex centerContent flex-align-items-center full padding-start-gutter padding-end-gutter`}>
            <ButtonGroup>
              <Button marginBottom0 to={`${url}/flow`} buttonStyle={pathname.includes('/flow') ? 'primary' : 'default'}>
                <FormattedMessage id="ui-rs.flow.flow" />
              </Button>
              <Button marginBottom0 to={`${url}/details`} buttonStyle={pathname.includes('/details') ? 'primary' : 'default'}>
                <FormattedMessage id="ui-rs.flow.details" />
              </Button>
            </ButtonGroup>
          </Layout>
        }
      >
        {children}
      </Pane>
    </Paneset>
  </React.Fragment>
);

ViewRoute.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
    url: PropTypes.object
  }).isRequired,
  location: PropTypes.shape({ pathname: PropTypes.object }).isRequired,
  history: PropTypes.object.isRequired
};

export default ViewRoute;
