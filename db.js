const { sequelize } = require('./models');

// IIFE to sync and connect to database
(async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection to the database has been established successfully.');
		
		// Sync all models with the database
		await sequelize.sync();
		console.log('All models were synchronized successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();
