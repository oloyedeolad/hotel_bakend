
exports.up = function(knex) {
  return knex.schema.createTable('transport_type', function (table) {
      table.increments();
      table.string('type');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.dropTable('transport_type');
};
