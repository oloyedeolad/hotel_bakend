
exports.up = function(knex) {

    return knex.schema.createTable('airports', function (table) {
        table.increments();
        table.string('airport_code').notNullable();
        table.string('airport_name').nullable();
        table.integer('location_id').unsigned().references('id').inTable('locations');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('airports');
};
