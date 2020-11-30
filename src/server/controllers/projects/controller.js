const { getEndpointData } = require('../../utils/requests');
const {
  toDTO,
  mapBasicProjectData,
} = require('./mapper');

const getAllProjects = async (config, params) => {
  const { objects } = await getEndpointData(config, 'endpoints.projects', params);
  return toDTO(objects);
};

const getProjectBySlug = async (config, params) => {
  const { object } = await getEndpointData(config, 'endpoints.project', params);
  return mapBasicProjectData(object);
};

module.exports = {
  getAllProjects,
  getProjectBySlug,
};
