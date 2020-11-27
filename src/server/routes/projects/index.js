const { mergeConfigs } = require('../../utils/config-utils');

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

      try {
        const projects = await getAllProjects(mergedConfig, params);
        res.status(200).validJsonResponse(projects);
      } catch (err) {
        res.validJsonError(err);
      }
    });

  routes.get('/:slug',
    middlewares.validator(),
    async (req, res) => {
      const headers = {
        'X-Request-Id': req.headers['X-Request-Id'],
      };

      const mergedConfig = {
        config: mergeConfigs(config.get('services.cms'), config.get('options')),
        headers,
      };

      const {
        projects: {
          getProjectBySlug,
        },
      } = controllers;
      const {
        params: {
          slug,
        },
      } = req;

      const params = {
        props: 'slug,metadata,_id',
        slug,
      };

      try {
        const project = await getProjectBySlug(mergedConfig, params);

        res.status(200).validJsonResponse(project);
      } catch (err) {
        res.validJsonError(err);
      }
    });

  return routes;
};
