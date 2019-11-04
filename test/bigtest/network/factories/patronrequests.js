import { Factory, faker, trait } from '@bigtest/mirage';

export default Factory.extend({
  id: () => faker.random.uuid(),
});
