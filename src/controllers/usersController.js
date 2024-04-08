import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler";

const register = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(202, "ok", {}));
});

export { register };
