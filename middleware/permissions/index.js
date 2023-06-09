import { response } from "../../utils/common/index.js";

const permissions = (permissions) => (req, res, next) => {
  try {
    const { user } = req;

    if (permissions.indexOf(user.role) !== -1) next();
    else
      response(res, {
        status: 401,
        message: "Not permission granted for that role.",
      });
  } catch (error) {
    next(error);
  }
};

export default permissions;
