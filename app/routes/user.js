import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.get('store').findAll('user');
  }
});
// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   ajax: Ember.inject.service(),
//   model() {
//     return this.get('ajax').request('/user');
//   }
// });