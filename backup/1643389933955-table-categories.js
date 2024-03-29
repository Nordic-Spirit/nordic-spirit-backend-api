const { MigrationInterface, QueryRunner, Table } = require('typeorm');

module.exports = class tableCategory1643389933955 {
  name = 'tableCategory1643389933955';

  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar',
            length: '30',
            isUnique: true
          },
          {
            name: 'description',
            type: 'varchar',
            length: '240',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'current_timestamp'
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'current_timestamp'
          }
        ]
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "categories"`);
  }
};
