const { get } = require('./core');
const { decodeHtml } = require('./misc');

const mapProjectAwards = data => data.map(item => ({
  id: get(item, '_id'),
  slug: get(item, 'slug'),
  title: get(item, 'metadata.title'),
  description: get(item, 'metadata.description'),
}));

const commonProjectData = (item, mapAwards = false) => ({
  id: get(item, '_id'),
  slug: get(item, 'slug'),
  thumbnail: get(item, 'metadata.thumbnail.url'),
  title: get(item, 'metadata.title'),
  mainImage: get(item, 'metadata.main_image.url'),
  secondaryImage: get(item, 'metadata.secondary_image.url') || undefined,
  url: get(item, 'metadata.url'),
  awards: mapAwards ? mapProjectAwards(get(item, 'metadata.awards') || []) : undefined,
});

const mapProjectsData = (data, mapAwards) => data.map(item => ({
  ...commonProjectData(item, mapAwards),
}));

const mapSkillsData = data => data.map(item => ({
  id: get(item, '_id'),
  title: get(item, 'title'),
  description: decodeHtml(get(item, 'content')),
  image: get(item, 'metadata.image.url'),

}));

module.exports = {
  commonProjectData,
  mapProjectsData,
  mapSkillsData,
};
