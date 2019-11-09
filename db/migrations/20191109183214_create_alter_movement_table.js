
exports.up = function(knex) {
  return knex.schema.table('movement', function (table) {

    table.integer('transport_partner_id').unsigned().references('id').inTable('transport_partner').nullable();
      table.integer('airport_partner_id').unsigned().references('id').inTable('airport_partner').nullable();
  })
};

exports.down = function(knex) {
  return knex.dropColumns('transport_partner_id', 'airport_partner_id');
};
