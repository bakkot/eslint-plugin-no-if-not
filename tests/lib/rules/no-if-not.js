/**
 * @fileoverview Tests for no-if-not rule.
 * @author Kevin Gibbons
 */

'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-if-not'),
  RuleTester = require('eslint').RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('no-if-not', rule, {
  valid: [
    'if (!0) {}',
    '+x ? 0 : 1',
    'x == null ? 0 : 1',
    'if (+0) {} else {}',
    'if (x == null) {} else {}',
  ],
  invalid: [
    {
      code: 'if (!0) {} else {}',
      errors: [{ message: 'The condition of an \'if\' should not be a negation', type: 'IfStatement'}]
    },
    {
      code: 'if (x != null) {} else {}',
      errors: [{ message: 'The condition of an \'if\' should not be a negation', type: 'IfStatement'}]
    },
    {
      code: 'if (x !== null) {} else {}',
      errors: [{ message: 'The condition of an \'if\' should not be a negation', type: 'IfStatement'}]
    },
    {
      code: '!x ? 0 : 1',
      errors: [{ message: 'The condition of a ternary operator should not be a negation', type: 'ConditionalExpression'}]
    },
    {
      code: 'x != null ? 0 : 1',
      errors: [{ message: 'The condition of a ternary operator should not be a negation', type: 'ConditionalExpression'}]
    },
    {
      code: 'x !== null ? 0 : 1',
      errors: [{ message: 'The condition of a ternary operator should not be a negation', type: 'ConditionalExpression'}]
    },
  ]
});
