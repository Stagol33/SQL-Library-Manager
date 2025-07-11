const { sequelize } = require('./models');

// IIFE to sync and connect to database
// In app.js or where you initialize your app
const db = require('./models');

(async () => {
try {
	console.log('Starting application...');
	console.log('Environment:', process.env.NODE_ENV);
	
	try {
		console.log('Attempting to connect to database...');
		await db.sequelize.authenticate();
		console.log('Database connection established successfully.');
	
		console.log('Synchronizing database models...');
		await db.sequelize.sync();
		console.log('Database synchronized successfully.');
	} catch (dbError) {
		console.error('Database initialization failed:', dbError);
		// Continue application startup even if database fails
		// This prevents the entire application from crashing
	}
	
	// Log when app is ready to accept requests
	console.log('Application ready to accept connections');
} catch (error) {
	console.error('Application startup error:', error);
}
})();

