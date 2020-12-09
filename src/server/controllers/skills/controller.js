const { getEndpointData } = require('../../utils/requests');
const { toDTO } = require('./mapper');

const getAllSkills = async (config, params) => {
  const { objects } = await getEndpointData(config, 'endpoints.projects', params);
  return toDTO(objects);
};

module.exports = {
  getAllSkills,
};
