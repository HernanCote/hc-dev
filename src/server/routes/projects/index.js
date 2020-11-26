const { mergeConfigs } = require('../../utils/config-utils');
const logger = require('../../utils/logger');

module.exports = function projectRoutes(routes, {
  controllers, middlewares, config,
}) {
  routes.get('/',
    middlewares.validator(),
    async (req, res) => {
      const {
        projects: {
          getAllProjects,
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
        type: 'projects',
        props: 'slug,metadata,_id',
      };

      const projects = await getAllProjects(mergedConfig, params);

      res.status(200).validJsonResponse(projects);
    });

  // routes.get('/:projectId',
  //   middlewares.validator(),
  //   async (req, res) => {

  //   });

  return routes;
};
