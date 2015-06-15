import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  author: DS.belongsTo('author', {async: true}),
  comments: DS.hasMany('comment', {async: true}),
  title: attr('string'),
  body: attr('string')
});
