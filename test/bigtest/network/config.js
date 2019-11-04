
// typical mirage config export
// http://www.ember-cli-mirage.com/docs/v0.4.x/configuration/
export default function config() {
	const server = this;

	// okapi endpoints
  this.get('/_/version', () => '0.0.0');

  this.get('_/proxy/tenants/:id/modules', [
    {
      id: 'mod-circulation-16.0.0-SNAPSHOT.253',
      name: 'Circulation Module',
      provides: [
        { id: 'circulation', version: '7.4' },
        { id: 'loan-policy-storage', version: '7.4' },
      ]
    },
  ]);

  this.get('/saml/check', {
    ssoEnabled: false
  });

  this.get('/configurations/entries', {
    configs: []
	});

	server.get('rs/patronrequests', ({ patronrequests }) => {
		return patronrequests.all();
	});

	server.get('rs/patronrequests/:id', (schema, request) => {
		return schema.patronrequests.find(request.params.id).attrs;
	});
}
