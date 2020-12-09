const { mergeConfigs } = require('../../utils/config-utils');

module.exports = function projectRoutes(routes, {
  controllers, middlewares, config,
}) {
  routes.get('/',
    middlewares.validator(),
    async (req, res) => {
      const {
        skills: {
          getAllSkills,
        },
      } = controllers;

      const headers = {
        'X-Request-Id': req.headers['X-Request-Id'],
      };

      const mergedConfig = {
        config: mergeConfigs(config.get('services.cms'), config.get('options')),
        headers,
      };

      const params = {
        type: 'skills',
        props: 'title,metadata,_id,content',
      };

      try {
        const skills = await getAllSkills(mergedConfig, params);
        res.status(200).validJsonResponse(skills);
      } catch (err) {
        res.validJsonError(err);
      }
    });

  return routes;
};
