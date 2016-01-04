import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('svg-link-to', 'Integration | Component | svg link to', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{svg-link-to}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#svg-link-to}}
      template block text
    {{/svg-link-to}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
