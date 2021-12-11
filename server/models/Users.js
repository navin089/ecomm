module.exports = (sequelize, Sequelize) => {
	const Users = sequelize.define("users", {
	  name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: {
			  msg: 'Please enter your name'
			}
		  }
	  },
	  email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: {
			  msg: 'Please enter your email'
			}
		  }
	  },
	  phone: {
		type: Sequelize.INTEGER,
		defaultValue: null,
	  },
	  dob: {
		type: Sequelize.DATE,
		defaultValue: null,
	  },
	  address: {
		type: Sequelize.TEXT,
		defaultValue: null,
	  },
	  password: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notNull: {
			  msg: 'Please enter your password'
			}
		  }
	  },
	  token: {
		type: Sequelize.TEXT,
		defaultValue: null,
	  },
	});
  
	return Users;
  };