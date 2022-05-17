const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args)
}

let renderer;
function ensureRenderer(){
  return (renderer || (renderer = createRenderer(rendererOptions)))
}
function createRenderer(options){
  return baseCreateRenderer(options)
}

function baseCreateRenderer(options){
  const target = getGlobalThis()
}