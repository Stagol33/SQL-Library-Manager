const express = require('express');
const router = express.Router();
const { Book } = require('../models');
const { Op } = require('sequelize');

/* GET books listing with pagination and search */
router.get('/', async (req, res, next) => {
	try {
		const { term, page = 1 } = req.query;
		const limit = 10; // items per page
		const offset = (page - 1) * limit;
		let options = {
			limit,
			offset
		};
		
		if (term) {
			options.where = {
				[Op.or]: [
					{ title: { [Op.like]: `%${term}%` } },
					{ author: { [Op.like]: `%${term}%` } },
					{ genre: { [Op.like]: `%${term}%` } },
					{ year: { [Op.like]: `%${term}%` } }
				]
			};
		}
		
		const { count, rows: books } = await Book.findAndCountAll(options);
		const totalPages = Math.ceil(count / limit);
		
		res.render('index', { 
			books, 
			title: 'Books', 
			term,
			page: parseInt(page),
			totalPages
		});
	} catch (error) {
		next(error);
	}
});

/* GET new book form */
router.get('/new', (req, res) => {
	res.render('new-book', { book: {}, title: 'New Book' });
});

/* POST create book */
router.post('/new', async (req, res, next) => {
	try {
		await Book.create(req.body);
		res.redirect('/books');
	} catch (error) {
		if (error.name === 'SequelizeValidationError') {
			const book = req.body;
			const errors = error.errors.map(err => err.message);
			res.render('new-book', { book, errors, title: 'New Book' });
		} else {
			next(error);
		}
	}
});

/* GET book detail form */
router.get('/:id', async (req, res, next) => {
	try {
		const book = await Book.findByPk(req.params.id);
		if (book) {
			res.render('update-book', { book, title: book.title });
		} else {
			const err = new Error('Book not found');
			err.status = 404;
			next(err);
		}
	} catch (error) {
		next(error);
	}
});

/* POST update book */
router.post('/:id', async (req, res, next) => {
	try {
		const book = await Book.findByPk(req.params.id);
		if (book) {
			await book.update(req.body);
			res.redirect('/books');
		} else {
			const err = new Error('Book not found');
			err.status = 404;
			next(err);
		}
	} catch (error) {
		if (error.name === 'SequelizeValidationError') {
			const book = { ...req.body, id: req.params.id };
			const errors = error.errors.map(err => err.message);
			res.render('update-book', { book, errors, title: 'Edit Book' });
		} else {
			next(error);
		}
	}
});

/* POST delete book */
router.post('/:id/delete', async (req, res, next) => {
	try {
		const book = await Book.findByPk(req.params.id);
		
		if (book) {
				await book.destroy();
				res.redirect('/books');
		} else {
				const err = new Error('Book not found');
				err.status = 404;
				next(err);
		}
	} catch (error) {
			next(error);
	}
});

module.exports = router;
