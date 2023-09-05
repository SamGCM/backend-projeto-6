import { DataSourceOptions, DataSource } from "typeorm"

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'postgres',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/src/migrations/*.js'],
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource;