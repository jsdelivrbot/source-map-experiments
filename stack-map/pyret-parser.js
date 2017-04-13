define(['../jglr/jglr'],
/** @param {{Grammar : {fromSerializable : !Function}, Nonterm : !Object, Token : !Object, Rule : !Object}} E */
function(E) {
  const Grammar = E.Grammar;
  const Nonterm = E.Nonterm;
  const Token = E.Token;
  const Rule = E.Rule;

  var g_json = {
    "start": "START",
    "name": "PyretGrammar",
    "acceptStates": [
      1
    ],
    "mode": "RNGLR",
    "derivable": {
      "program": [
        "prelude",
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "ε",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt",
        "block",
        "stmt",
        "block_I0_star",
        "block_I0",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "prelude": [
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "ε",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt"
      ],
      "block": [
        "block_I0_star",
        "ε",
        "block_I0",
        "stmt",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "prelude_I0_opt": [
        "ε",
        "prelude_I0",
        "provide-stmt"
      ],
      "prelude_I1_opt": [
        "ε",
        "prelude_I1",
        "provide-types-stmt"
      ],
      "prelude_I2_star": [
        "ε",
        "prelude_I2",
        "import-stmt"
      ],
      "prelude_I0": [
        "provide-stmt"
      ],
      "provide-stmt": [],
      "prelude_I1": [
        "provide-types-stmt"
      ],
      "provide-types-stmt": [],
      "prelude_I2": [
        "import-stmt"
      ],
      "import-stmt": [],
      "import-source": [
        "import-special",
        "import-name"
      ],
      "comma-names": [],
      "import-special": [],
      "import-name": [],
      "import-special_I3_star": [
        "ε",
        "import-special_I3"
      ],
      "import-special_I3": [],
      "stmt": [
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "record-ann": [],
      "comma-names_I1_star": [
        "ε",
        "comma-names_I1"
      ],
      "comma-names_I1": [],
      "block_I0_star": [
        "ε",
        "block_I0",
        "stmt",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "block_I0": [
        "stmt",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "type-expr": [],
      "newtype-expr": [],
      "let-expr": [],
      "fun-expr": [],
      "data-expr": [],
      "when-expr": [],
      "var-expr": [],
      "rec-expr": [],
      "assign-expr": [],
      "check-test": [
        "binop-expr",
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "check-expr": [],
      "contract-stmt": [],
      "ty-params": [
        "ty-params_I0_opt",
        "ε",
        "ty-params_I0"
      ],
      "ann": [
        "name-ann",
        "record-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "toplevel-binding": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "binop-expr": [
        "expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "binding": [
        "name-binding",
        "tuple-binding"
      ],
      "name-binding": [],
      "tuple-binding": [],
      "tuple-binding_I1_star": [
        "ε",
        "tuple-binding_I1"
      ],
      "tuple-binding_I3_opt": [
        "ε",
        "tuple-binding_I3"
      ],
      "tuple-binding_I5_opt": [
        "ε",
        "tuple-binding_I5"
      ],
      "tuple-binding_I1": [],
      "tuple-binding_I3": [],
      "tuple-binding_I5": [],
      "name-binding_I0_opt": [
        "ε",
        "name-binding_I0"
      ],
      "name-binding_I2_opt": [
        "ε",
        "name-binding_I2"
      ],
      "name-binding_I0": [],
      "name-binding_I2": [],
      "multi-let-expr": [],
      "let-binding": [
        "let-expr",
        "var-expr"
      ],
      "multi-let-expr_I2_star": [
        "ε",
        "multi-let-expr_I2"
      ],
      "multi-let-expr_I3": [],
      "multi-let-expr_I2": [],
      "letrec-expr": [],
      "letrec-expr_I2_star": [
        "ε",
        "letrec-expr_I2"
      ],
      "letrec-expr_I3": [],
      "letrec-expr_I2": [],
      "type-bind": [],
      "newtype-bind": [],
      "type-let-bind": [
        "type-bind",
        "newtype-bind"
      ],
      "type-let-expr": [],
      "type-let-expr_I2_star": [
        "ε",
        "type-let-expr_I2"
      ],
      "type-let-expr_I3": [],
      "type-let-expr_I2": [],
      "contract-stmt_I2": [
        "ann",
        "noparen-arrow-ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "noparen-arrow-ann": [],
      "fun-header": [
        "args"
      ],
      "fun-expr_I3": [],
      "doc-string": [
        "doc-string_I0_opt",
        "ε",
        "doc-string_I0"
      ],
      "where-clause": [
        "where-clause_I0_opt",
        "ε",
        "where-clause_I0"
      ],
      "args": [],
      "return-ann": [
        "return-ann_I0_opt",
        "ε",
        "return-ann_I0"
      ],
      "ty-params_I0_opt": [
        "ε",
        "ty-params_I0"
      ],
      "ty-params_I0": [],
      "ty-params_I0_I0": [],
      "ty-params_I0_I2": [],
      "args_I0": [],
      "args_I1_opt": [
        "ε",
        "args_I1",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "args_I1": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "args_I1_I1_star": [
        "ε",
        "args_I1_I1"
      ],
      "args_I1_I1": [],
      "return-ann_I0_opt": [
        "ε",
        "return-ann_I0"
      ],
      "return-ann_I0": [],
      "doc-string_I0_opt": [
        "ε",
        "doc-string_I0"
      ],
      "doc-string_I0": [],
      "where-clause_I0_opt": [
        "ε",
        "where-clause_I0"
      ],
      "where-clause_I0": [],
      "check-expr_I0": [],
      "check-op": [],
      "check-test_A0_I2_opt": [
        "ε",
        "check-test_A0_I2"
      ],
      "check-test_A0_I2": [],
      "check-test_A0_I2_I1": [],
      "check-op-postfix": [],
      "data-expr_I4_opt": [
        "ε",
        "data-expr_I4",
        "first-data-variant",
        "variant-constructor"
      ],
      "data-expr_I5_star": [
        "ε",
        "data-expr_I5",
        "data-variant"
      ],
      "data-sharing": [
        "data-sharing_I0_opt",
        "ε",
        "data-sharing_I0"
      ],
      "data-expr_I4": [
        "first-data-variant",
        "variant-constructor"
      ],
      "first-data-variant": [
        "variant-constructor"
      ],
      "data-expr_I5": [
        "data-variant"
      ],
      "data-variant": [],
      "variant-constructor": [],
      "variant-members": [],
      "data-with": [
        "data-with_I0_opt",
        "ε",
        "data-with_I0"
      ],
      "variant-members_I1_opt": [
        "ε",
        "variant-members_I1",
        "variant-member",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-members_I1": [
        "variant-member",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-member": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "variant-members_I1_I1_star": [
        "ε",
        "variant-members_I1_I1"
      ],
      "variant-members_I1_I1": [],
      "variant-member_I0_opt": [
        "ε",
        "variant-member_I0"
      ],
      "variant-member_I0": [],
      "data-with_I0_opt": [
        "ε",
        "data-with_I0"
      ],
      "data-with_I0": [],
      "fields": [
        "field"
      ],
      "data-sharing_I0_opt": [
        "ε",
        "data-sharing_I0"
      ],
      "data-sharing_I0": [],
      "when-expr_I2": [],
      "expr": [
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "binop-expr_I1_star": [
        "ε",
        "binop-expr_I1"
      ],
      "binop-expr_I1": [],
      "binop": [],
      "paren-expr": [],
      "id-expr": [],
      "prim-expr": [
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "lambda-expr": [],
      "method-expr": [],
      "app-expr": [],
      "obj-expr": [],
      "tuple-expr": [],
      "tuple-get": [],
      "dot-expr": [],
      "template-expr": [],
      "bracket-expr": [],
      "get-bang-expr": [],
      "update-expr": [],
      "extend-expr": [],
      "if-expr": [],
      "if-pipe-expr": [],
      "cases-expr": [],
      "for-expr": [],
      "user-block-expr": [],
      "inst-expr": [],
      "construct-expr": [],
      "table-select": [],
      "table-extend": [],
      "table-filter": [],
      "table-order": [],
      "table-extract": [],
      "table-update": [],
      "table-expr": [],
      "load-table-expr": [],
      "reactor-expr": [],
      "bad-expr": [],
      "paren-expr_I0": [],
      "num-expr": [],
      "frac-expr": [],
      "bool-expr": [],
      "string-expr": [],
      "lambda-expr_I2": [],
      "method-expr_I2": [],
      "app-args": [],
      "opt-comma-binops": [
        "opt-comma-binops_I0_opt",
        "ε",
        "opt-comma-binops_I0",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "opt-comma-binops_I0_opt": [
        "ε",
        "opt-comma-binops_I0",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "opt-comma-binops_I0": [
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "opt-comma-binops_I0_I1_star": [
        "ε",
        "opt-comma-binops_I0_I1"
      ],
      "opt-comma-binops_I0_I1": [],
      "inst-expr_I3_star": [
        "ε",
        "inst-expr_I3"
      ],
      "inst-expr_I3": [],
      "tuple-fields": [
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "tuple-fields_I1_star": [
        "ε",
        "tuple-fields_I1"
      ],
      "tuple-fields_I2_opt": [
        "ε",
        "tuple-fields_I2"
      ],
      "tuple-fields_I1": [],
      "tuple-fields_I2": [],
      "obj-fields": [
        "obj-field"
      ],
      "obj-field": [],
      "obj-fields_I1_star": [
        "ε",
        "obj-fields_I1"
      ],
      "obj-fields_I2_opt": [
        "ε",
        "obj-fields_I2"
      ],
      "obj-fields_I1": [],
      "obj-fields_I2": [],
      "key": [],
      "obj-field_A1_I2_opt": [
        "ε",
        "obj-field_A1_I2"
      ],
      "obj-field_A1_I2": [],
      "obj-field_A2_I3": [],
      "field": [],
      "fields_I1_star": [
        "ε",
        "fields_I1"
      ],
      "fields_I2_opt": [
        "ε",
        "fields_I2"
      ],
      "fields_I1": [],
      "fields_I2": [],
      "field_A1_I3": [],
      "construct-modifier": [
        "ε"
      ],
      "table-headers": [
        "table-headers_I0_opt",
        "ε",
        "table-headers_I0",
        "table-header"
      ],
      "table-rows": [
        "table-rows_I0_opt",
        "ε",
        "table-rows_I0",
        "table-row"
      ],
      "table-headers_I0_opt": [
        "ε",
        "table-headers_I0",
        "table-header"
      ],
      "table-headers_I0": [
        "table-header"
      ],
      "table-headers_I0_I0_star": [
        "ε",
        "table-headers_I0_I0",
        "list-table-header"
      ],
      "table-header": [],
      "table-headers_I0_I0": [
        "list-table-header"
      ],
      "list-table-header": [],
      "table-header_I1_opt": [
        "ε",
        "table-header_I1"
      ],
      "table-header_I1": [],
      "table-rows_I0_opt": [
        "ε",
        "table-rows_I0",
        "table-row"
      ],
      "table-rows_I0": [
        "table-row"
      ],
      "table-rows_I0_I0_star": [
        "ε",
        "table-rows_I0_I0",
        "table-row"
      ],
      "table-row": [],
      "table-rows_I0_I0": [
        "table-row"
      ],
      "table-items": [
        "table-items_I0_opt",
        "ε",
        "table-items_I0",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0_opt": [
        "ε",
        "table-items_I0",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0": [
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ],
      "table-items_I0_I0_star": [
        "ε",
        "table-items_I0_I0",
        "list-table-item"
      ],
      "table-items_I0_I0": [
        "list-table-item"
      ],
      "list-table-item": [],
      "if-expr_I2": [],
      "if-expr_I4_star": [
        "ε",
        "if-expr_I4",
        "else-if"
      ],
      "if-expr_I5_opt": [
        "ε",
        "if-expr_I5"
      ],
      "if-expr_I4": [
        "else-if"
      ],
      "else-if": [],
      "if-expr_I5": [],
      "if-pipe-expr_I1": [],
      "if-pipe-expr_I2_star": [
        "ε",
        "if-pipe-expr_I2",
        "if-pipe-branch"
      ],
      "if-pipe-expr_I3_opt": [
        "ε",
        "if-pipe-expr_I3"
      ],
      "if-pipe-expr_I2": [
        "if-pipe-branch"
      ],
      "if-pipe-branch": [],
      "if-pipe-expr_I3": [],
      "cases-binding": [
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-binding_I0_opt": [
        "ε",
        "cases-binding_I0"
      ],
      "cases-binding_I0": [],
      "cases-args": [],
      "cases-args_I1_opt": [
        "ε",
        "cases-args_I1",
        "cases-binding",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-args_I1": [
        "cases-binding",
        "binding",
        "name-binding",
        "tuple-binding"
      ],
      "cases-args_I1_I1_star": [
        "ε",
        "cases-args_I1_I1"
      ],
      "cases-args_I1_I1": [],
      "cases-expr_I1": [],
      "cases-expr_I5": [],
      "cases-expr_I6_star": [
        "ε",
        "cases-expr_I6",
        "cases-branch"
      ],
      "cases-expr_I7_opt": [
        "ε",
        "cases-expr_I7"
      ],
      "cases-expr_I6": [
        "cases-branch"
      ],
      "cases-branch": [],
      "cases-expr_I7": [],
      "cases-branch_I2_opt": [
        "ε",
        "cases-branch_I2",
        "cases-args"
      ],
      "cases-branch_I2": [
        "cases-args"
      ],
      "for-bind": [],
      "for-expr_I3_opt": [
        "ε",
        "for-expr_I3",
        "for-bind"
      ],
      "for-expr_I6": [],
      "for-expr_I3": [
        "for-bind"
      ],
      "for-expr_I3_I1_star": [
        "ε",
        "for-expr_I3_I1"
      ],
      "for-expr_I3_I1": [],
      "column-order": [],
      "column-order_I1": [],
      "table-select_I2_star": [
        "ε",
        "table-select_I2"
      ],
      "table-select_I2": [],
      "table-filter_I2_opt": [
        "ε",
        "table-filter_I2"
      ],
      "table-filter_I2": [],
      "table-filter_I2_I2_star": [
        "ε",
        "table-filter_I2_I2"
      ],
      "table-filter_I2_I2": [],
      "table-update_I2_opt": [
        "ε",
        "table-update_I2"
      ],
      "table-update_I2": [],
      "table-update_I2_I2_star": [
        "ε",
        "table-update_I2_I2"
      ],
      "table-update_I2_I2": [],
      "table-extend_I2_opt": [
        "ε",
        "table-extend_I2"
      ],
      "table-extend-fields": [
        "table-extend-field"
      ],
      "table-extend_I2": [],
      "table-extend_I2_I2_star": [
        "ε",
        "table-extend_I2_I2"
      ],
      "table-extend_I2_I2": [],
      "table-extend-fields_I0_star": [
        "ε",
        "table-extend-fields_I0",
        "list-table-extend-field"
      ],
      "table-extend-field": [],
      "table-extend-fields_I2_opt": [
        "ε",
        "table-extend-fields_I2"
      ],
      "table-extend-fields_I0": [
        "list-table-extend-field"
      ],
      "list-table-extend-field": [],
      "table-extend-fields_I2": [],
      "table-extend-field_A0_I1_opt": [
        "ε",
        "table-extend-field_A0_I1"
      ],
      "table-extend-field_A0_I1": [],
      "table-extend-field_A1_I1_opt": [
        "ε",
        "table-extend-field_A1_I1"
      ],
      "table-extend-field_A1_I1": [],
      "load-table-expr_I3_opt": [
        "ε",
        "load-table-expr_I3",
        "load-table-specs",
        "load-table-spec"
      ],
      "load-table-expr_I3": [
        "load-table-specs",
        "load-table-spec"
      ],
      "load-table-specs": [
        "load-table-spec"
      ],
      "load-table-specs_I0_star": [
        "ε",
        "load-table-specs_I0",
        "load-table-spec"
      ],
      "load-table-spec": [],
      "load-table-specs_I0": [
        "load-table-spec"
      ],
      "name-ann": [],
      "arrow-ann": [],
      "app-ann": [],
      "pred-ann": [],
      "dot-ann": [],
      "tuple-ann": [],
      "record-ann_I1_opt": [
        "ε",
        "record-ann_I1",
        "ann-field"
      ],
      "record-ann_I1": [
        "ann-field"
      ],
      "ann-field": [],
      "record-ann_I1_I1_star": [
        "ε",
        "record-ann_I1_I1"
      ],
      "record-ann_I1_I1": [],
      "tuple-ann_I2_star": [
        "ε",
        "tuple-ann_I2"
      ],
      "tuple-ann_I3_opt": [
        "ε",
        "tuple-ann_I3"
      ],
      "tuple-ann_I2": [],
      "tuple-ann_I3": [],
      "noparen-arrow-ann_I0_opt": [
        "ε",
        "noparen-arrow-ann_I0",
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "noparen-arrow-ann_I0": [
        "comma-anns",
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "comma-anns": [
        "ann",
        "record-ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "arrow-ann_I0": [],
      "arrow-ann_I1_opt": [
        "ε",
        "arrow-ann_I1",
        "comma-anns",
        "record-ann",
        "ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "arrow-ann_I1": [
        "comma-anns",
        "record-ann",
        "ann",
        "name-ann",
        "arrow-ann",
        "app-ann",
        "pred-ann",
        "dot-ann",
        "tuple-ann"
      ],
      "app-ann_I0": [
        "name-ann",
        "dot-ann"
      ],
      "comma-anns_I1_star": [
        "ε",
        "comma-anns_I1"
      ],
      "comma-anns_I1": [],
      "pred-ann_I2": [],
      "START": [
        "program",
        "ε",
        "prelude",
        "prelude_I0_opt",
        "prelude_I1_opt",
        "prelude_I2_star",
        "prelude_I0",
        "provide-stmt",
        "prelude_I1",
        "provide-types-stmt",
        "prelude_I2",
        "import-stmt",
        "block",
        "stmt",
        "block_I0_star",
        "block_I0",
        "type-expr",
        "newtype-expr",
        "let-expr",
        "fun-expr",
        "data-expr",
        "when-expr",
        "var-expr",
        "rec-expr",
        "assign-expr",
        "check-test",
        "check-expr",
        "contract-stmt",
        "binop-expr",
        "multi-let-expr",
        "letrec-expr",
        "type-let-expr",
        "expr",
        "paren-expr",
        "id-expr",
        "prim-expr",
        "lambda-expr",
        "method-expr",
        "app-expr",
        "obj-expr",
        "tuple-expr",
        "tuple-get",
        "dot-expr",
        "template-expr",
        "bracket-expr",
        "get-bang-expr",
        "update-expr",
        "extend-expr",
        "if-expr",
        "if-pipe-expr",
        "cases-expr",
        "for-expr",
        "user-block-expr",
        "inst-expr",
        "construct-expr",
        "table-select",
        "table-extend",
        "table-filter",
        "table-order",
        "table-extract",
        "table-update",
        "table-expr",
        "load-table-expr",
        "reactor-expr",
        "num-expr",
        "frac-expr",
        "bool-expr",
        "string-expr"
      ]
    },
    "rulesByOldId": {
      "0": {
        "name": "program",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "1": {
        "name": "prelude",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "2": {
        "name": "prelude_I0_opt",
        "position": 0,
        "symbols": []
      },
      "3": {
        "name": "prelude_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0"
          }
        ]
      },
      "4": {
        "name": "prelude_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-stmt"
          }
        ]
      },
      "5": {
        "name": "prelude_I1_opt",
        "position": 0,
        "symbols": []
      },
      "6": {
        "name": "prelude_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I1"
          }
        ]
      },
      "7": {
        "name": "prelude_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-types-stmt"
          }
        ]
      },
      "8": {
        "name": "prelude_I2_star",
        "position": 0,
        "symbols": []
      },
      "9": {
        "name": "prelude_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2"
          }
        ]
      },
      "10": {
        "name": "prelude_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt"
          }
        ]
      },
      "11": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "INCLUDE"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "12": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "13": {
        "name": "import-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "14": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special"
          }
        ]
      },
      "15": {
        "name": "import-source",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-name"
          }
        ]
      },
      "16": {
        "name": "import-special",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "17": {
        "name": "import-special_I3_star",
        "position": 0,
        "symbols": []
      },
      "18": {
        "name": "import-special_I3_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3"
          }
        ]
      },
      "19": {
        "name": "import-special_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "20": {
        "name": "import-name",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "21": {
        "name": "provide-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Nonterm",
            "name": "stmt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "22": {
        "name": "provide-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "23": {
        "name": "provide-types-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "24": {
        "name": "provide-types-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "25": {
        "name": "comma-names",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "26": {
        "name": "comma-names_I1_star",
        "position": 0,
        "symbols": []
      },
      "27": {
        "name": "comma-names_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1"
          }
        ]
      },
      "28": {
        "name": "comma-names_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "29": {
        "name": "block",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          }
        ]
      },
      "30": {
        "name": "block_I0_star",
        "position": 0,
        "symbols": []
      },
      "31": {
        "name": "block_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "block_I0"
          }
        ]
      },
      "32": {
        "name": "block_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "stmt"
          }
        ]
      },
      "33": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-expr"
          }
        ]
      },
      "34": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-expr"
          }
        ]
      },
      "35": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "36": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fun-expr"
          }
        ]
      },
      "37": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr"
          }
        ]
      },
      "38": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "when-expr"
          }
        ]
      },
      "39": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "40": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rec-expr"
          }
        ]
      },
      "41": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "assign-expr"
          }
        ]
      },
      "42": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test"
          }
        ]
      },
      "43": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr"
          }
        ]
      },
      "44": {
        "name": "stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "contract-stmt"
          }
        ]
      },
      "45": {
        "name": "type-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "46": {
        "name": "newtype-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "47": {
        "name": "let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "48": {
        "name": "binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "49": {
        "name": "binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding"
          }
        ]
      },
      "50": {
        "name": "tuple-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "51": {
        "name": "tuple-binding_I1_star",
        "position": 0,
        "symbols": []
      },
      "52": {
        "name": "tuple-binding_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1"
          }
        ]
      },
      "53": {
        "name": "tuple-binding_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "54": {
        "name": "tuple-binding_I3_opt",
        "position": 0,
        "symbols": []
      },
      "55": {
        "name": "tuple-binding_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3"
          }
        ]
      },
      "56": {
        "name": "tuple-binding_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "57": {
        "name": "tuple-binding_I5_opt",
        "position": 0,
        "symbols": []
      },
      "58": {
        "name": "tuple-binding_I5_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5"
          }
        ]
      },
      "59": {
        "name": "tuple-binding_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "60": {
        "name": "name-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "61": {
        "name": "name-binding_I0_opt",
        "position": 0,
        "symbols": []
      },
      "62": {
        "name": "name-binding_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0"
          }
        ]
      },
      "63": {
        "name": "name-binding_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SHADOW"
          }
        ]
      },
      "64": {
        "name": "name-binding_I2_opt",
        "position": 0,
        "symbols": []
      },
      "65": {
        "name": "name-binding_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I2"
          }
        ]
      },
      "66": {
        "name": "name-binding_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "67": {
        "name": "toplevel-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "68": {
        "name": "multi-let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LET"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "69": {
        "name": "multi-let-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "70": {
        "name": "multi-let-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2"
          }
        ]
      },
      "71": {
        "name": "multi-let-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          }
        ]
      },
      "72": {
        "name": "multi-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "73": {
        "name": "multi-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "74": {
        "name": "let-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "75": {
        "name": "let-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "76": {
        "name": "letrec-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LETREC"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "77": {
        "name": "letrec-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "78": {
        "name": "letrec-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2"
          }
        ]
      },
      "79": {
        "name": "letrec-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "80": {
        "name": "letrec-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "81": {
        "name": "letrec-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "82": {
        "name": "type-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "83": {
        "name": "newtype-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "84": {
        "name": "type-let-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-bind"
          }
        ]
      },
      "85": {
        "name": "type-let-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-bind"
          }
        ]
      },
      "86": {
        "name": "type-let-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE-LET"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "87": {
        "name": "type-let-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "88": {
        "name": "type-let-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2"
          }
        ]
      },
      "89": {
        "name": "type-let-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          }
        ]
      },
      "90": {
        "name": "type-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "91": {
        "name": "type-let-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "92": {
        "name": "contract-stmt",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "contract-stmt_I2"
          }
        ]
      },
      "93": {
        "name": "contract-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "94": {
        "name": "contract-stmt_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann"
          }
        ]
      },
      "95": {
        "name": "fun-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FUN"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "fun-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "96": {
        "name": "fun-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "97": {
        "name": "fun-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "98": {
        "name": "fun-header",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "99": {
        "name": "ty-params",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_opt"
          }
        ]
      },
      "100": {
        "name": "ty-params_I0_opt",
        "position": 0,
        "symbols": []
      },
      "101": {
        "name": "ty-params_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0"
          }
        ]
      },
      "102": {
        "name": "ty-params_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I2"
          }
        ]
      },
      "103": {
        "name": "ty-params_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LANGLE"
          }
        ]
      },
      "104": {
        "name": "ty-params_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "105": {
        "name": "ty-params_I0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "106": {
        "name": "ty-params_I0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "107": {
        "name": "args",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I0"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "108": {
        "name": "args_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "109": {
        "name": "args_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "110": {
        "name": "args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "111": {
        "name": "args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1"
          }
        ]
      },
      "112": {
        "name": "args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "113": {
        "name": "args_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "114": {
        "name": "args_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1"
          }
        ]
      },
      "115": {
        "name": "args_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "116": {
        "name": "return-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0_opt"
          }
        ]
      },
      "117": {
        "name": "return-ann_I0_opt",
        "position": 0,
        "symbols": []
      },
      "118": {
        "name": "return-ann_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0"
          }
        ]
      },
      "119": {
        "name": "return-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "120": {
        "name": "doc-string",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0_opt"
          }
        ]
      },
      "121": {
        "name": "doc-string_I0_opt",
        "position": 0,
        "symbols": []
      },
      "122": {
        "name": "doc-string_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0"
          }
        ]
      },
      "123": {
        "name": "doc-string_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DOC"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "124": {
        "name": "where-clause",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0_opt"
          }
        ]
      },
      "125": {
        "name": "where-clause_I0_opt",
        "position": 0,
        "symbols": []
      },
      "126": {
        "name": "where-clause_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0"
          }
        ]
      },
      "127": {
        "name": "where-clause_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "128": {
        "name": "check-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECK"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "129": {
        "name": "check-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "130": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECKCOLON"
          }
        ]
      },
      "131": {
        "name": "check-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLESCOLON"
          }
        ]
      },
      "132": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "133": {
        "name": "check-test_A0_I2_opt",
        "position": 0,
        "symbols": []
      },
      "134": {
        "name": "check-test_A0_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2"
          }
        ]
      },
      "135": {
        "name": "check-test_A0_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_I1"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "136": {
        "name": "check-test_A0_I2_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "137": {
        "name": "check-test_A0_I2_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "138": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op-postfix"
          }
        ]
      },
      "139": {
        "name": "check-test",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "140": {
        "name": "data-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DATA"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I4_opt"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-sharing"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "141": {
        "name": "data-expr_I4_opt",
        "position": 0,
        "symbols": []
      },
      "142": {
        "name": "data-expr_I4_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I4"
          }
        ]
      },
      "143": {
        "name": "data-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "first-data-variant"
          }
        ]
      },
      "144": {
        "name": "data-expr_I5_star",
        "position": 0,
        "symbols": []
      },
      "145": {
        "name": "data-expr_I5_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5"
          }
        ]
      },
      "146": {
        "name": "data-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-variant"
          }
        ]
      },
      "147": {
        "name": "variant-constructor",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "variant-members"
          }
        ]
      },
      "148": {
        "name": "first-data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "149": {
        "name": "first-data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "150": {
        "name": "data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "151": {
        "name": "data-variant",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "152": {
        "name": "variant-members",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "153": {
        "name": "variant-members_I1_opt",
        "position": 0,
        "symbols": []
      },
      "154": {
        "name": "variant-members_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1"
          }
        ]
      },
      "155": {
        "name": "variant-members_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "156": {
        "name": "variant-members_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "157": {
        "name": "variant-members_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1"
          }
        ]
      },
      "158": {
        "name": "variant-members_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "variant-member"
          }
        ]
      },
      "159": {
        "name": "variant-member",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "160": {
        "name": "variant-member_I0_opt",
        "position": 0,
        "symbols": []
      },
      "161": {
        "name": "variant-member_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0"
          }
        ]
      },
      "162": {
        "name": "variant-member_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "163": {
        "name": "data-with",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0_opt"
          }
        ]
      },
      "164": {
        "name": "data-with_I0_opt",
        "position": 0,
        "symbols": []
      },
      "165": {
        "name": "data-with_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0"
          }
        ]
      },
      "166": {
        "name": "data-with_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WITH"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "167": {
        "name": "data-sharing",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0_opt"
          }
        ]
      },
      "168": {
        "name": "data-sharing_I0_opt",
        "position": 0,
        "symbols": []
      },
      "169": {
        "name": "data-sharing_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0"
          }
        ]
      },
      "170": {
        "name": "data-sharing_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SHARING"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "171": {
        "name": "var-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "VAR"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "172": {
        "name": "rec-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REC"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "173": {
        "name": "assign-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONEQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "174": {
        "name": "when-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "WHEN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "when-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "175": {
        "name": "when-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "176": {
        "name": "when-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "177": {
        "name": "binop-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "178": {
        "name": "binop-expr_I1_star",
        "position": 0,
        "symbols": []
      },
      "179": {
        "name": "binop-expr_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1"
          }
        ]
      },
      "180": {
        "name": "binop-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "181": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PLUS"
          }
        ]
      },
      "182": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DASH"
          }
        ]
      },
      "183": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "184": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SLASH"
          }
        ]
      },
      "185": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LEQ"
          }
        ]
      },
      "186": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GEQ"
          }
        ]
      },
      "187": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALEQUAL"
          }
        ]
      },
      "188": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SPACESHIP"
          }
        ]
      },
      "189": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALTILDE"
          }
        ]
      },
      "190": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NEQ"
          }
        ]
      },
      "191": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "192": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "193": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "AND"
          }
        ]
      },
      "194": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "OR"
          }
        ]
      },
      "195": {
        "name": "binop",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CARET"
          }
        ]
      },
      "196": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IS"
          }
        ]
      },
      "197": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALEQUAL"
          }
        ]
      },
      "198": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALTILDE"
          }
        ]
      },
      "199": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISSPACESHIP"
          }
        ]
      },
      "200": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISROUGHLY"
          }
        ]
      },
      "201": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOT"
          }
        ]
      },
      "202": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALEQUAL"
          }
        ]
      },
      "203": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALTILDE"
          }
        ]
      },
      "204": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTSPACESHIP"
          }
        ]
      },
      "205": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISES"
          }
        ]
      },
      "206": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESOTHER"
          }
        ]
      },
      "207": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIES"
          }
        ]
      },
      "208": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIESNOT"
          }
        ]
      },
      "209": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESSATISFIES"
          }
        ]
      },
      "210": {
        "name": "check-op",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESVIOLATES"
          }
        ]
      },
      "211": {
        "name": "check-op-postfix",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESNOT"
          }
        ]
      },
      "212": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr"
          }
        ]
      },
      "213": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "214": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prim-expr"
          }
        ]
      },
      "215": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "lambda-expr"
          }
        ]
      },
      "216": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "method-expr"
          }
        ]
      },
      "217": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-expr"
          }
        ]
      },
      "218": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-expr"
          }
        ]
      },
      "219": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-expr"
          }
        ]
      },
      "220": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-get"
          }
        ]
      },
      "221": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-expr"
          }
        ]
      },
      "222": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "template-expr"
          }
        ]
      },
      "223": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bracket-expr"
          }
        ]
      },
      "224": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "get-bang-expr"
          }
        ]
      },
      "225": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "update-expr"
          }
        ]
      },
      "226": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "extend-expr"
          }
        ]
      },
      "227": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr"
          }
        ]
      },
      "228": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr"
          }
        ]
      },
      "229": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr"
          }
        ]
      },
      "230": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr"
          }
        ]
      },
      "231": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "user-block-expr"
          }
        ]
      },
      "232": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr"
          }
        ]
      },
      "233": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr"
          }
        ]
      },
      "234": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr"
          }
        ]
      },
      "235": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr"
          }
        ]
      },
      "236": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr"
          }
        ]
      },
      "237": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select"
          }
        ]
      },
      "238": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend"
          }
        ]
      },
      "239": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter"
          }
        ]
      },
      "240": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order"
          }
        ]
      },
      "241": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extract"
          }
        ]
      },
      "242": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update"
          }
        ]
      },
      "243": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-expr"
          }
        ]
      },
      "244": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr"
          }
        ]
      },
      "245": {
        "name": "expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-expr"
          }
        ]
      },
      "246": {
        "name": "template-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DOTDOTDOT"
          }
        ]
      },
      "247": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNTERMINATED-STRING"
          }
        ]
      },
      "248": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNTERMINATED-BLOCK-COMMENT"
          }
        ]
      },
      "249": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAD-OPER"
          }
        ]
      },
      "250": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAD-NUMBER"
          }
        ]
      },
      "251": {
        "name": "bad-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "UNKNOWN"
          }
        ]
      },
      "252": {
        "name": "paren-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "253": {
        "name": "paren-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "254": {
        "name": "paren-expr_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "255": {
        "name": "id-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "256": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "num-expr"
          }
        ]
      },
      "257": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "frac-expr"
          }
        ]
      },
      "258": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bool-expr"
          }
        ]
      },
      "259": {
        "name": "prim-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "string-expr"
          }
        ]
      },
      "260": {
        "name": "num-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NUMBER"
          }
        ]
      },
      "261": {
        "name": "frac-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "RATIONAL"
          }
        ]
      },
      "262": {
        "name": "bool-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TRUE"
          }
        ]
      },
      "263": {
        "name": "bool-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FALSE"
          }
        ]
      },
      "264": {
        "name": "string-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "265": {
        "name": "lambda-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LAM"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "266": {
        "name": "lambda-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "267": {
        "name": "lambda-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "268": {
        "name": "lambda-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "269": {
        "name": "method-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "method-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "270": {
        "name": "method-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "271": {
        "name": "method-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "272": {
        "name": "app-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "app-args"
          }
        ]
      },
      "273": {
        "name": "app-args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "274": {
        "name": "opt-comma-binops",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_opt"
          }
        ]
      },
      "275": {
        "name": "opt-comma-binops_I0_opt",
        "position": 0,
        "symbols": []
      },
      "276": {
        "name": "opt-comma-binops_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0"
          }
        ]
      },
      "277": {
        "name": "opt-comma-binops_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1_star"
          }
        ]
      },
      "278": {
        "name": "opt-comma-binops_I0_I1_star",
        "position": 0,
        "symbols": []
      },
      "279": {
        "name": "opt-comma-binops_I0_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1"
          }
        ]
      },
      "280": {
        "name": "opt-comma-binops_I0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "281": {
        "name": "inst-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "282": {
        "name": "inst-expr_I3_star",
        "position": 0,
        "symbols": []
      },
      "283": {
        "name": "inst-expr_I3_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3"
          }
        ]
      },
      "284": {
        "name": "inst-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "285": {
        "name": "tuple-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "286": {
        "name": "tuple-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "287": {
        "name": "tuple-fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "288": {
        "name": "tuple-fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1"
          }
        ]
      },
      "289": {
        "name": "tuple-fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "290": {
        "name": "tuple-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "291": {
        "name": "tuple-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2"
          }
        ]
      },
      "292": {
        "name": "tuple-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "293": {
        "name": "tuple-get",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "NUMBER"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "294": {
        "name": "obj-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "295": {
        "name": "obj-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "296": {
        "name": "obj-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "297": {
        "name": "obj-fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "298": {
        "name": "obj-fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1"
          }
        ]
      },
      "299": {
        "name": "obj-fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          }
        ]
      },
      "300": {
        "name": "obj-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "301": {
        "name": "obj-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I2"
          }
        ]
      },
      "302": {
        "name": "obj-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "303": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "304": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "305": {
        "name": "obj-field_A1_I2_opt",
        "position": 0,
        "symbols": []
      },
      "306": {
        "name": "obj-field_A1_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2"
          }
        ]
      },
      "307": {
        "name": "obj-field_A1_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "308": {
        "name": "obj-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A2_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "309": {
        "name": "obj-field_A2_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "310": {
        "name": "obj-field_A2_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "311": {
        "name": "fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "312": {
        "name": "fields_I1_star",
        "position": 0,
        "symbols": []
      },
      "313": {
        "name": "fields_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1"
          }
        ]
      },
      "314": {
        "name": "fields_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "field"
          }
        ]
      },
      "315": {
        "name": "fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "316": {
        "name": "fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I2"
          }
        ]
      },
      "317": {
        "name": "fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "318": {
        "name": "field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "319": {
        "name": "field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "field_A1_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "320": {
        "name": "field_A1_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "321": {
        "name": "field_A1_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "322": {
        "name": "key",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "323": {
        "name": "construct-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "construct-modifier"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "324": {
        "name": "construct-modifier",
        "position": 0,
        "symbols": []
      },
      "325": {
        "name": "construct-modifier",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LAZY"
          }
        ]
      },
      "326": {
        "name": "table-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "table-rows"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "327": {
        "name": "table-headers",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_opt"
          }
        ]
      },
      "328": {
        "name": "table-headers_I0_opt",
        "position": 0,
        "symbols": []
      },
      "329": {
        "name": "table-headers_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0"
          }
        ]
      },
      "330": {
        "name": "table-headers_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-header"
          }
        ]
      },
      "331": {
        "name": "table-headers_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "332": {
        "name": "table-headers_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0"
          }
        ]
      },
      "333": {
        "name": "table-headers_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-header"
          }
        ]
      },
      "334": {
        "name": "list-table-header",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "335": {
        "name": "table-header",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "336": {
        "name": "table-header_I1_opt",
        "position": 0,
        "symbols": []
      },
      "337": {
        "name": "table-header_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header_I1"
          }
        ]
      },
      "338": {
        "name": "table-header_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "339": {
        "name": "table-rows",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_opt"
          }
        ]
      },
      "340": {
        "name": "table-rows_I0_opt",
        "position": 0,
        "symbols": []
      },
      "341": {
        "name": "table-rows_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0"
          }
        ]
      },
      "342": {
        "name": "table-rows_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "343": {
        "name": "table-rows_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "344": {
        "name": "table-rows_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0"
          }
        ]
      },
      "345": {
        "name": "table-rows_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "346": {
        "name": "table-row",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "347": {
        "name": "table-items",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_opt"
          }
        ]
      },
      "348": {
        "name": "table-items_I0_opt",
        "position": 0,
        "symbols": []
      },
      "349": {
        "name": "table-items_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0"
          }
        ]
      },
      "350": {
        "name": "table-items_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "351": {
        "name": "table-items_I0_I0_star",
        "position": 0,
        "symbols": []
      },
      "352": {
        "name": "table-items_I0_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0"
          }
        ]
      },
      "353": {
        "name": "table-items_I0_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-item"
          }
        ]
      },
      "354": {
        "name": "list-table-item",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "355": {
        "name": "reactor-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REACTOR"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "356": {
        "name": "dot-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "357": {
        "name": "bracket-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "358": {
        "name": "get-bang-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "359": {
        "name": "extend-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "360": {
        "name": "update-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "361": {
        "name": "if-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "IF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I5_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "362": {
        "name": "if-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "363": {
        "name": "if-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "364": {
        "name": "if-expr_I4_star",
        "position": 0,
        "symbols": []
      },
      "365": {
        "name": "if-expr_I4_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4"
          }
        ]
      },
      "366": {
        "name": "if-expr_I4",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "else-if"
          }
        ]
      },
      "367": {
        "name": "if-expr_I5_opt",
        "position": 0,
        "symbols": []
      },
      "368": {
        "name": "if-expr_I5_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I5"
          }
        ]
      },
      "369": {
        "name": "if-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "370": {
        "name": "else-if",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "371": {
        "name": "if-pipe-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ASK"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "372": {
        "name": "if-pipe-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "373": {
        "name": "if-pipe-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "374": {
        "name": "if-pipe-expr_I2_star",
        "position": 0,
        "symbols": []
      },
      "375": {
        "name": "if-pipe-expr_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2"
          }
        ]
      },
      "376": {
        "name": "if-pipe-expr_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-branch"
          }
        ]
      },
      "377": {
        "name": "if-pipe-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "378": {
        "name": "if-pipe-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3"
          }
        ]
      },
      "379": {
        "name": "if-pipe-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "380": {
        "name": "if-pipe-branch",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "381": {
        "name": "cases-binding",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "382": {
        "name": "cases-binding_I0_opt",
        "position": 0,
        "symbols": []
      },
      "383": {
        "name": "cases-binding_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0"
          }
        ]
      },
      "384": {
        "name": "cases-binding_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "385": {
        "name": "cases-args",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "386": {
        "name": "cases-args_I1_opt",
        "position": 0,
        "symbols": []
      },
      "387": {
        "name": "cases-args_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1"
          }
        ]
      },
      "388": {
        "name": "cases-args_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "389": {
        "name": "cases-args_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "390": {
        "name": "cases-args_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1"
          }
        ]
      },
      "391": {
        "name": "cases-args_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "cases-binding"
          }
        ]
      },
      "392": {
        "name": "cases-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "CASES"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I5"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I7_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "393": {
        "name": "cases-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "394": {
        "name": "cases-expr_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "395": {
        "name": "cases-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "396": {
        "name": "cases-expr_I5",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "397": {
        "name": "cases-expr_I6_star",
        "position": 0,
        "symbols": []
      },
      "398": {
        "name": "cases-expr_I6_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6"
          }
        ]
      },
      "399": {
        "name": "cases-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch"
          }
        ]
      },
      "400": {
        "name": "cases-expr_I7_opt",
        "position": 0,
        "symbols": []
      },
      "401": {
        "name": "cases-expr_I7_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I7"
          }
        ]
      },
      "402": {
        "name": "cases-expr_I7",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "403": {
        "name": "cases-branch",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "404": {
        "name": "cases-branch_I2_opt",
        "position": 0,
        "symbols": []
      },
      "405": {
        "name": "cases-branch_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch_I2"
          }
        ]
      },
      "406": {
        "name": "cases-branch_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args"
          }
        ]
      },
      "407": {
        "name": "for-bind",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "408": {
        "name": "for-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "FOR"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I6"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "409": {
        "name": "for-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "410": {
        "name": "for-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3"
          }
        ]
      },
      "411": {
        "name": "for-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "412": {
        "name": "for-expr_I3_I1_star",
        "position": 0,
        "symbols": []
      },
      "413": {
        "name": "for-expr_I3_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1"
          }
        ]
      },
      "414": {
        "name": "for-expr_I3_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "for-bind"
          }
        ]
      },
      "415": {
        "name": "for-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "416": {
        "name": "for-expr_I6",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "417": {
        "name": "column-order",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "column-order_I1"
          }
        ]
      },
      "418": {
        "name": "column-order_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "ASCENDING"
          }
        ]
      },
      "419": {
        "name": "column-order_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "DESCENDING"
          }
        ]
      },
      "420": {
        "name": "table-select",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-SELECT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "421": {
        "name": "table-select_I2_star",
        "position": 0,
        "symbols": []
      },
      "422": {
        "name": "table-select_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2"
          }
        ]
      },
      "423": {
        "name": "table-select_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "424": {
        "name": "table-filter",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-FILTER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "425": {
        "name": "table-filter_I2_opt",
        "position": 0,
        "symbols": []
      },
      "426": {
        "name": "table-filter_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2"
          }
        ]
      },
      "427": {
        "name": "table-filter_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "428": {
        "name": "table-filter_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "429": {
        "name": "table-filter_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2"
          }
        ]
      },
      "430": {
        "name": "table-filter_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "431": {
        "name": "table-order",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-ORDER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "432": {
        "name": "table-extract",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTRACT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "433": {
        "name": "table-update",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-UPDATE"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "434": {
        "name": "table-update_I2_opt",
        "position": 0,
        "symbols": []
      },
      "435": {
        "name": "table-update_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2"
          }
        ]
      },
      "436": {
        "name": "table-update_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "437": {
        "name": "table-update_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "438": {
        "name": "table-update_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2"
          }
        ]
      },
      "439": {
        "name": "table-update_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "440": {
        "name": "table-extend",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTEND"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "441": {
        "name": "table-extend_I2_opt",
        "position": 0,
        "symbols": []
      },
      "442": {
        "name": "table-extend_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2"
          }
        ]
      },
      "443": {
        "name": "table-extend_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "444": {
        "name": "table-extend_I2_I2_star",
        "position": 0,
        "symbols": []
      },
      "445": {
        "name": "table-extend_I2_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2"
          }
        ]
      },
      "446": {
        "name": "table-extend_I2_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "447": {
        "name": "table-extend-fields",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "448": {
        "name": "table-extend-fields_I0_star",
        "position": 0,
        "symbols": []
      },
      "449": {
        "name": "table-extend-fields_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0"
          }
        ]
      },
      "450": {
        "name": "table-extend-fields_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-extend-field"
          }
        ]
      },
      "451": {
        "name": "table-extend-fields_I2_opt",
        "position": 0,
        "symbols": []
      },
      "452": {
        "name": "table-extend-fields_I2_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2"
          }
        ]
      },
      "453": {
        "name": "table-extend-fields_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "454": {
        "name": "list-table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "455": {
        "name": "table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "456": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 0,
        "symbols": []
      },
      "457": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1"
          }
        ]
      },
      "458": {
        "name": "table-extend-field_A0_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "459": {
        "name": "table-extend-field",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "OF"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "460": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 0,
        "symbols": []
      },
      "461": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1"
          }
        ]
      },
      "462": {
        "name": "table-extend-field_A1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "463": {
        "name": "load-table-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LOAD-TABLE"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "464": {
        "name": "load-table-expr_I3_opt",
        "position": 0,
        "symbols": []
      },
      "465": {
        "name": "load-table-expr_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3"
          }
        ]
      },
      "466": {
        "name": "load-table-expr_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs"
          }
        ]
      },
      "467": {
        "name": "load-table-specs",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "468": {
        "name": "load-table-specs_I0_star",
        "position": 0,
        "symbols": []
      },
      "469": {
        "name": "load-table-specs_I0_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0"
          }
        ]
      },
      "470": {
        "name": "load-table-specs_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "471": {
        "name": "load-table-spec",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SOURCECOLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "472": {
        "name": "load-table-spec",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SANITIZE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "473": {
        "name": "user-block-expr",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "474": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "475": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "476": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann"
          }
        ]
      },
      "477": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann"
          }
        ]
      },
      "478": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "pred-ann"
          }
        ]
      },
      "479": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "480": {
        "name": "ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann"
          }
        ]
      },
      "481": {
        "name": "name-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "482": {
        "name": "record-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "483": {
        "name": "record-ann_I1_opt",
        "position": 0,
        "symbols": []
      },
      "484": {
        "name": "record-ann_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1"
          }
        ]
      },
      "485": {
        "name": "record-ann_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1_star"
          }
        ]
      },
      "486": {
        "name": "record-ann_I1_I1_star",
        "position": 0,
        "symbols": []
      },
      "487": {
        "name": "record-ann_I1_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1"
          }
        ]
      },
      "488": {
        "name": "record-ann_I1_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann-field"
          }
        ]
      },
      "489": {
        "name": "ann-field",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "490": {
        "name": "tuple-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "491": {
        "name": "tuple-ann_I2_star",
        "position": 0,
        "symbols": []
      },
      "492": {
        "name": "tuple-ann_I2_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2"
          }
        ]
      },
      "493": {
        "name": "tuple-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "494": {
        "name": "tuple-ann_I3_opt",
        "position": 0,
        "symbols": []
      },
      "495": {
        "name": "tuple-ann_I3_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3"
          }
        ]
      },
      "496": {
        "name": "tuple-ann_I3",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "497": {
        "name": "noparen-arrow-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "498": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 0,
        "symbols": []
      },
      "499": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0"
          }
        ]
      },
      "500": {
        "name": "noparen-arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "501": {
        "name": "arrow-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I0"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "502": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "503": {
        "name": "arrow-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "504": {
        "name": "arrow-ann_I1_opt",
        "position": 0,
        "symbols": []
      },
      "505": {
        "name": "arrow-ann_I1_opt",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1"
          }
        ]
      },
      "506": {
        "name": "arrow-ann_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "507": {
        "name": "app-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I0"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "508": {
        "name": "app-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "509": {
        "name": "app-ann_I0",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "510": {
        "name": "comma-anns",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "511": {
        "name": "comma-anns_I1_star",
        "position": 0,
        "symbols": []
      },
      "512": {
        "name": "comma-anns_I1_star",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1"
          }
        ]
      },
      "513": {
        "name": "comma-anns_I1",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "514": {
        "name": "pred-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "pred-ann_I2"
          },
          {
            "type": "Nonterm",
            "name": "id-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "515": {
        "name": "pred-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "516": {
        "name": "pred-ann_I2",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "517": {
        "name": "dot-ann",
        "position": 0,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "518": {
        "name": "START",
        "position": 0,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "program"
          }
        ]
      },
      "790": {
        "name": "program",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "877": {
        "name": "prelude",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "1140": {
        "name": "prelude_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0"
          }
        ]
      },
      "1186": {
        "name": "prelude_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-stmt"
          }
        ]
      },
      "4406": {
        "name": "program",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "4408": {
        "name": "block",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          }
        ]
      },
      "8869": {
        "name": "prelude",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "9000": {
        "name": "prelude_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I1"
          }
        ]
      },
      "9045": {
        "name": "prelude_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "provide-types-stmt"
          }
        ]
      },
      "9226": {
        "name": "id-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "9266": {
        "name": "string-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "9350": {
        "name": "provide-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "9396": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-expr"
          }
        ]
      },
      "9398": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-expr"
          }
        ]
      },
      "9400": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "9402": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fun-expr"
          }
        ]
      },
      "9404": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr"
          }
        ]
      },
      "9406": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "when-expr"
          }
        ]
      },
      "9408": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "9410": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "rec-expr"
          }
        ]
      },
      "9412": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "assign-expr"
          }
        ]
      },
      "9414": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test"
          }
        ]
      },
      "9416": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr"
          }
        ]
      },
      "9418": {
        "name": "stmt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "contract-stmt"
          }
        ]
      },
      "9428": {
        "name": "check-test",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "9898": {
        "name": "toplevel-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "9900": {
        "name": "binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "9902": {
        "name": "binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding"
          }
        ]
      },
      "10245": {
        "name": "name-binding_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0"
          }
        ]
      },
      "10247": {
        "name": "name-binding_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SHADOW"
          }
        ]
      },
      "10249": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr"
          }
        ]
      },
      "10376": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr"
          }
        ]
      },
      "10452": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr"
          }
        ]
      },
      "10542": {
        "name": "paren-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "10577": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECKCOLON"
          }
        ]
      },
      "10620": {
        "name": "check-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EXAMPLESCOLON"
          }
        ]
      },
      "10663": {
        "name": "paren-expr_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "10781": {
        "name": "binop-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "11204": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr"
          }
        ]
      },
      "11242": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "id-expr"
          }
        ]
      },
      "11280": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prim-expr"
          }
        ]
      },
      "11318": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "lambda-expr"
          }
        ]
      },
      "11356": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "method-expr"
          }
        ]
      },
      "11394": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-expr"
          }
        ]
      },
      "11432": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-expr"
          }
        ]
      },
      "11470": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-expr"
          }
        ]
      },
      "11508": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-get"
          }
        ]
      },
      "11546": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-expr"
          }
        ]
      },
      "11584": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "template-expr"
          }
        ]
      },
      "11622": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bracket-expr"
          }
        ]
      },
      "11660": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "get-bang-expr"
          }
        ]
      },
      "11698": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "update-expr"
          }
        ]
      },
      "11736": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "extend-expr"
          }
        ]
      },
      "11774": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr"
          }
        ]
      },
      "11812": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr"
          }
        ]
      },
      "11850": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr"
          }
        ]
      },
      "11888": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr"
          }
        ]
      },
      "11926": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "user-block-expr"
          }
        ]
      },
      "11964": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr"
          }
        ]
      },
      "12002": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "construct-expr"
          }
        ]
      },
      "12040": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select"
          }
        ]
      },
      "12078": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend"
          }
        ]
      },
      "12116": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter"
          }
        ]
      },
      "12154": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-order"
          }
        ]
      },
      "12192": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extract"
          }
        ]
      },
      "12230": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update"
          }
        ]
      },
      "12268": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-expr"
          }
        ]
      },
      "12306": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr"
          }
        ]
      },
      "12344": {
        "name": "expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "reactor-expr"
          }
        ]
      },
      "12382": {
        "name": "template-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DOTDOTDOT"
          }
        ]
      },
      "12537": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "num-expr"
          }
        ]
      },
      "12575": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "frac-expr"
          }
        ]
      },
      "12613": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "bool-expr"
          }
        ]
      },
      "12651": {
        "name": "prim-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "string-expr"
          }
        ]
      },
      "12689": {
        "name": "num-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NUMBER"
          }
        ]
      },
      "12727": {
        "name": "frac-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RATIONAL"
          }
        ]
      },
      "12765": {
        "name": "bool-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "TRUE"
          }
        ]
      },
      "12803": {
        "name": "bool-expr",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "FALSE"
          }
        ]
      },
      "13775": {
        "name": "block_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "stmt"
          }
        ]
      },
      "13818": {
        "name": "block_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "block_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "block_I0"
          }
        ]
      },
      "18236": {
        "name": "prelude",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I1_opt"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          }
        ]
      },
      "18500": {
        "name": "provide-types-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "18545": {
        "name": "provide-types-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE-TYPES"
          },
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "18721": {
        "name": "provide-stmt",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PROVIDE"
          },
          {
            "type": "Nonterm",
            "name": "stmt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "18869": {
        "name": "check-test",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op-postfix"
          }
        ]
      },
      "18871": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "IS"
          }
        ]
      },
      "18903": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALEQUAL"
          }
        ]
      },
      "18935": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISEQUALTILDE"
          }
        ]
      },
      "18967": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISSPACESHIP"
          }
        ]
      },
      "18999": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISROUGHLY"
          }
        ]
      },
      "19031": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOT"
          }
        ]
      },
      "19063": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALEQUAL"
          }
        ]
      },
      "19095": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTEQUALTILDE"
          }
        ]
      },
      "19127": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ISNOTSPACESHIP"
          }
        ]
      },
      "19159": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISES"
          }
        ]
      },
      "19191": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESOTHER"
          }
        ]
      },
      "19223": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIES"
          }
        ]
      },
      "19255": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SATISFIESNOT"
          }
        ]
      },
      "19287": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESSATISFIES"
          }
        ]
      },
      "19319": {
        "name": "check-op",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESVIOLATES"
          }
        ]
      },
      "19351": {
        "name": "check-op-postfix",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RAISESNOT"
          }
        ]
      },
      "19353": {
        "name": "key",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "19373": {
        "name": "tuple-fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "19404": {
        "name": "obj-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "19582": {
        "name": "ty-params",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_opt"
          }
        ]
      },
      "19585": {
        "name": "ty-params_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0"
          }
        ]
      },
      "19593": {
        "name": "ty-params_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LANGLE"
          }
        ]
      },
      "19595": {
        "name": "ty-params_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "19794": {
        "name": "obj-fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "19831": {
        "name": "name-binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "19836": {
        "name": "let-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "19840": {
        "name": "let-binding",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "var-expr"
          }
        ]
      },
      "19985": {
        "name": "type-let-bind",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-bind"
          }
        ]
      },
      "19989": {
        "name": "type-let-bind",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "newtype-bind"
          }
        ]
      },
      "20394": {
        "name": "binop-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          }
        ]
      },
      "20927": {
        "name": "app-expr",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "app-args"
          }
        ]
      },
      "21596": {
        "name": "construct-modifier",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LAZY"
          }
        ]
      },
      "21671": {
        "name": "table-headers",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_opt"
          }
        ]
      },
      "21674": {
        "name": "table-headers_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0"
          }
        ]
      },
      "21856": {
        "name": "if-pipe-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "21859": {
        "name": "if-pipe-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "21904": {
        "name": "cases-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "21909": {
        "name": "cases-expr_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "22370": {
        "name": "prelude_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "prelude_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "prelude_I2"
          }
        ]
      },
      "22415": {
        "name": "prelude_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-stmt"
          }
        ]
      },
      "22824": {
        "name": "record-ann_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1"
          }
        ]
      },
      "22826": {
        "name": "record-ann_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1_star"
          }
        ]
      },
      "22832": {
        "name": "name-ann",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "22844": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "22850": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann"
          }
        ]
      },
      "22855": {
        "name": "contract-stmt_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "22857": {
        "name": "comma-anns",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "22905": {
        "name": "contract-stmt",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "contract-stmt_I2"
          }
        ]
      },
      "22907": {
        "name": "contract-stmt_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann"
          }
        ]
      },
      "22909": {
        "name": "arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "22915": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "22916": {
        "name": "app-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-ann"
          }
        ]
      },
      "22922": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann"
          }
        ]
      },
      "22927": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann"
          }
        ]
      },
      "22932": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "pred-ann"
          }
        ]
      },
      "22937": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "22938": {
        "name": "app-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "dot-ann"
          }
        ]
      },
      "22944": {
        "name": "ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann"
          }
        ]
      },
      "22951": {
        "name": "noparen-arrow-ann_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0"
          }
        ]
      },
      "22953": {
        "name": "noparen-arrow-ann_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "22968": {
        "name": "assign-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONEQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "22977": {
        "name": "let-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "22981": {
        "name": "check-test_A0_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2"
          }
        ]
      },
      "23103": {
        "name": "args_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "23108": {
        "name": "fun-header",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "23134": {
        "name": "args_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENAFTERBRACE"
          }
        ]
      },
      "23139": {
        "name": "tuple-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "23172": {
        "name": "tuple-binding_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1"
          }
        ]
      },
      "23178": {
        "name": "lambda-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "23223": {
        "name": "lambda-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "23478": {
        "name": "comma-names",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "23510": {
        "name": "tuple-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "23548": {
        "name": "obj-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "23586": {
        "name": "obj-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "23599": {
        "name": "name-binding",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I0_opt"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "name-binding_I2_opt"
          }
        ]
      },
      "23601": {
        "name": "name-binding_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "name-binding_I2"
          }
        ]
      },
      "23748": {
        "name": "user-block-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "24144": {
        "name": "check-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "check-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "24155": {
        "name": "when-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "24198": {
        "name": "when-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "24245": {
        "name": "opt-comma-binops_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1_star"
          }
        ]
      },
      "24355": {
        "name": "opt-comma-binops",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_opt"
          }
        ]
      },
      "24357": {
        "name": "opt-comma-binops_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0"
          }
        ]
      },
      "24429": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "STAR"
          }
        ]
      },
      "24460": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LT"
          }
        ]
      },
      "24491": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "24522": {
        "name": "binop-expr_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr_I1"
          }
        ]
      },
      "24588": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PLUS"
          }
        ]
      },
      "24619": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DASH"
          }
        ]
      },
      "24650": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SLASH"
          }
        ]
      },
      "24681": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "LEQ"
          }
        ]
      },
      "24712": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GEQ"
          }
        ]
      },
      "24743": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALEQUAL"
          }
        ]
      },
      "24774": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SPACESHIP"
          }
        ]
      },
      "24805": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "EQUALTILDE"
          }
        ]
      },
      "24836": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NEQ"
          }
        ]
      },
      "24867": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "AND"
          }
        ]
      },
      "24898": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "OR"
          }
        ]
      },
      "24929": {
        "name": "binop",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "CARET"
          }
        ]
      },
      "24960": {
        "name": "dot-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "25197": {
        "name": "get-bang-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "25273": {
        "name": "paren-expr",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "paren-expr_I0"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "25355": {
        "name": "method-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "25400": {
        "name": "method-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "25559": {
        "name": "table-rows",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_opt"
          }
        ]
      },
      "25561": {
        "name": "table-rows_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0"
          }
        ]
      },
      "25570": {
        "name": "table-header",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "25583": {
        "name": "table-headers_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-header"
          }
        ]
      },
      "25588": {
        "name": "table-headers_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-headers_I0_I0"
          }
        ]
      },
      "25590": {
        "name": "table-headers_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-header"
          }
        ]
      },
      "25636": {
        "name": "fields",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "25642": {
        "name": "if-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "25687": {
        "name": "if-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "26022": {
        "name": "table-filter_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2"
          }
        ]
      },
      "26147": {
        "name": "table-update_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2"
          }
        ]
      },
      "26189": {
        "name": "table-extend_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2"
          }
        ]
      },
      "26245": {
        "name": "import-stmt",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "INCLUDE"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "26291": {
        "name": "import-name",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "26380": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special"
          }
        ]
      },
      "26425": {
        "name": "import-source",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-name"
          }
        ]
      },
      "26570": {
        "name": "record-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "26615": {
        "name": "record-ann_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann-field"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1_star"
          }
        ]
      },
      "26635": {
        "name": "comma-anns",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          }
        ]
      },
      "26685": {
        "name": "arrow-ann_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns"
          }
        ]
      },
      "26692": {
        "name": "arrow-ann_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1"
          }
        ]
      },
      "26702": {
        "name": "newtype-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "26704": {
        "name": "check-test",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "check-op"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_opt"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "26706": {
        "name": "check-test_A0_I2_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "26768": {
        "name": "check-test_A0_I2_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "26799": {
        "name": "fun-header",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Nonterm",
            "name": "args"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          }
        ]
      },
      "26802": {
        "name": "return-ann",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0_opt"
          }
        ]
      },
      "26805": {
        "name": "return-ann_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "return-ann_I0"
          }
        ]
      },
      "26838": {
        "name": "args_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "26856": {
        "name": "args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1"
          }
        ]
      },
      "26859": {
        "name": "tuple-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "26863": {
        "name": "tuple-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2_opt"
          }
        ]
      },
      "26865": {
        "name": "tuple-fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-fields_I1"
          }
        ]
      },
      "26868": {
        "name": "tuple-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-fields_I2"
          }
        ]
      },
      "26872": {
        "name": "tuple-binding_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "26873": {
        "name": "tuple-binding_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "26878": {
        "name": "tuple-binding_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3"
          }
        ]
      },
      "26924": {
        "name": "doc-string",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0_opt"
          }
        ]
      },
      "26968": {
        "name": "doc-string_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "doc-string_I0"
          }
        ]
      },
      "27056": {
        "name": "comma-names",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          }
        ]
      },
      "27066": {
        "name": "ty-params_I0",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I0"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Nonterm",
            "name": "ty-params_I0_I2"
          }
        ]
      },
      "27069": {
        "name": "ty-params_I0_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "27072": {
        "name": "ty-params_I0_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "GT"
          }
        ]
      },
      "27080": {
        "name": "obj-field_A1_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2"
          }
        ]
      },
      "27174": {
        "name": "obj-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "27178": {
        "name": "obj-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-field"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I2_opt"
          }
        ]
      },
      "27180": {
        "name": "obj-fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields_I1"
          }
        ]
      },
      "27183": {
        "name": "obj-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "obj-fields_I2"
          }
        ]
      },
      "27185": {
        "name": "obj-field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "27191": {
        "name": "name-binding_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "27246": {
        "name": "multi-let-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2"
          }
        ]
      },
      "27250": {
        "name": "multi-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "27293": {
        "name": "multi-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "27340": {
        "name": "letrec-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "27383": {
        "name": "letrec-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "27464": {
        "name": "letrec-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2"
          }
        ]
      },
      "27480": {
        "name": "type-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "27523": {
        "name": "type-let-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "27604": {
        "name": "type-let-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2"
          }
        ]
      },
      "27608": {
        "name": "fun-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "27653": {
        "name": "fun-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "27729": {
        "name": "var-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "VAR"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "27731": {
        "name": "rec-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "REC"
          },
          {
            "type": "Nonterm",
            "name": "toplevel-binding"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "27735": {
        "name": "opt-comma-binops_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1_star"
          }
        ]
      },
      "27742": {
        "name": "app-args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "27824": {
        "name": "binop-expr_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "27938": {
        "name": "bracket-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "28135": {
        "name": "table-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "table-rows"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "28173": {
        "name": "table-rows_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "28174": {
        "name": "table-rows_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-row"
          }
        ]
      },
      "28177": {
        "name": "table-rows_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-rows_I0_I0"
          }
        ]
      },
      "28179": {
        "name": "table-row",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "28268": {
        "name": "table-header",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-header_I1_opt"
          }
        ]
      },
      "28272": {
        "name": "table-header_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header_I1"
          }
        ]
      },
      "28276": {
        "name": "list-table-header",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-header"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "28278": {
        "name": "reactor-expr",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "REACTOR"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "28322": {
        "name": "fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "28716": {
        "name": "if-pipe-expr_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2"
          }
        ]
      },
      "28719": {
        "name": "if-pipe-expr_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-branch"
          }
        ]
      },
      "28722": {
        "name": "if-pipe-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3"
          }
        ]
      },
      "28770": {
        "name": "for-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "28814": {
        "name": "for-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3"
          }
        ]
      },
      "28857": {
        "name": "table-select_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2"
          }
        ]
      },
      "28898": {
        "name": "table-filter_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "28988": {
        "name": "table-update_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "29036": {
        "name": "table-extend_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "29121": {
        "name": "load-table-expr_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3"
          }
        ]
      },
      "29123": {
        "name": "load-table-expr_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs"
          }
        ]
      },
      "29277": {
        "name": "ann-field",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "29283": {
        "name": "record-ann_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "record-ann_I1_I1"
          }
        ]
      },
      "29286": {
        "name": "dot-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "29292": {
        "name": "pred-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          }
        ]
      },
      "29294": {
        "name": "pred-ann_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENSPACE"
          }
        ]
      },
      "29304": {
        "name": "comma-anns_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-anns_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns_I1"
          }
        ]
      },
      "29324": {
        "name": "noparen-arrow-ann",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "noparen-arrow-ann_I0_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "29339": {
        "name": "type-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "29378": {
        "name": "return-ann_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "29402": {
        "name": "args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          }
        ]
      },
      "29409": {
        "name": "args",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I0"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "29413": {
        "name": "tuple-fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "29416": {
        "name": "tuple-binding",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "29602": {
        "name": "doc-string_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "DOC"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "29650": {
        "name": "comma-names_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "comma-names_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "comma-names_I1"
          }
        ]
      },
      "29654": {
        "name": "obj-field_A1_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "29659": {
        "name": "obj-field_A2_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "29704": {
        "name": "obj-field_A2_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "29752": {
        "name": "obj-fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "obj-field"
          }
        ]
      },
      "29756": {
        "name": "multi-let-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          }
        ]
      },
      "29798": {
        "name": "letrec-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          }
        ]
      },
      "29840": {
        "name": "type-bind",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "EQUALS"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "29844": {
        "name": "newtype-bind",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "NEWTYPE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "29848": {
        "name": "type-let-expr_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          }
        ]
      },
      "29892": {
        "name": "check-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "CHECK"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "29894": {
        "name": "first-data-variant",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "29936": {
        "name": "data-expr_I4_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I4"
          }
        ]
      },
      "29941": {
        "name": "data-expr_I4",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "first-data-variant"
          }
        ]
      },
      "29946": {
        "name": "first-data-variant",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "29951": {
        "name": "when-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "WHEN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "when-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "29956": {
        "name": "opt-comma-binops_I0_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops_I0_I1"
          }
        ]
      },
      "29962": {
        "name": "inst-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "30000": {
        "name": "inst-expr_I3_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "inst-expr_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "inst-expr_I3"
          }
        ]
      },
      "30003": {
        "name": "extend-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "30041": {
        "name": "tuple-get",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "DOT"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Token",
            "name": "NUMBER"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "30079": {
        "name": "update-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "BANG"
          },
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "30240": {
        "name": "table-row",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "ROW"
          },
          {
            "type": "Nonterm",
            "name": "table-items"
          }
        ]
      },
      "30243": {
        "name": "table-items",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_opt"
          }
        ]
      },
      "30246": {
        "name": "table-items_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0"
          }
        ]
      },
      "30425": {
        "name": "table-header_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "30531": {
        "name": "field",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "30535": {
        "name": "fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "30539": {
        "name": "fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "field"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I2_opt"
          }
        ]
      },
      "30541": {
        "name": "fields_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "fields_I1"
          }
        ]
      },
      "30544": {
        "name": "fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "fields_I2"
          }
        ]
      },
      "30673": {
        "name": "if-pipe-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "30684": {
        "name": "if-pipe-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "ASK"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "if-pipe-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30767": {
        "name": "for-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-bind"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          }
        ]
      },
      "30850": {
        "name": "table-select_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "30891": {
        "name": "table-filter_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          }
        ]
      },
      "30898": {
        "name": "column-order",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "column-order_I1"
          }
        ]
      },
      "30900": {
        "name": "column-order_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ASCENDING"
          }
        ]
      },
      "30902": {
        "name": "column-order_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "DESCENDING"
          }
        ]
      },
      "30904": {
        "name": "table-order",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-ORDER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "column-order"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30942": {
        "name": "table-extract",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTRACT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "30980": {
        "name": "table-update_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          }
        ]
      },
      "31031": {
        "name": "table-extend_I2",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          }
        ]
      },
      "31086": {
        "name": "load-table-expr",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LOAD-TABLE"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-headers"
          },
          {
            "type": "Nonterm",
            "name": "load-table-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31124": {
        "name": "load-table-specs",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "31125": {
        "name": "load-table-specs_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-spec"
          }
        ]
      },
      "31129": {
        "name": "load-table-specs_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "load-table-specs_I0"
          }
        ]
      },
      "31345": {
        "name": "import-stmt",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          },
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "31390": {
        "name": "import-stmt",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "IMPORT"
          },
          {
            "type": "Nonterm",
            "name": "comma-names"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "import-source"
          }
        ]
      },
      "31435": {
        "name": "record-ann_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann-field"
          }
        ]
      },
      "31443": {
        "name": "comma-anns_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31447": {
        "name": "tuple-ann_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          }
        ]
      },
      "31456": {
        "name": "tuple-ann_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2"
          }
        ]
      },
      "31459": {
        "name": "tuple-ann_I3_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3"
          }
        ]
      },
      "31466": {
        "name": "app-ann",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "app-ann_I0"
          },
          {
            "type": "Token",
            "name": "LANGLE"
          },
          {
            "type": "Nonterm",
            "name": "comma-anns"
          },
          {
            "type": "Token",
            "name": "RANGLE"
          }
        ]
      },
      "31471": {
        "name": "check-test_A0_I2",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "check-test_A0_I2_I1"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "31507": {
        "name": "args_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "args_I1_I1"
          }
        ]
      },
      "31512": {
        "name": "tuple-binding",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          },
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5_opt"
          }
        ]
      },
      "31514": {
        "name": "tuple-binding_I5_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "tuple-binding_I5"
          }
        ]
      },
      "31554": {
        "name": "where-clause",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0_opt"
          }
        ]
      },
      "31556": {
        "name": "where-clause_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "where-clause_I0"
          }
        ]
      },
      "31558": {
        "name": "where-clause_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "31560": {
        "name": "comma-names_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "31564": {
        "name": "obj-field",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A1_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "31570": {
        "name": "multi-let-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LET"
          },
          {
            "type": "Nonterm",
            "name": "let-binding"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "multi-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31608": {
        "name": "letrec-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LETREC"
          },
          {
            "type": "Nonterm",
            "name": "let-expr"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "letrec-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31646": {
        "name": "type-let-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TYPE-LET"
          },
          {
            "type": "Nonterm",
            "name": "type-let-bind"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "type-let-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "31706": {
        "name": "variant-constructor",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "variant-members"
          }
        ]
      },
      "31712": {
        "name": "first-data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "31717": {
        "name": "data-with",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0_opt"
          }
        ]
      },
      "31722": {
        "name": "data-with_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-with_I0"
          }
        ]
      },
      "31768": {
        "name": "first-data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "31773": {
        "name": "opt-comma-binops_I0_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "31776": {
        "name": "inst-expr_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "31858": {
        "name": "construct-expr",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACK"
          },
          {
            "type": "Nonterm",
            "name": "construct-modifier"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "opt-comma-binops"
          },
          {
            "type": "Token",
            "name": "RBRACK"
          }
        ]
      },
      "31898": {
        "name": "table-items_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "32000": {
        "name": "table-items_I0_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-items_I0_I0"
          }
        ]
      },
      "32031": {
        "name": "table-items_I0_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-item"
          }
        ]
      },
      "32075": {
        "name": "field_A1_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "32120": {
        "name": "field_A1_I3",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "32168": {
        "name": "fields_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "field"
          }
        ]
      },
      "32209": {
        "name": "if-expr_I4_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4"
          }
        ]
      },
      "32213": {
        "name": "if-expr_I4",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "else-if"
          }
        ]
      },
      "32217": {
        "name": "if-expr_I5_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "if-expr_I5"
          }
        ]
      },
      "32219": {
        "name": "if-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "32225": {
        "name": "if-pipe-branch",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "32231": {
        "name": "if-pipe-expr_I3",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "OTHERWISECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "32233": {
        "name": "cases-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "32236": {
        "name": "cases-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "32281": {
        "name": "for-bind",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binding"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "32287": {
        "name": "for-expr_I3_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_I1"
          }
        ]
      },
      "32412": {
        "name": "table-select",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-SELECT"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "table-select_I2_star"
          },
          {
            "type": "Token",
            "name": "FROM"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32450": {
        "name": "table-filter",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-FILTER"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32491": {
        "name": "table-filter_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-filter_I2_I2"
          }
        ]
      },
      "32497": {
        "name": "table-update_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_I2"
          }
        ]
      },
      "32500": {
        "name": "table-update",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-UPDATE"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-update_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "obj-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32541": {
        "name": "table-extend_I2_I2_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_I2"
          }
        ]
      },
      "32544": {
        "name": "table-extend",
        "position": 6,
        "symbols": [
          {
            "type": "Token",
            "name": "TABLE-EXTEND"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Nonterm",
            "name": "table-extend_I2_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "32594": {
        "name": "table-extend-fields",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "32601": {
        "name": "table-extend-fields_I0_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0"
          }
        ]
      },
      "32603": {
        "name": "table-extend-fields_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "list-table-extend-field"
          }
        ]
      },
      "32631": {
        "name": "load-table-spec",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SOURCECOLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "32821": {
        "name": "pred-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "PERCENT"
          },
          {
            "type": "Nonterm",
            "name": "pred-ann_I2"
          },
          {
            "type": "Nonterm",
            "name": "id-expr"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "32826": {
        "name": "tuple-ann_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SEMI"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "32829": {
        "name": "tuple-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I2_star"
          },
          {
            "type": "Nonterm",
            "name": "tuple-ann_I3_opt"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "32834": {
        "name": "arrow-ann",
        "position": 5,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "arrow-ann_I0"
          },
          {
            "type": "Nonterm",
            "name": "arrow-ann_I1_opt"
          },
          {
            "type": "Token",
            "name": "THINARROW"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "32839": {
        "name": "args_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "32842": {
        "name": "tuple-binding_I5",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "AS"
          },
          {
            "type": "Nonterm",
            "name": "name-binding"
          }
        ]
      },
      "32844": {
        "name": "lambda-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "LBRACE"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "RBRACE"
          }
        ]
      },
      "32882": {
        "name": "where-clause_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "WHERE"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "32895": {
        "name": "variant-members_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1"
          }
        ]
      },
      "32897": {
        "name": "variant-members_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "32906": {
        "name": "variant-member_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0"
          }
        ]
      },
      "32910": {
        "name": "variant-member_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "32914": {
        "name": "data-with_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "WITH"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "32936": {
        "name": "data-expr_I5_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5"
          }
        ]
      },
      "32941": {
        "name": "data-expr_I5",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-variant"
          }
        ]
      },
      "32956": {
        "name": "data-sharing",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0_opt"
          }
        ]
      },
      "32959": {
        "name": "data-sharing_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "data-sharing_I0"
          }
        ]
      },
      "32965": {
        "name": "lambda-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "LAM"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "lambda-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33003": {
        "name": "method-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "method-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33041": {
        "name": "list-table-item",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "33075": {
        "name": "if-expr",
        "position": 7,
        "symbols": [
          {
            "type": "Token",
            "name": "IF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I2"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I4_star"
          },
          {
            "type": "Nonterm",
            "name": "if-expr_I5_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33113": {
        "name": "if-expr_I5",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSECOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33119": {
        "name": "if-pipe-branch",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "THENCOLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33279": {
        "name": "for-expr_I3_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "for-bind"
          }
        ]
      },
      "33282": {
        "name": "for-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "BLOCK"
          }
        ]
      },
      "33325": {
        "name": "for-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COLON"
          }
        ]
      },
      "33406": {
        "name": "table-filter_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "33409": {
        "name": "table-update_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "33412": {
        "name": "table-extend_I2_I2",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "33422": {
        "name": "table-extend-field_A0_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1"
          }
        ]
      },
      "33427": {
        "name": "table-extend-field_A1_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1"
          }
        ]
      },
      "33429": {
        "name": "list-table-extend-field",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "33430": {
        "name": "table-extend-fields_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          }
        ]
      },
      "33433": {
        "name": "table-extend-fields",
        "position": 3,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I0_star"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2_opt"
          }
        ]
      },
      "33435": {
        "name": "table-extend-fields_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "table-extend-fields_I2"
          }
        ]
      },
      "33459": {
        "name": "import-special",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Token",
            "name": "STRING"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "33504": {
        "name": "import-special_I3_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "import-special_I3_star"
          },
          {
            "type": "Nonterm",
            "name": "import-special_I3"
          }
        ]
      },
      "33513": {
        "name": "fun-expr",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "FUN"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "fun-expr_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33515": {
        "name": "variant-members",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "33521": {
        "name": "variant-members_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          }
        ]
      },
      "33528": {
        "name": "variant-member",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-member_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "33533": {
        "name": "data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "33538": {
        "name": "data-variant",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "33543": {
        "name": "data-sharing_I0",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "SHARING"
          },
          {
            "type": "Nonterm",
            "name": "fields"
          }
        ]
      },
      "33549": {
        "name": "else-if",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33596": {
        "name": "cases-expr_I6_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6"
          }
        ]
      },
      "33599": {
        "name": "cases-expr_I6",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch"
          }
        ]
      },
      "33602": {
        "name": "cases-expr_I7_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-expr_I7"
          }
        ]
      },
      "33642": {
        "name": "table-extend-field_A0_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "33643": {
        "name": "table-extend-field_A1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COLONCOLON"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          }
        ]
      },
      "33730": {
        "name": "load-table-spec",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "SANITIZE"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Token",
            "name": "USING"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          }
        ]
      },
      "33734": {
        "name": "import-special_I3",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Token",
            "name": "STRING"
          }
        ]
      },
      "33737": {
        "name": "obj-field",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "obj-field_A2_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33743": {
        "name": "variant-members_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "variant-members_I1_I1"
          }
        ]
      },
      "33746": {
        "name": "data-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "DATA"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "ty-params"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I4_opt"
          },
          {
            "type": "Nonterm",
            "name": "data-expr_I5_star"
          },
          {
            "type": "Nonterm",
            "name": "data-sharing"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33748": {
        "name": "data-variant",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "33753": {
        "name": "data-variant",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Nonterm",
            "name": "variant-constructor"
          },
          {
            "type": "Nonterm",
            "name": "data-with"
          }
        ]
      },
      "33761": {
        "name": "else-if",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "ELSEIF"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33774": {
        "name": "cases-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "CASES"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I1"
          },
          {
            "type": "Nonterm",
            "name": "ann"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I5"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I6_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-expr_I7_opt"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33812": {
        "name": "for-expr",
        "position": 9,
        "symbols": [
          {
            "type": "Token",
            "name": "FOR"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I3_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          },
          {
            "type": "Nonterm",
            "name": "return-ann"
          },
          {
            "type": "Nonterm",
            "name": "for-expr_I6"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33850": {
        "name": "table-extend-field",
        "position": 4,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A0_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "binop-expr"
          }
        ]
      },
      "33935": {
        "name": "variant-members_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "variant-member"
          }
        ]
      },
      "33938": {
        "name": "field",
        "position": 8,
        "symbols": [
          {
            "type": "Token",
            "name": "METHOD"
          },
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "fun-header"
          },
          {
            "type": "Nonterm",
            "name": "field_A1_I3"
          },
          {
            "type": "Nonterm",
            "name": "doc-string"
          },
          {
            "type": "Nonterm",
            "name": "block"
          },
          {
            "type": "Nonterm",
            "name": "where-clause"
          },
          {
            "type": "Token",
            "name": "END"
          }
        ]
      },
      "33957": {
        "name": "cases-branch_I2",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args"
          }
        ]
      },
      "33962": {
        "name": "cases-branch_I2_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-branch_I2"
          }
        ]
      },
      "33964": {
        "name": "cases-expr_I7",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "33978": {
        "name": "cases-binding_I0",
        "position": 1,
        "symbols": [
          {
            "type": "Token",
            "name": "REF"
          }
        ]
      },
      "33982": {
        "name": "cases-args_I1",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "33991": {
        "name": "cases-binding_I0_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0"
          }
        ]
      },
      "33997": {
        "name": "cases-args_I1_opt",
        "position": 1,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1"
          }
        ]
      },
      "33999": {
        "name": "cases-branch",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34002": {
        "name": "cases-expr_I7",
        "position": 4,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "ELSE"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34004": {
        "name": "table-extend-field",
        "position": 6,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "key"
          },
          {
            "type": "Nonterm",
            "name": "table-extend-field_A1_I1_opt"
          },
          {
            "type": "Token",
            "name": "COLON"
          },
          {
            "type": "Nonterm",
            "name": "expr"
          },
          {
            "type": "Token",
            "name": "OF"
          },
          {
            "type": "Token",
            "name": "NAME"
          }
        ]
      },
      "34007": {
        "name": "cases-args_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          }
        ]
      },
      "34014": {
        "name": "cases-binding",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-binding_I0_opt"
          },
          {
            "type": "Nonterm",
            "name": "binding"
          }
        ]
      },
      "34017": {
        "name": "cases-args",
        "position": 3,
        "symbols": [
          {
            "type": "Token",
            "name": "PARENNOSPACE"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_opt"
          },
          {
            "type": "Token",
            "name": "RPAREN"
          }
        ]
      },
      "34019": {
        "name": "cases-branch",
        "position": 5,
        "symbols": [
          {
            "type": "Token",
            "name": "BAR"
          },
          {
            "type": "Token",
            "name": "NAME"
          },
          {
            "type": "Nonterm",
            "name": "cases-branch_I2_opt"
          },
          {
            "type": "Token",
            "name": "THICKARROW"
          },
          {
            "type": "Nonterm",
            "name": "block"
          }
        ]
      },
      "34025": {
        "name": "cases-args_I1_I1_star",
        "position": 2,
        "symbols": [
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1_star"
          },
          {
            "type": "Nonterm",
            "name": "cases-args_I1_I1"
          }
        ]
      },
      "34028": {
        "name": "cases-args_I1_I1",
        "position": 2,
        "symbols": [
          {
            "type": "Token",
            "name": "COMMA"
          },
          {
            "type": "Nonterm",
            "name": "cases-binding"
          }
        ]
      }
    },
    "actionsByOldId": {
      "0": "Rule.defaultAction",
      "1": "Rule.defaultAction",
      "2": "Rule.Inline",
      "3": "Rule.Inline",
      "4": "Rule.Inline",
      "5": "Rule.Inline",
      "6": "Rule.Inline",
      "7": "Rule.Inline",
      "8": "Rule.Inline",
      "9": "Rule.ListSnoc(\"prelude_I2_star\", \"prelude_I2\", true)",
      "10": "Rule.Inline",
      "11": "Rule.defaultAction",
      "12": "Rule.defaultAction",
      "13": "Rule.defaultAction",
      "14": "Rule.defaultAction",
      "15": "Rule.defaultAction",
      "16": "Rule.defaultAction",
      "17": "Rule.Inline",
      "18": "Rule.ListSnoc(\"import-special_I3_star\", \"import-special_I3\", true)",
      "19": "Rule.Inline",
      "20": "Rule.defaultAction",
      "21": "Rule.defaultAction",
      "22": "Rule.defaultAction",
      "23": "Rule.defaultAction",
      "24": "Rule.defaultAction",
      "25": "Rule.defaultAction",
      "26": "Rule.Inline",
      "27": "Rule.ListSnoc(\"comma-names_I1_star\", \"comma-names_I1\", true)",
      "28": "Rule.Inline",
      "29": "Rule.defaultAction",
      "30": "Rule.Inline",
      "31": "Rule.ListSnoc(\"block_I0_star\", \"block_I0\", true)",
      "32": "Rule.Inline",
      "33": "Rule.defaultAction",
      "34": "Rule.defaultAction",
      "35": "Rule.defaultAction",
      "36": "Rule.defaultAction",
      "37": "Rule.defaultAction",
      "38": "Rule.defaultAction",
      "39": "Rule.defaultAction",
      "40": "Rule.defaultAction",
      "41": "Rule.defaultAction",
      "42": "Rule.defaultAction",
      "43": "Rule.defaultAction",
      "44": "Rule.defaultAction",
      "45": "Rule.defaultAction",
      "46": "Rule.defaultAction",
      "47": "Rule.defaultAction",
      "48": "Rule.defaultAction",
      "49": "Rule.defaultAction",
      "50": "Rule.defaultAction",
      "51": "Rule.Inline",
      "52": "Rule.ListSnoc(\"tuple-binding_I1_star\", \"tuple-binding_I1\", true)",
      "53": "Rule.Inline",
      "54": "Rule.Inline",
      "55": "Rule.Inline",
      "56": "Rule.Inline",
      "57": "Rule.Inline",
      "58": "Rule.Inline",
      "59": "Rule.Inline",
      "60": "Rule.defaultAction",
      "61": "Rule.Inline",
      "62": "Rule.Inline",
      "63": "Rule.Inline",
      "64": "Rule.Inline",
      "65": "Rule.Inline",
      "66": "Rule.Inline",
      "67": "Rule.defaultAction",
      "68": "Rule.defaultAction",
      "69": "Rule.Inline",
      "70": "Rule.ListSnoc(\"multi-let-expr_I2_star\", \"multi-let-expr_I2\", true)",
      "71": "Rule.Inline",
      "72": "Rule.Inline",
      "73": "Rule.Inline",
      "74": "Rule.defaultAction",
      "75": "Rule.defaultAction",
      "76": "Rule.defaultAction",
      "77": "Rule.Inline",
      "78": "Rule.ListSnoc(\"letrec-expr_I2_star\", \"letrec-expr_I2\", true)",
      "79": "Rule.Inline",
      "80": "Rule.Inline",
      "81": "Rule.Inline",
      "82": "Rule.defaultAction",
      "83": "Rule.defaultAction",
      "84": "Rule.defaultAction",
      "85": "Rule.defaultAction",
      "86": "Rule.defaultAction",
      "87": "Rule.Inline",
      "88": "Rule.ListSnoc(\"type-let-expr_I2_star\", \"type-let-expr_I2\", true)",
      "89": "Rule.Inline",
      "90": "Rule.Inline",
      "91": "Rule.Inline",
      "92": "Rule.defaultAction",
      "93": "Rule.Inline",
      "94": "Rule.Inline",
      "95": "Rule.defaultAction",
      "96": "Rule.Inline",
      "97": "Rule.Inline",
      "98": "Rule.defaultAction",
      "99": "Rule.defaultAction",
      "100": "Rule.Inline",
      "101": "Rule.Inline",
      "102": "Rule.Inline",
      "103": "Rule.Inline",
      "104": "Rule.Inline",
      "105": "Rule.Inline",
      "106": "Rule.Inline",
      "107": "Rule.defaultAction",
      "108": "Rule.Inline",
      "109": "Rule.Inline",
      "110": "Rule.Inline",
      "111": "Rule.Inline",
      "112": "Rule.Inline",
      "113": "Rule.Inline",
      "114": "Rule.ListSnoc(\"args_I1_I1_star\", \"args_I1_I1\", true)",
      "115": "Rule.Inline",
      "116": "Rule.defaultAction",
      "117": "Rule.Inline",
      "118": "Rule.Inline",
      "119": "Rule.Inline",
      "120": "Rule.defaultAction",
      "121": "Rule.Inline",
      "122": "Rule.Inline",
      "123": "Rule.Inline",
      "124": "Rule.defaultAction",
      "125": "Rule.Inline",
      "126": "Rule.Inline",
      "127": "Rule.Inline",
      "128": "Rule.defaultAction",
      "129": "Rule.defaultAction",
      "130": "Rule.Inline",
      "131": "Rule.Inline",
      "132": "Rule.defaultAction",
      "133": "Rule.Inline",
      "134": "Rule.Inline",
      "135": "Rule.Inline",
      "136": "Rule.Inline",
      "137": "Rule.Inline",
      "138": "Rule.defaultAction",
      "139": "Rule.defaultAction",
      "140": "Rule.defaultAction",
      "141": "Rule.Inline",
      "142": "Rule.Inline",
      "143": "Rule.Inline",
      "144": "Rule.Inline",
      "145": "Rule.ListSnoc(\"data-expr_I5_star\", \"data-expr_I5\", true)",
      "146": "Rule.Inline",
      "147": "Rule.defaultAction",
      "148": "Rule.defaultAction",
      "149": "Rule.defaultAction",
      "150": "Rule.defaultAction",
      "151": "Rule.defaultAction",
      "152": "Rule.defaultAction",
      "153": "Rule.Inline",
      "154": "Rule.Inline",
      "155": "Rule.Inline",
      "156": "Rule.Inline",
      "157": "Rule.ListSnoc(\"variant-members_I1_I1_star\", \"variant-members_I1_I1\", true)",
      "158": "Rule.Inline",
      "159": "Rule.defaultAction",
      "160": "Rule.Inline",
      "161": "Rule.Inline",
      "162": "Rule.Inline",
      "163": "Rule.defaultAction",
      "164": "Rule.Inline",
      "165": "Rule.Inline",
      "166": "Rule.Inline",
      "167": "Rule.defaultAction",
      "168": "Rule.Inline",
      "169": "Rule.Inline",
      "170": "Rule.Inline",
      "171": "Rule.defaultAction",
      "172": "Rule.defaultAction",
      "173": "Rule.defaultAction",
      "174": "Rule.defaultAction",
      "175": "Rule.Inline",
      "176": "Rule.Inline",
      "177": "Rule.defaultAction",
      "178": "Rule.Inline",
      "179": "Rule.ListSnoc(\"binop-expr_I1_star\", \"binop-expr_I1\", true)",
      "180": "Rule.Inline",
      "181": "Rule.defaultAction",
      "182": "Rule.defaultAction",
      "183": "Rule.defaultAction",
      "184": "Rule.defaultAction",
      "185": "Rule.defaultAction",
      "186": "Rule.defaultAction",
      "187": "Rule.defaultAction",
      "188": "Rule.defaultAction",
      "189": "Rule.defaultAction",
      "190": "Rule.defaultAction",
      "191": "Rule.defaultAction",
      "192": "Rule.defaultAction",
      "193": "Rule.defaultAction",
      "194": "Rule.defaultAction",
      "195": "Rule.defaultAction",
      "196": "Rule.defaultAction",
      "197": "Rule.defaultAction",
      "198": "Rule.defaultAction",
      "199": "Rule.defaultAction",
      "200": "Rule.defaultAction",
      "201": "Rule.defaultAction",
      "202": "Rule.defaultAction",
      "203": "Rule.defaultAction",
      "204": "Rule.defaultAction",
      "205": "Rule.defaultAction",
      "206": "Rule.defaultAction",
      "207": "Rule.defaultAction",
      "208": "Rule.defaultAction",
      "209": "Rule.defaultAction",
      "210": "Rule.defaultAction",
      "211": "Rule.defaultAction",
      "212": "Rule.defaultAction",
      "213": "Rule.defaultAction",
      "214": "Rule.defaultAction",
      "215": "Rule.defaultAction",
      "216": "Rule.defaultAction",
      "217": "Rule.defaultAction",
      "218": "Rule.defaultAction",
      "219": "Rule.defaultAction",
      "220": "Rule.defaultAction",
      "221": "Rule.defaultAction",
      "222": "Rule.defaultAction",
      "223": "Rule.defaultAction",
      "224": "Rule.defaultAction",
      "225": "Rule.defaultAction",
      "226": "Rule.defaultAction",
      "227": "Rule.defaultAction",
      "228": "Rule.defaultAction",
      "229": "Rule.defaultAction",
      "230": "Rule.defaultAction",
      "231": "Rule.defaultAction",
      "232": "Rule.defaultAction",
      "233": "Rule.defaultAction",
      "234": "Rule.defaultAction",
      "235": "Rule.defaultAction",
      "236": "Rule.defaultAction",
      "237": "Rule.defaultAction",
      "238": "Rule.defaultAction",
      "239": "Rule.defaultAction",
      "240": "Rule.defaultAction",
      "241": "Rule.defaultAction",
      "242": "Rule.defaultAction",
      "243": "Rule.defaultAction",
      "244": "Rule.defaultAction",
      "245": "Rule.defaultAction",
      "246": "Rule.defaultAction",
      "247": "Rule.defaultAction",
      "248": "Rule.defaultAction",
      "249": "Rule.defaultAction",
      "250": "Rule.defaultAction",
      "251": "Rule.defaultAction",
      "252": "Rule.defaultAction",
      "253": "Rule.Inline",
      "254": "Rule.Inline",
      "255": "Rule.defaultAction",
      "256": "Rule.defaultAction",
      "257": "Rule.defaultAction",
      "258": "Rule.defaultAction",
      "259": "Rule.defaultAction",
      "260": "Rule.defaultAction",
      "261": "Rule.defaultAction",
      "262": "Rule.defaultAction",
      "263": "Rule.defaultAction",
      "264": "Rule.defaultAction",
      "265": "Rule.defaultAction",
      "266": "Rule.Inline",
      "267": "Rule.Inline",
      "268": "Rule.defaultAction",
      "269": "Rule.defaultAction",
      "270": "Rule.Inline",
      "271": "Rule.Inline",
      "272": "Rule.defaultAction",
      "273": "Rule.defaultAction",
      "274": "Rule.defaultAction",
      "275": "Rule.Inline",
      "276": "Rule.Inline",
      "277": "Rule.Inline",
      "278": "Rule.Inline",
      "279": "Rule.ListSnoc(\"opt-comma-binops_I0_I1_star\", \"opt-comma-binops_I0_I1\", true)",
      "280": "Rule.Inline",
      "281": "Rule.defaultAction",
      "282": "Rule.Inline",
      "283": "Rule.ListSnoc(\"inst-expr_I3_star\", \"inst-expr_I3\", true)",
      "284": "Rule.Inline",
      "285": "Rule.defaultAction",
      "286": "Rule.defaultAction",
      "287": "Rule.Inline",
      "288": "Rule.ListSnoc(\"tuple-fields_I1_star\", \"tuple-fields_I1\", true)",
      "289": "Rule.Inline",
      "290": "Rule.Inline",
      "291": "Rule.Inline",
      "292": "Rule.Inline",
      "293": "Rule.defaultAction",
      "294": "Rule.defaultAction",
      "295": "Rule.defaultAction",
      "296": "Rule.defaultAction",
      "297": "Rule.Inline",
      "298": "Rule.ListSnoc(\"obj-fields_I1_star\", \"obj-fields_I1\", true)",
      "299": "Rule.Inline",
      "300": "Rule.Inline",
      "301": "Rule.Inline",
      "302": "Rule.Inline",
      "303": "Rule.defaultAction",
      "304": "Rule.defaultAction",
      "305": "Rule.Inline",
      "306": "Rule.Inline",
      "307": "Rule.Inline",
      "308": "Rule.defaultAction",
      "309": "Rule.Inline",
      "310": "Rule.Inline",
      "311": "Rule.defaultAction",
      "312": "Rule.Inline",
      "313": "Rule.ListSnoc(\"fields_I1_star\", \"fields_I1\", true)",
      "314": "Rule.Inline",
      "315": "Rule.Inline",
      "316": "Rule.Inline",
      "317": "Rule.Inline",
      "318": "Rule.defaultAction",
      "319": "Rule.defaultAction",
      "320": "Rule.Inline",
      "321": "Rule.Inline",
      "322": "Rule.defaultAction",
      "323": "Rule.defaultAction",
      "324": "Rule.defaultAction",
      "325": "Rule.defaultAction",
      "326": "Rule.defaultAction",
      "327": "Rule.defaultAction",
      "328": "Rule.Inline",
      "329": "Rule.Inline",
      "330": "Rule.Inline",
      "331": "Rule.Inline",
      "332": "Rule.ListSnoc(\"table-headers_I0_I0_star\", \"table-headers_I0_I0\", true)",
      "333": "Rule.Inline",
      "334": "Rule.defaultAction",
      "335": "Rule.defaultAction",
      "336": "Rule.Inline",
      "337": "Rule.Inline",
      "338": "Rule.Inline",
      "339": "Rule.defaultAction",
      "340": "Rule.Inline",
      "341": "Rule.Inline",
      "342": "Rule.Inline",
      "343": "Rule.Inline",
      "344": "Rule.ListSnoc(\"table-rows_I0_I0_star\", \"table-rows_I0_I0\", true)",
      "345": "Rule.Inline",
      "346": "Rule.defaultAction",
      "347": "Rule.defaultAction",
      "348": "Rule.Inline",
      "349": "Rule.Inline",
      "350": "Rule.Inline",
      "351": "Rule.Inline",
      "352": "Rule.ListSnoc(\"table-items_I0_I0_star\", \"table-items_I0_I0\", true)",
      "353": "Rule.Inline",
      "354": "Rule.defaultAction",
      "355": "Rule.defaultAction",
      "356": "Rule.defaultAction",
      "357": "Rule.defaultAction",
      "358": "Rule.defaultAction",
      "359": "Rule.defaultAction",
      "360": "Rule.defaultAction",
      "361": "Rule.defaultAction",
      "362": "Rule.Inline",
      "363": "Rule.Inline",
      "364": "Rule.Inline",
      "365": "Rule.ListSnoc(\"if-expr_I4_star\", \"if-expr_I4\", true)",
      "366": "Rule.Inline",
      "367": "Rule.Inline",
      "368": "Rule.Inline",
      "369": "Rule.Inline",
      "370": "Rule.defaultAction",
      "371": "Rule.defaultAction",
      "372": "Rule.Inline",
      "373": "Rule.Inline",
      "374": "Rule.Inline",
      "375": "Rule.ListSnoc(\"if-pipe-expr_I2_star\", \"if-pipe-expr_I2\", true)",
      "376": "Rule.Inline",
      "377": "Rule.Inline",
      "378": "Rule.Inline",
      "379": "Rule.Inline",
      "380": "Rule.defaultAction",
      "381": "Rule.defaultAction",
      "382": "Rule.Inline",
      "383": "Rule.Inline",
      "384": "Rule.Inline",
      "385": "Rule.defaultAction",
      "386": "Rule.Inline",
      "387": "Rule.Inline",
      "388": "Rule.Inline",
      "389": "Rule.Inline",
      "390": "Rule.ListSnoc(\"cases-args_I1_I1_star\", \"cases-args_I1_I1\", true)",
      "391": "Rule.Inline",
      "392": "Rule.defaultAction",
      "393": "Rule.Inline",
      "394": "Rule.Inline",
      "395": "Rule.Inline",
      "396": "Rule.Inline",
      "397": "Rule.Inline",
      "398": "Rule.ListSnoc(\"cases-expr_I6_star\", \"cases-expr_I6\", true)",
      "399": "Rule.Inline",
      "400": "Rule.Inline",
      "401": "Rule.Inline",
      "402": "Rule.Inline",
      "403": "Rule.defaultAction",
      "404": "Rule.Inline",
      "405": "Rule.Inline",
      "406": "Rule.Inline",
      "407": "Rule.defaultAction",
      "408": "Rule.defaultAction",
      "409": "Rule.Inline",
      "410": "Rule.Inline",
      "411": "Rule.Inline",
      "412": "Rule.Inline",
      "413": "Rule.ListSnoc(\"for-expr_I3_I1_star\", \"for-expr_I3_I1\", true)",
      "414": "Rule.Inline",
      "415": "Rule.Inline",
      "416": "Rule.Inline",
      "417": "Rule.defaultAction",
      "418": "Rule.Inline",
      "419": "Rule.Inline",
      "420": "Rule.defaultAction",
      "421": "Rule.Inline",
      "422": "Rule.ListSnoc(\"table-select_I2_star\", \"table-select_I2\", true)",
      "423": "Rule.Inline",
      "424": "Rule.defaultAction",
      "425": "Rule.Inline",
      "426": "Rule.Inline",
      "427": "Rule.Inline",
      "428": "Rule.Inline",
      "429": "Rule.ListSnoc(\"table-filter_I2_I2_star\", \"table-filter_I2_I2\", true)",
      "430": "Rule.Inline",
      "431": "Rule.defaultAction",
      "432": "Rule.defaultAction",
      "433": "Rule.defaultAction",
      "434": "Rule.Inline",
      "435": "Rule.Inline",
      "436": "Rule.Inline",
      "437": "Rule.Inline",
      "438": "Rule.ListSnoc(\"table-update_I2_I2_star\", \"table-update_I2_I2\", true)",
      "439": "Rule.Inline",
      "440": "Rule.defaultAction",
      "441": "Rule.Inline",
      "442": "Rule.Inline",
      "443": "Rule.Inline",
      "444": "Rule.Inline",
      "445": "Rule.ListSnoc(\"table-extend_I2_I2_star\", \"table-extend_I2_I2\", true)",
      "446": "Rule.Inline",
      "447": "Rule.defaultAction",
      "448": "Rule.Inline",
      "449": "Rule.ListSnoc(\"table-extend-fields_I0_star\", \"table-extend-fields_I0\", true)",
      "450": "Rule.Inline",
      "451": "Rule.Inline",
      "452": "Rule.Inline",
      "453": "Rule.Inline",
      "454": "Rule.defaultAction",
      "455": "Rule.defaultAction",
      "456": "Rule.Inline",
      "457": "Rule.Inline",
      "458": "Rule.Inline",
      "459": "Rule.defaultAction",
      "460": "Rule.Inline",
      "461": "Rule.Inline",
      "462": "Rule.Inline",
      "463": "Rule.defaultAction",
      "464": "Rule.Inline",
      "465": "Rule.Inline",
      "466": "Rule.Inline",
      "467": "Rule.defaultAction",
      "468": "Rule.Inline",
      "469": "Rule.ListSnoc(\"load-table-specs_I0_star\", \"load-table-specs_I0\", true)",
      "470": "Rule.Inline",
      "471": "Rule.defaultAction",
      "472": "Rule.defaultAction",
      "473": "Rule.defaultAction",
      "474": "Rule.defaultAction",
      "475": "Rule.defaultAction",
      "476": "Rule.defaultAction",
      "477": "Rule.defaultAction",
      "478": "Rule.defaultAction",
      "479": "Rule.defaultAction",
      "480": "Rule.defaultAction",
      "481": "Rule.defaultAction",
      "482": "Rule.defaultAction",
      "483": "Rule.Inline",
      "484": "Rule.Inline",
      "485": "Rule.Inline",
      "486": "Rule.Inline",
      "487": "Rule.ListSnoc(\"record-ann_I1_I1_star\", \"record-ann_I1_I1\", true)",
      "488": "Rule.Inline",
      "489": "Rule.defaultAction",
      "490": "Rule.defaultAction",
      "491": "Rule.Inline",
      "492": "Rule.ListSnoc(\"tuple-ann_I2_star\", \"tuple-ann_I2\", true)",
      "493": "Rule.Inline",
      "494": "Rule.Inline",
      "495": "Rule.Inline",
      "496": "Rule.Inline",
      "497": "Rule.defaultAction",
      "498": "Rule.Inline",
      "499": "Rule.Inline",
      "500": "Rule.Inline",
      "501": "Rule.defaultAction",
      "502": "Rule.Inline",
      "503": "Rule.Inline",
      "504": "Rule.Inline",
      "505": "Rule.Inline",
      "506": "Rule.Inline",
      "507": "Rule.defaultAction",
      "508": "Rule.Inline",
      "509": "Rule.Inline",
      "510": "Rule.defaultAction",
      "511": "Rule.Inline",
      "512": "Rule.ListSnoc(\"comma-anns_I1_star\", \"comma-anns_I1\", true)",
      "513": "Rule.Inline",
      "514": "Rule.defaultAction",
      "515": "Rule.Inline",
      "516": "Rule.Inline",
      "517": "Rule.defaultAction",
      "518": "Rule.defaultAction"
    },
    "flagsByOldId": {},
    "rules": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      138,
      139,
      133,
      134,
      135,
      136,
      137,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160,
      161,
      162,
      163,
      164,
      165,
      166,
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184,
      185,
      186,
      187,
      188,
      189,
      190,
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198,
      199,
      200,
      201,
      202,
      203,
      204,
      205,
      206,
      207,
      208,
      209,
      210,
      211,
      212,
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224,
      225,
      226,
      227,
      228,
      229,
      230,
      231,
      232,
      233,
      234,
      235,
      236,
      237,
      238,
      239,
      240,
      241,
      242,
      243,
      244,
      245,
      246,
      247,
      248,
      249,
      250,
      251,
      252,
      253,
      254,
      255,
      256,
      257,
      258,
      259,
      260,
      261,
      262,
      263,
      264,
      265,
      268,
      266,
      267,
      266,
      267,
      269,
      270,
      271,
      272,
      273,
      274,
      275,
      276,
      277,
      278,
      279,
      280,
      281,
      282,
      283,
      284,
      285,
      286,
      287,
      288,
      289,
      290,
      291,
      292,
      293,
      294,
      295,
      296,
      297,
      298,
      299,
      300,
      301,
      302,
      303,
      304,
      308,
      305,
      306,
      307,
      309,
      310,
      311,
      312,
      313,
      314,
      315,
      316,
      317,
      318,
      319,
      320,
      321,
      322,
      323,
      324,
      325,
      326,
      327,
      328,
      329,
      330,
      331,
      332,
      333,
      334,
      335,
      336,
      337,
      338,
      339,
      340,
      341,
      342,
      343,
      344,
      345,
      346,
      347,
      348,
      349,
      350,
      351,
      352,
      353,
      354,
      355,
      356,
      357,
      358,
      359,
      360,
      361,
      362,
      363,
      364,
      365,
      366,
      367,
      368,
      369,
      370,
      371,
      372,
      373,
      374,
      375,
      376,
      377,
      378,
      379,
      380,
      381,
      382,
      383,
      384,
      385,
      386,
      387,
      388,
      389,
      390,
      391,
      392,
      393,
      394,
      395,
      396,
      397,
      398,
      399,
      400,
      401,
      402,
      403,
      404,
      405,
      406,
      407,
      408,
      409,
      410,
      411,
      412,
      413,
      414,
      415,
      416,
      417,
      418,
      419,
      420,
      421,
      422,
      423,
      424,
      425,
      426,
      427,
      428,
      429,
      430,
      431,
      432,
      433,
      434,
      435,
      436,
      437,
      438,
      439,
      440,
      441,
      442,
      443,
      444,
      445,
      446,
      447,
      448,
      449,
      450,
      451,
      452,
      453,
      454,
      455,
      459,
      456,
      457,
      458,
      460,
      461,
      462,
      463,
      464,
      465,
      466,
      467,
      468,
      469,
      470,
      471,
      472,
      473,
      474,
      475,
      476,
      477,
      478,
      479,
      480,
      481,
      482,
      483,
      484,
      485,
      486,
      487,
      488,
      489,
      490,
      491,
      492,
      493,
      494,
      495,
      496,
      497,
      498,
      499,
      500,
      501,
      502,
      503,
      504,
      505,
      506,
      507,
      508,
      509,
      510,
      511,
      512,
      513,
      514,
      515,
      516,
      517,
      518
    ],
    "rnTable": [
      {
        "program": {
          "push": 1
        },
        "prelude": {
          "push": 2
        },
        "prelude_I0_opt": {
          "push": 3
        },
        "prelude_I0": {
          "push": 4
        },
        "provide-stmt": {
          "push": 5
        },
        "'PROVIDE": {
          "push": 6
        },
        "$": {
          "reductions": [
            [
              0,
              1
            ],
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              2,
              3
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1,
              2
            ],
            [
              2,
              3
            ]
          ]
        }
      },
      {
        "$": {
          "accept": true
        }
      },
      {
        "block": {
          "push": 7
        },
        "block_I0_star": {
          "push": 8
        },
        "$": {
          "reductions": [
            [
              790,
              8
            ],
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "prelude_I1_opt": {
          "push": 9
        },
        "prelude_I1": {
          "push": 10
        },
        "provide-types-stmt": {
          "push": 11
        },
        "'PROVIDE-TYPES": {
          "push": 12
        },
        "$": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              5,
              4
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              5,
              4
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              877,
              94
            ],
            [
              5,
              4
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1140,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              1186,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 13,
          "reductions": [
            [
              61,
              13
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "stmt": {
          "push": 15
        },
        "'STAR": {
          "push": 16
        },
        "type-expr": {
          "push": 17
        },
        "newtype-expr": {
          "push": 18
        },
        "let-expr": {
          "push": 19
        },
        "fun-expr": {
          "push": 20
        },
        "data-expr": {
          "push": 21
        },
        "when-expr": {
          "push": 22
        },
        "var-expr": {
          "push": 23
        },
        "rec-expr": {
          "push": 24
        },
        "assign-expr": {
          "push": 25
        },
        "check-test": {
          "push": 26
        },
        "check-expr": {
          "push": 27
        },
        "contract-stmt": {
          "push": 28
        },
        "'TYPE": {
          "push": 29
        },
        "'NEWTYPE": {
          "push": 30
        },
        "toplevel-binding": {
          "push": 31
        },
        "binop-expr": {
          "push": 32
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 36
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "multi-let-expr": {
          "push": 40
        },
        "'LET": {
          "push": 41
        },
        "'BLOCK": {
          "push": 42
        },
        "letrec-expr": {
          "push": 43
        },
        "'LETREC": {
          "push": 44
        },
        "type-let-expr": {
          "push": 45
        },
        "'TYPE-LET": {
          "push": 46
        },
        "'FUN": {
          "push": 47
        },
        "'PARENAFTERBRACE": {
          "push": 48
        },
        "'CHECK": {
          "push": 49
        },
        "check-expr_I0": {
          "push": 50
        },
        "'CHECKCOLON": {
          "push": 51
        },
        "'EXAMPLESCOLON": {
          "push": 52
        },
        "'PARENSPACE": {
          "push": 53
        },
        "'DATA": {
          "push": 54
        },
        "'VAR": {
          "push": 55
        },
        "'REC": {
          "push": 56
        },
        "'WHEN": {
          "push": 57
        },
        "expr": {
          "push": 58
        },
        "paren-expr": {
          "push": 59
        },
        "id-expr": {
          "push": 60
        },
        "prim-expr": {
          "push": 61
        },
        "lambda-expr": {
          "push": 62
        },
        "method-expr": {
          "push": 63
        },
        "app-expr": {
          "push": 64
        },
        "obj-expr": {
          "push": 65
        },
        "tuple-expr": {
          "push": 66
        },
        "tuple-get": {
          "push": 67
        },
        "dot-expr": {
          "push": 68
        },
        "template-expr": {
          "push": 69
        },
        "bracket-expr": {
          "push": 70
        },
        "get-bang-expr": {
          "push": 71
        },
        "update-expr": {
          "push": 72
        },
        "extend-expr": {
          "push": 73
        },
        "if-expr": {
          "push": 74
        },
        "if-pipe-expr": {
          "push": 75
        },
        "cases-expr": {
          "push": 76
        },
        "for-expr": {
          "push": 77
        },
        "user-block-expr": {
          "push": 78
        },
        "inst-expr": {
          "push": 79
        },
        "construct-expr": {
          "push": 80
        },
        "table-select": {
          "push": 81
        },
        "table-extend": {
          "push": 82
        },
        "table-filter": {
          "push": 83
        },
        "table-order": {
          "push": 84
        },
        "table-extract": {
          "push": 85
        },
        "table-update": {
          "push": 86
        },
        "table-expr": {
          "push": 87
        },
        "load-table-expr": {
          "push": 88
        },
        "reactor-expr": {
          "push": 89
        },
        "'DOTDOTDOT": {
          "push": 90
        },
        "paren-expr_I0": {
          "push": 91
        },
        "num-expr": {
          "push": 92
        },
        "frac-expr": {
          "push": 93
        },
        "bool-expr": {
          "push": 94
        },
        "string-expr": {
          "push": 95
        },
        "'NUMBER": {
          "push": 96
        },
        "'RATIONAL": {
          "push": 97
        },
        "'TRUE": {
          "push": 98
        },
        "'FALSE": {
          "push": 99
        },
        "'LAM": {
          "push": 100
        },
        "'METHOD": {
          "push": 101
        },
        "'LBRACK": {
          "push": 102
        },
        "'TABLE": {
          "push": 103
        },
        "'REACTOR": {
          "push": 104
        },
        "'IF": {
          "push": 105
        },
        "'ASK": {
          "push": 106
        },
        "'CASES": {
          "push": 107
        },
        "'FOR": {
          "push": 108
        },
        "'TABLE-SELECT": {
          "push": 109
        },
        "'TABLE-FILTER": {
          "push": 110
        },
        "'TABLE-ORDER": {
          "push": 111
        },
        "'TABLE-EXTRACT": {
          "push": 112
        },
        "'TABLE-UPDATE": {
          "push": 113
        },
        "'TABLE-EXTEND": {
          "push": 114
        },
        "'LOAD-TABLE": {
          "push": 115
        }
      },
      {
        "$": {
          "reductions": [
            [
              4406,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 13,
          "reductions": [
            [
              61,
              13
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "stmt": {
          "push": 116
        },
        "block_I0": {
          "push": 117
        },
        "type-expr": {
          "push": 17
        },
        "newtype-expr": {
          "push": 18
        },
        "let-expr": {
          "push": 19
        },
        "fun-expr": {
          "push": 20
        },
        "data-expr": {
          "push": 21
        },
        "when-expr": {
          "push": 22
        },
        "var-expr": {
          "push": 23
        },
        "rec-expr": {
          "push": 24
        },
        "assign-expr": {
          "push": 25
        },
        "check-test": {
          "push": 26
        },
        "check-expr": {
          "push": 27
        },
        "contract-stmt": {
          "push": 28
        },
        "'TYPE": {
          "push": 29
        },
        "'NEWTYPE": {
          "push": 30
        },
        "toplevel-binding": {
          "push": 31
        },
        "binop-expr": {
          "push": 32
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 36
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "multi-let-expr": {
          "push": 40
        },
        "'LET": {
          "push": 41
        },
        "'BLOCK": {
          "push": 42
        },
        "letrec-expr": {
          "push": 43
        },
        "'LETREC": {
          "push": 44
        },
        "type-let-expr": {
          "push": 45
        },
        "'TYPE-LET": {
          "push": 46
        },
        "'FUN": {
          "push": 47
        },
        "'PARENAFTERBRACE": {
          "push": 48
        },
        "'CHECK": {
          "push": 49
        },
        "check-expr_I0": {
          "push": 50
        },
        "'CHECKCOLON": {
          "push": 51
        },
        "'EXAMPLESCOLON": {
          "push": 52
        },
        "'PARENSPACE": {
          "push": 53
        },
        "'DATA": {
          "push": 54
        },
        "'VAR": {
          "push": 55
        },
        "'REC": {
          "push": 56
        },
        "'WHEN": {
          "push": 57
        },
        "expr": {
          "push": 58
        },
        "paren-expr": {
          "push": 59
        },
        "id-expr": {
          "push": 60
        },
        "prim-expr": {
          "push": 61
        },
        "lambda-expr": {
          "push": 62
        },
        "method-expr": {
          "push": 63
        },
        "app-expr": {
          "push": 64
        },
        "obj-expr": {
          "push": 65
        },
        "tuple-expr": {
          "push": 66
        },
        "tuple-get": {
          "push": 67
        },
        "dot-expr": {
          "push": 68
        },
        "template-expr": {
          "push": 69
        },
        "bracket-expr": {
          "push": 70
        },
        "get-bang-expr": {
          "push": 71
        },
        "update-expr": {
          "push": 72
        },
        "extend-expr": {
          "push": 73
        },
        "if-expr": {
          "push": 74
        },
        "if-pipe-expr": {
          "push": 75
        },
        "cases-expr": {
          "push": 76
        },
        "for-expr": {
          "push": 77
        },
        "user-block-expr": {
          "push": 78
        },
        "inst-expr": {
          "push": 79
        },
        "construct-expr": {
          "push": 80
        },
        "table-select": {
          "push": 81
        },
        "table-extend": {
          "push": 82
        },
        "table-filter": {
          "push": 83
        },
        "table-order": {
          "push": 84
        },
        "table-extract": {
          "push": 85
        },
        "table-update": {
          "push": 86
        },
        "table-expr": {
          "push": 87
        },
        "load-table-expr": {
          "push": 88
        },
        "reactor-expr": {
          "push": 89
        },
        "'DOTDOTDOT": {
          "push": 90
        },
        "paren-expr_I0": {
          "push": 91
        },
        "num-expr": {
          "push": 92
        },
        "frac-expr": {
          "push": 93
        },
        "bool-expr": {
          "push": 94
        },
        "string-expr": {
          "push": 95
        },
        "'NUMBER": {
          "push": 96
        },
        "'RATIONAL": {
          "push": 97
        },
        "'TRUE": {
          "push": 98
        },
        "'FALSE": {
          "push": 99
        },
        "'LAM": {
          "push": 100
        },
        "'METHOD": {
          "push": 101
        },
        "'LBRACK": {
          "push": 102
        },
        "'TABLE": {
          "push": 103
        },
        "'REACTOR": {
          "push": 104
        },
        "'IF": {
          "push": 105
        },
        "'ASK": {
          "push": 106
        },
        "'CASES": {
          "push": 107
        },
        "'FOR": {
          "push": 108
        },
        "'TABLE-SELECT": {
          "push": 109
        },
        "'TABLE-FILTER": {
          "push": 110
        },
        "'TABLE-ORDER": {
          "push": 111
        },
        "'TABLE-EXTRACT": {
          "push": 112
        },
        "'TABLE-UPDATE": {
          "push": 113
        },
        "'TABLE-EXTEND": {
          "push": 114
        },
        "'LOAD-TABLE": {
          "push": 115
        },
        "$": {
          "reductions": [
            [
              4408,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              4408,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              4408,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              4408,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              4408,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              4408,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              4408,
              0
            ]
          ]
        }
      },
      {
        "prelude_I2_star": {
          "push": 118
        },
        "$": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              8,
              5
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              8,
              5
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              8869,
              5
            ],
            [
              8,
              5
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9000,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9045,
              0
            ]
          ]
        }
      },
      {
        "'STAR": {
          "push": 119
        },
        "record-ann": {
          "push": 120
        },
        "'LBRACE": {
          "push": 121
        }
      },
      {
        "'COLONCOLON": {
          "push": 122
        },
        "'COLONEQUALS": {
          "push": 123
        },
        "$": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9226,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              9266,
              0
            ]
          ]
        }
      },
      {
        "'END": {
          "push": 124
        }
      },
      {
        "$": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'INCLUDE": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'IMPORT": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'PROVIDE-TYPES": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9350,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9396,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9398,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9400,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9402,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9404,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9406,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9408,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9410,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9412,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9414,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9416,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9418,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 125
        }
      },
      {
        "'NAME": {
          "push": 126
        }
      },
      {
        "'EQUALS": {
          "push": 127
        }
      },
      {
        "check-op": {
          "push": 128
        },
        "check-op-postfix": {
          "push": 129
        },
        "'IS": {
          "push": 130
        },
        "'ISEQUALEQUAL": {
          "push": 131
        },
        "'ISEQUALTILDE": {
          "push": 132
        },
        "'ISSPACESHIP": {
          "push": 133
        },
        "'ISROUGHLY": {
          "push": 134
        },
        "'ISNOT": {
          "push": 135
        },
        "'ISNOTEQUALEQUAL": {
          "push": 136
        },
        "'ISNOTEQUALTILDE": {
          "push": 137
        },
        "'ISNOTSPACESHIP": {
          "push": 138
        },
        "'RAISES": {
          "push": 139
        },
        "'RAISESOTHER": {
          "push": 140
        },
        "'SATISFIES": {
          "push": 141
        },
        "'SATISFIESNOT": {
          "push": 142
        },
        "'RAISESSATISFIES": {
          "push": 143
        },
        "'RAISESVIOLATES": {
          "push": 144
        },
        "'RAISESNOT": {
          "push": 145
        },
        "$": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              9428,
              0
            ]
          ]
        }
      },
      {
        "'EQUALS": {
          "reductions": [
            [
              9898,
              0
            ]
          ]
        }
      },
      {
        "'FROM": {
          "reductions": [
            [
              9900,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              9900,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              9900,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              9900,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9900,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              9900,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              9900,
              0
            ]
          ]
        }
      },
      {
        "'FROM": {
          "reductions": [
            [
              9902,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              9902,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              9902,
              0
            ]
          ]
        },
        "'EQUALS": {
          "reductions": [
            [
              9902,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              9902,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              9902,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              9902,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 146,
          "reductions": [
            [
              51,
              10
            ]
          ]
        },
        "'STRING": {
          "push": 14
        },
        "ty-params": {
          "push": 147
        },
        "binop-expr": {
          "push": 148
        },
        "'LBRACE": {
          "push": 149,
          "reductions": [
            [
              51,
              10
            ]
          ]
        },
        "tuple-binding_I1_star": {
          "push": 150
        },
        "'RBRACE": {
          "push": 151
        },
        "multi-let-expr": {
          "push": 40
        },
        "'LET": {
          "push": 41
        },
        "'BLOCK": {
          "push": 42
        },
        "letrec-expr": {
          "push": 43
        },
        "'LETREC": {
          "push": 44
        },
        "type-let-expr": {
          "push": 45
        },
        "'TYPE-LET": {
          "push": 46
        },
        "fun-header": {
          "push": 152
        },
        "ty-params_I0_opt": {
          "push": 153
        },
        "ty-params_I0": {
          "push": 154
        },
        "ty-params_I0_I0": {
          "push": 155
        },
        "'LANGLE": {
          "push": 156
        },
        "'LT": {
          "push": 157
        },
        "'PARENAFTERBRACE": {
          "push": 48,
          "reductions": [
            [
              99,
              18
            ],
            [
              100,
              19
            ]
          ]
        },
        "'PARENSPACE": {
          "push": 53
        },
        "'REF": {
          "push": 158
        },
        "expr": {
          "push": 58
        },
        "paren-expr": {
          "push": 59
        },
        "id-expr": {
          "push": 60
        },
        "prim-expr": {
          "push": 61
        },
        "lambda-expr": {
          "push": 62
        },
        "method-expr": {
          "push": 63
        },
        "app-expr": {
          "push": 64
        },
        "obj-expr": {
          "push": 65
        },
        "tuple-expr": {
          "push": 66
        },
        "tuple-get": {
          "push": 67
        },
        "dot-expr": {
          "push": 68
        },
        "template-expr": {
          "push": 69
        },
        "bracket-expr": {
          "push": 70
        },
        "get-bang-expr": {
          "push": 71
        },
        "update-expr": {
          "push": 72
        },
        "extend-expr": {
          "push": 73
        },
        "if-expr": {
          "push": 74
        },
        "if-pipe-expr": {
          "push": 75
        },
        "cases-expr": {
          "push": 76
        },
        "for-expr": {
          "push": 77
        },
        "user-block-expr": {
          "push": 78
        },
        "inst-expr": {
          "push": 79
        },
        "construct-expr": {
          "push": 80
        },
        "table-select": {
          "push": 81
        },
        "table-extend": {
          "push": 82
        },
        "table-filter": {
          "push": 83
        },
        "table-order": {
          "push": 84
        },
        "table-extract": {
          "push": 85
        },
        "table-update": {
          "push": 86
        },
        "table-expr": {
          "push": 87
        },
        "load-table-expr": {
          "push": 88
        },
        "reactor-expr": {
          "push": 89
        },
        "'DOTDOTDOT": {
          "push": 90
        },
        "paren-expr_I0": {
          "push": 91
        },
        "num-expr": {
          "push": 92
        },
        "frac-expr": {
          "push": 93
        },
        "bool-expr": {
          "push": 94
        },
        "string-expr": {
          "push": 95
        },
        "'NUMBER": {
          "push": 96
        },
        "'RATIONAL": {
          "push": 97
        },
        "'TRUE": {
          "push": 98
        },
        "'FALSE": {
          "push": 99
        },
        "'LAM": {
          "push": 100
        },
        "'METHOD": {
          "push": 159
        },
        "tuple-fields": {
          "push": 160
        },
        "obj-fields": {
          "push": 161
        },
        "obj-field": {
          "push": 162
        },
        "key": {
          "push": 163
        },
        "'LBRACK": {
          "push": 102
        },
        "'TABLE": {
          "push": 103
        },
        "'REACTOR": {
          "push": 104
        },
        "'IF": {
          "push": 105
        },
        "'ASK": {
          "push": 106
        },
        "'CASES": {
          "push": 107
        },
        "'FOR": {
          "push": 108
        },
        "'TABLE-SELECT": {
          "push": 109
        },
        "'TABLE-FILTER": {
          "push": 110
        },
        "'TABLE-ORDER": {
          "push": 111
        },
        "'TABLE-EXTRACT": {
          "push": 112
        },
        "'TABLE-UPDATE": {
          "push": 113
        },
        "'TABLE-EXTEND": {
          "push": 114
        },
        "'LOAD-TABLE": {
          "push": 115
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              99,
              18
            ],
            [
              100,
              19
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              51,
              10
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 164
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10245,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10247,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10249,
              0
            ]
          ]
        }
      },
      {
        "let-expr": {
          "push": 165
        },
        "var-expr": {
          "push": 166
        },
        "toplevel-binding": {
          "push": 31
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 167
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "let-binding": {
          "push": 168
        },
        "'VAR": {
          "push": 55
        },
        "'NAME": {
          "reductions": [
            [
              61,
              13
            ]
          ]
        }
      },
      {
        "block": {
          "push": 169
        },
        "block_I0_star": {
          "push": 8
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10376,
              0
            ]
          ]
        }
      },
      {
        "let-expr": {
          "push": 170
        },
        "toplevel-binding": {
          "push": 31
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 167
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "'NAME": {
          "reductions": [
            [
              61,
              13
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              10452,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 171
        },
        "'NEWTYPE": {
          "push": 172
        },
        "type-bind": {
          "push": 173
        },
        "newtype-bind": {
          "push": 174
        },
        "type-let-bind": {
          "push": 175
        }
      },
      {
        "'NAME": {
          "push": 176
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10542,
              0
            ]
          ]
        }
      },
      {
        "'STRING": {
          "push": 177
        }
      },
      {
        "block": {
          "push": 178
        },
        "block_I0_star": {
          "push": 8
        },
        "'NAME": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              29,
              8
            ],
            [
              30,
              9
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              30,
              9
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10577,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10620,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10663,
              0
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 179
        }
      },
      {
        "toplevel-binding": {
          "push": 180
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 167
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "'NAME": {
          "reductions": [
            [
              61,
              13
            ]
          ]
        }
      },
      {
        "toplevel-binding": {
          "push": 181
        },
        "binding": {
          "push": 33
        },
        "name-binding": {
          "push": 34
        },
        "tuple-binding": {
          "push": 35
        },
        "'LBRACE": {
          "push": 167
        },
        "name-binding_I0_opt": {
          "push": 37
        },
        "name-binding_I0": {
          "push": 38
        },
        "'SHADOW": {
          "push": 39
        },
        "'NAME": {
          "reductions": [
            [
              61,
              13
            ]
          ]
        }
      },
      {
        "'NAME": {
          "push": 182
        },
        "'STRING": {
          "push": 14
        },
        "binop-expr": {
          "push": 183
        },
        "'LBRACE": {
          "push": 149
        },
        "multi-let-expr": {
          "push": 40
        },
        "'LET": {
          "push": 41
        },
        "'BLOCK": {
          "push": 42
        },
        "letrec-expr": {
          "push": 43
        },
        "'LETREC": {
          "push": 44
        },
        "type-let-expr": {
          "push": 45
        },
        "'TYPE-LET": {
          "push": 46
        },
        "'PARENAFTERBRACE": {
          "push": 48
        },
        "'PARENSPACE": {
          "push": 53
        },
        "expr": {
          "push": 58
        },
        "paren-expr": {
          "push": 59
        },
        "id-expr": {
          "push": 60
        },
        "prim-expr": {
          "push": 61
        },
        "lambda-expr": {
          "push": 62
        },
        "method-expr": {
          "push": 63
        },
        "app-expr": {
          "push": 64
        },
        "obj-expr": {
          "push": 65
        },
        "tuple-expr": {
          "push": 66
        },
        "tuple-get": {
          "push": 67
        },
        "dot-expr": {
          "push": 68
        },
        "template-expr": {
          "push": 69
        },
        "bracket-expr": {
          "push": 70
        },
        "get-bang-expr": {
          "push": 71
        },
        "update-expr": {
          "push": 72
        },
        "extend-expr": {
          "push": 73
        },
        "if-expr": {
          "push": 74
        },
        "if-pipe-expr": {
          "push": 75
        },
        "cases-expr": {
          "push": 76
        },
        "for-expr": {
          "push": 77
        },
        "user-block-expr": {
          "push": 78
        },
        "inst-expr": {
          "push": 79
        },
        "construct-expr": {
          "push": 80
        },
        "table-select": {
          "push": 81
        },
        "table-extend": {
          "push": 82
        },
        "table-filter": {
          "push": 83
        },
        "table-order": {
          "push": 84
        },
        "table-extract": {
          "push": 85
        },
        "table-update": {
          "push": 86
        },
        "table-expr": {
          "push": 87
        },
        "load-table-expr": {
          "push": 88
        },
        "reactor-expr": {
          "push": 89
        },
        "'DOTDOTDOT": {
          "push": 90
        },
        "paren-expr_I0": {
          "push": 91
        },
        "num-expr": {
          "push": 92
        },
        "frac-expr": {
          "push": 93
        },
        "bool-expr": {
          "push": 94
        },
        "string-expr": {
          "push": 95
        },
        "'NUMBER": {
          "push": 96
        },
        "'RATIONAL": {
          "push": 97
        },
        "'TRUE": {
          "push": 98
        },
        "'FALSE": {
          "push": 99
        },
        "'LAM": {
          "push": 100
        },
        "'METHOD": {
          "push": 101
        },
        "'LBRACK": {
          "push": 102
        },
        "'TABLE": {
          "push": 103
        },
        "'REACTOR": {
          "push": 104
        },
        "'IF": {
          "push": 105
        },
        "'ASK": {
          "push": 106
        },
        "'CASES": {
          "push": 107
        },
        "'FOR": {
          "push": 108
        },
        "'TABLE-SELECT": {
          "push": 109
        },
        "'TABLE-FILTER": {
          "push": 110
        },
        "'TABLE-ORDER": {
          "push": 111
        },
        "'TABLE-EXTRACT": {
          "push": 112
        },
        "'TABLE-UPDATE": {
          "push": 113
        },
        "'TABLE-EXTEND": {
          "push": 114
        },
        "'LOAD-TABLE": {
          "push": 115
        }
      },
      {
        "'PARENNOSPACE": {
          "push": 184
        },
        "'LANGLE": {
          "push": 185
        },
        "binop-expr_I1_star": {
          "push": 186
        },
        "app-args": {
          "push": 187
        },
        "'DOT": {
          "push": 188
        },
        "'LBRACK": {
          "push": 189,
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'BANG": {
          "push": 190
        },
        "$": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              178,
              38
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              10781,
              38
            ],
            [
              178,
              38
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11204,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11242,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11280,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11318,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11356,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11394,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11432,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11470,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11508,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11546,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11584,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11622,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11660,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11698,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11736,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11774,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11812,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11850,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11888,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11926,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              11964,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12002,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12040,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12078,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12116,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12154,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12192,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12230,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'SPACESHIP": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'EQUALTILDE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'NEQ": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'AND": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'OR": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'CARET": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'IS": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'ISEQUALEQUAL": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'ISEQUALTILDE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'ISSPACESHIP": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'ISROUGHLY": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'ISNOT": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'ISNOTEQUALEQUAL": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'ISNOTEQUALTILDE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'ISNOTSPACESHIP": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'RAISES": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'RAISESOTHER": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'SATISFIES": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'SATISFIESNOT": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'RAISESSATISFIES": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'RAISESVIOLATES": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'RAISESNOT": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'DOTDOTDOT": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'NUMBER": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'RATIONAL": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'TRUE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'FALSE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'LAM": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'METHOD": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'DOT": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'LBRACK": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'RBRACK": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'TABLE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'ROW": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'REACTOR": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'BANG": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'IF": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'ELSECOLON": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'ELSEIF": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'ASK": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'THENCOLON": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'CASES": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'FOR": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'TABLE-SELECT": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'TABLE-FILTER": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'USING": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'TABLE-ORDER": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'TABLE-EXTRACT": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'TABLE-UPDATE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'TABLE-EXTEND": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'OF": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'LOAD-TABLE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'SOURCECOLON": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        },
        "'SANITIZE": {
          "reductions": [
            [
              12268,
              0
            ]
          ]
        }
      },
      {
        "$": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'NAME": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'PARENNOSPACE": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'STRING": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'RPAREN": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'COMMA": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'END": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'STAR": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'TYPE": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'NEWTYPE": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'LBRACE": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'RBRACE": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'SEMI": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'SHADOW": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'LET": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'BLOCK": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'COLON": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'LETREC": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'TYPE-LET": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'FUN": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'LANGLE": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'LT": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'GT": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'PARENAFTERBRACE": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'WHERE": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'CHECK": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'CHECKCOLON": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'EXAMPLESCOLON": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'PARENSPACE": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'DATA": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'BAR": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'SHARING": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'VAR": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'REC": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'WHEN": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'PLUS": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'DASH": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'SLASH": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'LEQ": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'GEQ": {
          "reductions": [
            [
              12306,
              0
            ]
          ]
        },
        "'EQUALEQUAL": {
          "reductions": [
            [
              12306,
              0
});