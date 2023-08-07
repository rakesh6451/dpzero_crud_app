export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = "error";

  if (!err.code) {
    err.message = err?.errors[0]?.message;
    const code = populate_DB_ErrorCode(err);
    err.code = code;
  }

  return res.status(err.statusCode).json({
    status: err.status,
    code: err.code,
    message: err.message,
  });
};

const populate_DB_ErrorCode = (err) => {
  switch (err.errors[0].validatorKey) {
    case "checkPassword":
      return "INVALID_PASSWORD";

    case "checkAge":
      return "INVALID_AGE";

    case "is_null":
      return "GENDER_REQUIRED";

    case "not_unique":
      return err.errors[0].path === "email"
        ? "EMAIL_EXISTS"
        : "USERNAME_EXISTS";

    default:
      return "INTERNAL_ERROR";
  }
};
