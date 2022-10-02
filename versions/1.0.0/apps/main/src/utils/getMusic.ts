function getMusic() {
  const h = new Date().getHours();
  return h >= 17 || h < 5 ? "/music/to_ponder.mp3":"/music/the_world_fair.mp3";
};

export { getMusic };