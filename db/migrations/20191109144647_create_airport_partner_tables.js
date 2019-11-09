
exports.up = function(knex) {
  return knex.schema.createTable('airport_partner', function (table) {
      table.increments();
      table.string('name');
      table.string('phone_no');
      table.decimal('price');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('airport_partners');
};
