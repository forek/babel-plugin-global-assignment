module.exports = function ({ types: t }) {
  return {
    visitor: {
      AssignmentExpression (path, { opts = {} }) {
        const { left } = path.node
        if (t.isIdentifier(left) && !path.scope.hasBinding(left.name)) {
          path.node.left = t.memberExpression(t.identifier(opts.globalObject || 'window'), left)
        }
      }
    }
  }
}
