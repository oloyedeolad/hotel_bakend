
exports.up = function(knex) {
  return knex.schema.table('users', function (table) {
      table.dropColumns('password');
      table.string('phone_no').notNullable();
  })
};

exports.down = function(knex) {
  knex.dropColumns('phone_no');
};
