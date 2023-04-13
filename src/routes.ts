const host = "";

export default {
  statsPath: (): string => [host, "stats"].join("/"),
};
