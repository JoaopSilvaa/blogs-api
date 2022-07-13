module.exports = (err, _req, res, _next) => {
    if (err.isJoi) {
      return res.status(400)
        .json({ message: err.details[0].message });
    }
    const statusByErrorCode = {
      notFound: 404,
      unprocessable: 422,
      badRequest: 400,
      unauthorized: 401,
      conflict: 409,
    };
    const status = statusByErrorCode[err.code] || 500;
    res.status(status).json({ message: err.message });
  };