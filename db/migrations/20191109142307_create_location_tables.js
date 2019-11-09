
exports.up = function(knex) {
    return knex.schema.createTable('locations', function (table) {
        table.increments();
        table.string('address');
        table.string('city');
        table.string('country');
        table.string('zip_code');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('locations');
};
