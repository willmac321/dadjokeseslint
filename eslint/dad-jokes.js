function helloItsMe(node, context) {
  const re = /((Im)|(I'm))/;
  if (node.parent.kind === "const" && node.id.type === "Identifier" && node.id.name.match(re)){
    const rep = node.id.name.replace(re, '');
      context.report({
        node,
        messageId: "helloItsMe",
        data: {
          hello: rep
        },
        fix: function(fixer) {
          return fixer.replaceText(node.id, 'dad');
        },
        suggest: [
          {
            desc: "Heyo, just flew in and boy are my arms tired.",
            fix: function(fixer) {
              return fixer.replaceText(node.id, 'dad');
            }
          }
        ]
      })
  }
}

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "This rule suggests dad jokes in case you need them instead of normal code.",
    },
    fixable: "code",
    messages: {
      helloItsMe: "Hello, {{hello }}! I'm Dad."
    },
    hasSuggestions: true,
  },
  create(context) {
    return {
      VariableDeclarator(node) {helloItsMe(node, context)}
    }
  }
}
