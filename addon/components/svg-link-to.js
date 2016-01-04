import Ember from 'ember';

let {LinkComponent} = Ember;

export default LinkComponent.extend({
  attributeBindings: ['href:xlink:href'],
});
