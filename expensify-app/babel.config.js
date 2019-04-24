module.exports = function (api) {
    api.cache(true);
  
    const presets = [
        "env", 
		"react"
    ];
    const plugins = [
		"transform-class-properties",
		"transform-object-rest-spread"
    ];
    const test = [
		"jest"
    ];
    
    return {
      presets,
      plugins, 
      test
    };
  }