import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '@folio/stripes/components';
import { FormattedMessage } from 'react-intl';

export default class GeneralSettings extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Pane defaultWidth="fill" fluidContentWidth paneTitle={this.props.label}>
        <div data-test-application-settings-general-message>
          <FormattedMessage id="ui-rs.settings.general.message" />
        </div>
      </Pane>
    );
  }
}
