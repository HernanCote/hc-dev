const { getEndpointData } = require('../../utils/requests');

const getAllProjects = async (config, params) => getEndpointData(config, 'endpoints.projects', params);

const getProjectBySlug = async (config, params) => getEndpointData(config, 'endpoints.project', params);

module.exports = {
  getAllProjects,
  getProjectBySlug,
};
