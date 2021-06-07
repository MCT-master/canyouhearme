function prfx(list, prefix) {
  return Array.from(list,(i) => [prefix,i].join('/'));
}

module.exports = {
  guides: {
    Overview: ['overview'],
    Audio: prfx(['jacktrip'],'audio'),
    Video: prfx(['livestream'], 'video'),
    Tools: prfx(['wiki-entry'], 'tools'),
  },
};
