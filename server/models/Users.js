module.exports = {
	find: function(con, callback) {
	  con.query("SELECT * FROM users", callback)
	},
  
	findById: function(con, id, callback) {
	  con.query(`SELECT * FROM users WHERE id = ${id}`, callback)
	},
  
	create: function(con, data, callback) {
	  con.query(
		`INSERT INTO users SET 
		name = '${data.name}', 
		email = '${data.email}',
		password = '${data.password}'`,
		callback
	  )
	}
  }
