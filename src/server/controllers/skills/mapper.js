const {
  mapSkillsData,
} = require('../../utils/mappers');

const toDTO = data => mapSkillsData(data);

module.exports = {
  toDTO,
};
