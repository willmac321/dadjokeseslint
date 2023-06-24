function helloItsMe(node, context) {
  context.report({node,message:"Uhoh",})
}

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "This rule suggests dad jokes in case you need them instead of normal code.",
    },
    fixable: "code",
    hasSuggestions: true,
    schema: [
      {
        "enum":['always', 'never']
      },
    ]
  },
  create: function(context) {
    return {
      "VariableDeclarator[attr=/((Im)|(I'm))/]":(node)=>helloItsMe(node, context),
    }
  }
}
