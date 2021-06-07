function prfx(list, prefix) {
  return Array.from(list,(i) => [prefix,i].join('/'));
}

module.exports = {
  wiki: {
    Overview: ['overview','about'],
    Audio: prfx(['jacktrip','ninjam','soundjack','source-connect','jamulus','listento','pedal'], 'audio'),
    Video: prfx(['jitsi','zoom','obs'],'video'),
    Tools: prfx(['flexasio','iperf','jack'], 'tools')
  },
};
