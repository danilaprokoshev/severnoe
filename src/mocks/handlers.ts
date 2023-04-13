import { rest } from "msw";

import { responseData } from "./fixtures";
import routes from "../routes";

export const handlers = [
  rest.get(routes.statsPath(), async (req, res, ctx) => {
    return await res(ctx.delay(2000), ctx.status(200), ctx.json(responseData));
  }),
];
