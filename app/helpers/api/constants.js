export default {
	AuthenticationType: {
		BASIC: 'Basic',
		BEARER: 'Bearer',
		TOKEN: 'Token',
		NONE: ''
	},
	ContentType: {
		JSON: 'application/json',
		URLEncoded: 'application/x-www-form-urlencoded',
		FormData: 'multipart/form-data'
	},
	HTTPMethod: {
		GET: 'GET',
		DELETE: 'DELETE',
		POST: 'POST',
		PUT: 'PUT',
	},
	StatusCode: {
		SUCCESS: 200,
		REDIRECTION: 300,
		CLIENT_ERROR: 400,
		SERVER_ERROR: 500,
	},
	IDENTIFIERS: {
		ACCESS_TOKEN: 'JWT',
		REFRESH_TOKEN: 'REFRESH',
		EXPIRE_TIME: '0'
	}
};
