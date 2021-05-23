import Sequelize from 'sequelize';
import { sequelize }from '../configDB/database';

const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    projectId: {
        type: Sequelize.INTEGER
    },

}, {
    timestamps: false // evitar problemas con las fechas
})

export default Task;