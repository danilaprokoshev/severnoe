import axios from "axios";

import routes from "../routes";

export const fetchStats = async (): Promise<{ data: string }> =>
  await axios.get(routes.statsPath());
