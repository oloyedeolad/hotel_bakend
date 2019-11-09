
exports.up = function(knex) {
  return knex.schema.createTable('sims', function (table) {
      table.increments();
      table.string('carrier').notNullable();
      table.decimal('price_data').notNullable();
      table.decimal('price_call').notNullable();
      table.decimal('percentage_price_data_change').notNullable();
      table.decimal('percentage_price_call_change').notNullable();
      table.decimal('delivery_fee').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.dropTable('sims')
};
