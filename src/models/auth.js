const queryCheck = (email) => {
  const sqlQuery = `SELECT id FROM users WHERE email ='${email}'`;

  return sqlQuery;
};

module.exports = { queryCheck };
