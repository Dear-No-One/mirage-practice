import Ember from 'ember';
// import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
         blogs: this.get('store').findAll('blog'),
         member: this.get('store').peekAll('member') 
     });
      // return this.get('store').findAll('blog');
  }
});
