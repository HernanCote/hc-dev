const {
  mapProjectsData,
  commonProjectData,
} = require('../../utils/mappers');

const toDTO = data => mapProjectsData(data);
const mapBasicProjectData = data => commonProjectData(data, true);

module.exports = {
  toDTO,
  mapBasicProjectData,
};
