import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../app/models/User';

const models = [User];

const Database = {
  init() {
    const connection = new Sequelize(dbConfig);
    models.map((model) => model.init(connection));
  },
};

export default Database.init();
