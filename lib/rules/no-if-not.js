/**
 * @fileoverview Require conditions not to be negations
 * @author Kevin Gibbons
 */

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function isNegativeCondition(node) {
  return (
    (node.type === 'UnaryExpression' && node.operator === '!') ||
    (node.type === 'BinaryExpression' &&
      (node.operator === '!=' || node.operator === '!=='))
  );
}

module.exports = {
  meta: {
    docs: {
      description: 'require conditional tests not to be negations',
      category: 'Stylistic Issues'
    },
    // fixable: 'code', // TODO
    schema: [] // no options
  },
  create: function(context) {
    return {
      IfStatement: function(node) {
        if (node.alternate != null && isNegativeCondition(node.test)) {
          context.report({
            node: node,
            message:
              'The condition of an \'if\' should not be a negation'
          });
        }
      },
      ConditionalExpression: function(node) {
        if (isNegativeCondition(node.test)) {
          context.report({
            node: node,
            message:
              'The condition of a ternary operator should not be a negation'
          });
        }
      }
    };
  }
};
