---
sidebar_position: 4
---

# Execution Stages

## Preparation

### UTF8 Validation

Cause we want to be able to assume UTF8 validity in the rest of the program, for
example for printing, storing and forwarding diagnostics as JSON.

### Tokenization

Pure segmentation and classification of the source string. Thus includes tokens
for whitespace, comments, etc. Constants such as integers and strings literals
stay as-is, without being parsed further. Very permissive w.r.t. invalid IP
addresses etc, they are reported later.

### Parsing

Hand-written recursive decent parser for good error messages. Skips trivia
tokens such as comments and whitespace. Newlines are skipped depending on the
state of the parser. Returns a `tenzir::ast::pipeline` object.

### Entity Resolving

Entity resolving happens in-place on the AST. Entities are operators, functions
and modules. Let bindings are not entities. Entities are disambiguated by their
namespace (operator, function, or module), such that operators and functions can
have the same name (but they are different entities). Packages are the roots of
all entities. At the moment, there are two packages: The `std` package for
everything that is built-in, and the `cfg` package for user-defined operators
coming from the config.

### Pipeline IR

The bound AST is then compiled into the pipeline IR. This transforms all
statements into a collection of hoisted `let` bindings plus a chain of
operators. Built-in operators are transformed into an operator IR object which
are added to the chain. User-defined operators are compiled into independent
pipeline IR first, and then their `let` bindings and operators are appended to
the currently built pipeline IR. Thus, pipeline IR does not contain user-defined
operators anymore. Let bindings are bound during the compilation process, but
they are not substituted. TODO: Describe in more detail how this is done
lexically while still supporting dynamic use cases such as `group`.

### True Constant Substitution (optional)

This is not implemented yet. We can immediately substitute `let` bindings which
are bound to a true constant (in contrast to something like `now()` or
`random()` which can be evaluated in a constant context, but are not really
constants).

### Early Stream Type Checking (optional)

We perform an early (stream) type checking pass before further transformation
passes on the IR. At this stage, the IR is still very close to what the user
wrote, hence this is a good time to report errors if we can.

### Early Optimization (optional)

We optimize the IR before instantiation because we want to be able to optimize
through instantiation barriers such as `group`, `every`, etc.

### Instantiation

Instantiation is when all `let` bindings are evaluated and substituted into the
operators. We already substituted true constants, this will substitute the rest
now. Afterwards, no `let` bindings remain in the IR. This phase should happen as
late as possible, as it evaluates things such as `now()`.

TODO: This is the first non-deterministic pass, or not?

TODO: Describe how this works in detail.

TODO: How does this interact with inner pipelines such as those from `if`?

TODO: How does this interact with things like `every random()*1s { … }` or
`from {x: now()}`?

### Late Stream Type Checking

TODO: Is this what we want?

### Late Optimization (recommended)

We now optimize again, because we just substituted more `let` bindings.

### Executor Transition

This is the transition from pipeline IR into something that the executor
understands. The IR doesn't contain any `let` bindings and is fully optimized at
this point. We now ask the operators to give us something that knows how to
spawn an actor. Operators can also request to spawn multiple actors by returning
multiple things here. The operators can do some final validation at his point
(TODO: Can this fail?). Up to and including this phase, no side effects (besides
diagnostics) were observable.

## Executor

TODO
