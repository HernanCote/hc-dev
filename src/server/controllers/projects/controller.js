const { getEndpointData } = require('../../utils/requests');

const getAllProjects = async (config, params) => getEndpointData(config, 'endpoints.projects', params);

module.exports = {
  getAllProjects,
};
