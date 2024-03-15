const parseResponse = (response) => {
  if (response.statusCode && response.data) {
    return response;
  }
  return { statusCode: 200, data: response };
};

export const asyncWrapper = (fn) => {
  return async function (req, res, next) {
    try {
      const response = await fn(req, res, next);
      // check if response has been already sent
      if (!res.writableEnded) {
        const { statusCode, ...data } = parseResponse(response);
        res.status(statusCode).json({ status: true, ...data });
      }
    } catch (error) {
      next(error);
    }
  };
};
