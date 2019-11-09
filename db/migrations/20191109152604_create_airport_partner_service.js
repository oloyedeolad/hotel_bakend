
exports.up = function(knex) {
  return knex.schema.createTable('airport_partner_airport', function (table) {
      table.increments();
      table.integer('airport_partner').unsigned().references('id').inTable('airport_partner');
      table.integer('airport').unsigned().references('id').inTable('airports');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());

  })
};

exports.down = function(knex) {
  return knex.dropTable('airport_partner_airport');
};
