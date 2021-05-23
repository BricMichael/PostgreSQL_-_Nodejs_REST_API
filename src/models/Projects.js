import Sequelize from 'sequelize';
import { sequelize }from '../configDB/database';
import Task from './Tasks';

//Definir modelos de datos

const Project = sequelize.define('projects', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT,      
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    },
}, {
    timestamps: false // evitar problemas con las fechas
});

Project.hasMany(Task, { foreignKey: 'projectId', sourceKey: 'id' });
Task.belongsTo(Project, { foreignKey: 'projectId', sourceKey: 'id' })

export default Project;