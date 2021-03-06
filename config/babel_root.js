module.exports = function (babel) {
  // get the working directory
  var cwd = process.cwd();

  return new babel.Transformer("babel-plugin-project-relative-require", {
    ImportDeclaration: function(node, parent) {
      // probably always true, but let's be safe
      if (!babel.types.isLiteral(node.source)) {
        return node;
      }

      var ref = node.source.value;

      // ensure a value, make sure it's not home relative e.g. ~/foo
      if (!ref || ref[0] !== '~' || ref[1] === '/') {
        return node;
      }

      node.source.value = cwd + '/' + node.source.value.slice(1);

      return node;
    }
  });
};