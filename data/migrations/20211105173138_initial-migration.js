
exports.up = async function(knex) {
  await knex.schema
    .createTable('project', table => {
        table.increments('project_id')
        table.string('project_name', 128).notNullable()
        table.string('project_description')
        table.boolean('project_completed', false)
    })
    .createTable('resource', table => {
        table.increments('resource_id')
        table.string('resource_name', 128).notNullable().unique()
        table.string('resource_description')
    })
    .createTable('task', table => {
        table.increments('task_id')
        table.string('task_description').notNullable()
        table.string('task_notes')
        table.boolean('task_completed', false)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('project_id')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('resource-assignment', table => {
        table.increments('project_resource_id')
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('project_id')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resource_id')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
    return knex.schema 
        .dropTableIfExists('resource-assignment')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};
