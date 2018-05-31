const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.listen(4000, () => {
	console.log('hi')
});

app.use('/graphql', expressGraphQL({
	graphiql: true,
	schema
}));
