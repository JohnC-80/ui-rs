/* istanbul ignore file */

// default scenario is used during `yarn start --mirage`
export default function defaultScenario(server) {
  server.create('patronrequests', { id: 'request007' });
  server.createList('patronrequests', 5);
}
