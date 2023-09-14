import { DataSourceOptions, DataSource } from "typeorm"

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'db',
    username: 'postgres',
    password: 'docker',
    database: 'postgres',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/src/migrations/*.js'],
    synchronize: false
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource;