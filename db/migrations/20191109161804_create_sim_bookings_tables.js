
exports.up = function(knex) {
  return knex.schema.createTable('sim_bookings', function (table) {
      table.increments();
      table.integer('sim_id').unsigned().notNullable().references('id').inTable('sims');
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.decimal('total_price').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  
};
