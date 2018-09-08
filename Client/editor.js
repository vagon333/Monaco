define("editor", ["require", "exports"], function () {
  return {
    create: function (monaco, config, languageId, container) {

      config.classes.forEach(item => {
        monaco.languages.typescript.javascriptDefaults.addExtraLib(item.join('\n'));
      });

      monaco.editor.create(container, {
        language: languageId
      });      
    }
  };
});