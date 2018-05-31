const fetch = require('node-fetch');

async function getUser(id) {
	const response = await fetch(`http://localhost:3000/users/${id}`)
	return await response.json();
}

async function getCompany(id) {
	const response = await fetch(`http://localhost:3000/companies/${id}`)
	return await response.json();
}


module.exports = {
	getUser,
	getCompany
};
