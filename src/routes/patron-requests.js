import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';
import { FormattedMessage } from 'react-intl';
import {
  Button,
  Headline,
  Pane,
  Paneset
} from '@folio/stripes-components';
import { SearchAndSort } from '@folio/stripes/smart-components';

const INITIAL_RESULT_COUNT = 100;

export default class PatronRequests extends React.Component {
  static manifest = Object.freeze({
    agreements: {
      type: 'okapi',
      path: 'rs/patronrequests',
      records: 'results',
      recordsRequired: '%{resultCount}',
      perRequest: 100,
      limitParam: 'perPage',
      query: {},
      resultCount: { initialValue: INITIAL_RESULT_COUNT },
    }
  });

  static propTypes = {
    match: PropTypes.object.isRequired,
    resources: PropTypes.object,
    mutator: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.onClose = this.onClose.bind(this);
    this.state = { };
  }

  onClose() {
    this.toggleModal(false);
  }

  render() {
    const { mutator, resources } = this.props;
    const path = '/rs/patronrequests';
    return (
      <React.Fragment>
        <SearchAndSort 
	  key="patronrequests"
          objectName="patronrequest"
          initialResultCount={INITIAL_RESULT_COUNT}
          resultCountIncrement={INITIAL_RESULT_COUNT}
          viewRecordPerms="module.rs.enabled"
          newRecordPerms="module.rs.enabled"
          parentResources={{
            ...resources,
            records: resources.patronrequests,
          }}
          parentMutator={{
            ...mutator,
            records: mutator.patronrequests,
          }}
          showSingleResult
          visibleColumns={[
            'id',
            'title',
            'patronReference',
          ]}
          columnMapping={{
            id: <FormattedMessage id="ui-rs.patronrequests.id" />,
            title: <FormattedMessage id="ui-rs.patronrequests.title" />,
            patronReference: <FormattedMessage id="ui-rs.patronrequests.patronReference" />
          }}
          columnWidths={{
            id: 300,
            title: 200,
            patronReference: 120,
          }}
          resultsFormatter={{
          }}
        />
      </React.Fragment>
    )
  }
}
