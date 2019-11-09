
exports.up = function(knex) {
  return knex.schema.createTable('transport_partner', function (table) {
      table.increments();
      table.string('address').notNullable();
      table.string('city').notNullable();
      table.string('country').notNullable();
      table.string('zip_code').notNullable();
      table.decimal('base_fee').notNullable();
      table.decimal('fee_per_km').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.dropTable('transport_partner');
};
