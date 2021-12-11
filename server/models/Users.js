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
	  gender: {
		type: Sequelize.STRING,
		defaultValue: null,
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
	  city: {
		type: Sequelize.STRING,
		defaultValue: null,
	  },
	  state: {
		type: Sequelize.STRING,
		defaultValue: null,
	  },
	  pincode: {
		type: Sequelize.INTEGER,
		defaultValue: null,
	  },
	  profile: {
		type: Sequelize.STRING,
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