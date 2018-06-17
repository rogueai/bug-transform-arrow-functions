// @flow

type Plugin = {
  visitor: Object,
  pre: Function,
  name: string,
};

export default function ({types: t}: { types: Object }): Plugin {

  const visitor = {

    MemberExpression: {
      enter(path, state) {
        let parentPath = path.parentPath;
        if (t.isCallExpression(parentPath)) {
          let ifTest = t.booleanLiteral(true);
          let ifConsequent = t.expressionStatement(parentPath.node);
          let ifStatement = t.ifStatement(ifTest, ifConsequent);
          parentPath.replaceWith(ifStatement);
          parentPath.skip();
        }
      },

    },

  };

  return {
    name: "bug-transform-arrow-function",
    visitor: visitor,
  };
}
