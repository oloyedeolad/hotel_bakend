
exports.up = function(knex) {
  return knex.schema.createTable('movement', function (table) {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
      table.integer('location_id').unsigned().references('id').inTable('locations').notNullable();
      table.integer('transport_type_id').unsigned().references('id').inTable('transport_type').notNullable();
      table.string('destination').notNullable();
      table.decimal('longitude').notNullable();
      table.decimal('latitude').notNullable();
      table.decimal('price').notNullable();
      table.string('expected_time').notNullable();
      table.string('status').defaultTo('pending');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());


  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('movement');
};
