const response = (statusCode, data, message, res) => {
  res.status(statusCode).json({
    payload: {
      status_code: statusCode,
      datas: data,
    },
    pagination: {
      message: message,
      prev: '',
      next: '',
      max: '',
    },
  });
};

module.exports = response;
