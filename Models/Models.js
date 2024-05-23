import sequelize from '../db.js';
import {DataTypes} from 'sequelize';

const Repo = sequelize.define('repo', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING},
    url: {type: DataTypes.STRING},
    avatar_url: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    stars: {type: DataTypes.INTEGER},
    language: {type: DataTypes.STRING}
}, { timestamps: false});

export default Repo;