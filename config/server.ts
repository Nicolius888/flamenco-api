export default ({ env }) => ({
  host: env('APP_HOST', '0.0.0.0'),
  port: env.int('APP_PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
