import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  datePosted: DS.attr(),
  // memberId: DS.belongsTo('member', {async: true})
  memberId: DS.attr('number')
});
