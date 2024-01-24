(function() {var type_impls = {
"schema_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ConnectorError\" class=\"impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#67\">source</a><a href=\"#impl-ConnectorError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.context\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#69\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.context\" class=\"fn\">context</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"tracing_error/backtrace/struct.SpanTrace.html\" title=\"struct tracing_error::backtrace::SpanTrace\">SpanTrace</a></h4></section></summary><div class=\"docblock\"><p>A reference to the tracing-error context.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.error_code\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#74\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.error_code\" class=\"fn\">error_code</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class=\"docblock\"><p>The user-facing error code for this error.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.message\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#80\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.message\" class=\"fn\">message</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;</h4></section></summary><div class=\"docblock\"><p>The error message. Unlike the <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\"><code>Display</code></a> implementation, this does not include the source\nand context.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_msg\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#85\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.from_msg\" class=\"fn\">from_msg</a>(msg: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h4></section></summary><div class=\"docblock\"><p>Build a generic unknown error from just an error message.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_source_with_context\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#95\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.from_source_with_context\" class=\"fn\">from_source_with_context</a>&lt;E&gt;(\n    source: E,\n    context: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;\n) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a><span class=\"where fmt-newline\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span></h4></section></summary><div class=\"docblock\"><p>Build a generic unknown error from a source error, with some additional context.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_source\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#105\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.from_source\" class=\"fn\">from_source</a>&lt;E&gt;(source: E, context: &amp;'static <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a><span class=\"where fmt-newline\">where\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,</span></h4></section></summary><div class=\"docblock\"><p>Build a generic unknown error from a source error, with some additional context.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_introspection_result_empty_error\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#115\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.into_introspection_result_empty_error\" class=\"fn\">into_introspection_result_empty_error</a>() -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h4></section></summary><div class=\"docblock\"><p>Turn the error into a nested, user-facing IntrospectionResultEmpty error.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_migration_does_not_apply_cleanly\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#127\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.into_migration_does_not_apply_cleanly\" class=\"fn\">into_migration_does_not_apply_cleanly</a>(\n    self,\n    migration_name: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>\n) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h4></section></summary><div class=\"docblock\"><p>Turn the error into a nested, user-facing MigrationDoesNotApplyCleanly error.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_shadow_db_creation_error\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#143\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.into_shadow_db_creation_error\" class=\"fn\">into_shadow_db_creation_error</a>(self) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h4></section></summary><div class=\"docblock\"><p>Turn the error into a nested, user-facing ShadowDbCreationError.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_soft_reset_failed_error\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#158\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.into_soft_reset_failed_error\" class=\"fn\">into_soft_reset_failed_error</a>(self) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h4></section></summary><div class=\"docblock\"><p>Turn the error into a nested, user-facing SoftResetFailed error.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_user_facing_error\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#173\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.is_user_facing_error\" class=\"fn\">is_user_facing_error</a>&lt;T&gt;(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a><span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"user_facing_errors/trait.UserFacingError.html\" title=\"trait user_facing_errors::UserFacingError\">UserFacingError</a>,</span></h4></section></summary><div class=\"docblock\"><p>Is this error’s cause the passed in user facing error?</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.known_error\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#178\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.known_error\" class=\"fn\">known_error</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"user_facing_errors/struct.KnownError.html\" title=\"struct user_facing_errors::KnownError\">KnownError</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Access the inner <code>user_facing_error::KnownError</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_schema_parser_error\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#183\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.new_schema_parser_error\" class=\"fn\">new_schema_parser_error</a>(full_error: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h4></section></summary><div class=\"docblock\"><p>Create a new P1012 user facing error from the rendered datamodel parser error.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.source_as\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#188\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.source_as\" class=\"fn\">source_as</a>&lt;T&gt;(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;T</a>&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + 'static,</span></h4></section></summary><div class=\"docblock\"><p>Try to downcast the source to a specific type.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_user_facing\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#194\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.to_user_facing\" class=\"fn\">to_user_facing</a>(&amp;self) -&gt; <a class=\"struct\" href=\"user_facing_errors/struct.Error.html\" title=\"struct user_facing_errors::Error\">Error</a></h4></section></summary><div class=\"docblock\"><p>Render to a user_facing_error::Error</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.user_facing\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#202\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.user_facing\" class=\"fn\">user_facing</a>&lt;T&gt;(err: T) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a><span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"user_facing_errors/trait.UserFacingError.html\" title=\"trait user_facing_errors::UserFacingError\">UserFacingError</a>,</span></h4></section></summary><div class=\"docblock\"><p>Construct a GenericError with an associated user facing error.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.url_parse_error\" class=\"method\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#212\">source</a><h4 class=\"code-header\">pub fn <a href=\"schema_connector/error/struct.ConnectorError.html#tymethod.url_parse_error\" class=\"fn\">url_parse_error</a>(err: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h4></section></summary><div class=\"docblock\"><p>Construct an UrlParseError.</p>\n</div></details></div></details>",0,"schema_core::core_error::CoreError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ConnectorError\" class=\"impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#34\">source</a><a href=\"#impl-Debug-for-ConnectorError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#35\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","schema_core::core_error::CoreError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Error-for-ConnectorError\" class=\"impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#58\">source</a><a href=\"#impl-Error-for-ConnectorError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> for <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.source\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#59\">source</a><a href=\"#method.source\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html#method.source\" class=\"fn\">source</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;(dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a> + 'static)&gt;</h4></section></summary><div class='docblock'>The lower-level source of this error, if any. <a href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html#method.source\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.description\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/error.rs.html#110\">source</a></span><a href=\"#method.description\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html#method.description\" class=\"fn\">description</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a></h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.42.0: use the Display impl or to_string()</span></div></span><div class='docblock'> <a href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html#method.description\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cause\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/error.rs.html#120\">source</a></span><a href=\"#method.cause\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html#method.cause\" class=\"fn\">cause</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html\" title=\"trait core::error::Error\">Error</a>&gt;</h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 1.33.0: replaced by Error::source, which can support downcasting</span></div></span></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.provide\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/1.75.0/src/core/error.rs.html#184\">source</a><a href=\"#method.provide\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html#method.provide\" class=\"fn\">provide</a>&lt;'a&gt;(&amp;'a self, request: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/error/struct.Request.html\" title=\"struct core::error::Request\">Request</a>&lt;'a&gt;)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>error_generic_member_access</code>)</span></div></span><div class='docblock'>Provides type based access to context intended for error reports. <a href=\"https://doc.rust-lang.org/1.75.0/core/error/trait.Error.html#method.provide\">Read more</a></div></details></div></details>","Error","schema_core::core_error::CoreError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ConnectorError\" class=\"impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#15\">source</a><a href=\"#impl-Clone-for-ConnectorError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#15\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","schema_core::core_error::CoreError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-ConnectorError\" class=\"impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#42\">source</a><a href=\"#impl-Display-for-ConnectorError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#43\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","schema_core::core_error::CoreError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CListMigrationsError%3E-for-ConnectorError\" class=\"impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#245\">source</a><a href=\"#impl-From%3CListMigrationsError%3E-for-ConnectorError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"schema_connector/migrations_directory/struct.ListMigrationsError.html\" title=\"struct schema_connector::migrations_directory::ListMigrationsError\">ListMigrationsError</a>&gt; for <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#246\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(err: <a class=\"struct\" href=\"schema_connector/migrations_directory/struct.ListMigrationsError.html\" title=\"struct schema_connector::migrations_directory::ListMigrationsError\">ListMigrationsError</a>) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<ListMigrationsError>","schema_core::core_error::CoreError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CKnownError%3E-for-ConnectorError\" class=\"impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#219\">source</a><a href=\"#impl-From%3CKnownError%3E-for-ConnectorError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"user_facing_errors/struct.KnownError.html\" title=\"struct user_facing_errors::KnownError\">KnownError</a>&gt; for <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#220\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(err: <a class=\"struct\" href=\"user_facing_errors/struct.KnownError.html\" title=\"struct user_facing_errors::KnownError\">KnownError</a>) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<KnownError>","schema_core::core_error::CoreError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CReadMigrationScriptError%3E-for-ConnectorError\" class=\"impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#230\">source</a><a href=\"#impl-From%3CReadMigrationScriptError%3E-for-ConnectorError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"schema_connector/migrations_directory/struct.ReadMigrationScriptError.html\" title=\"struct schema_connector::migrations_directory::ReadMigrationScriptError\">ReadMigrationScriptError</a>&gt; for <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/schema_connector/error.rs.html#231\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(err: <a class=\"struct\" href=\"schema_connector/migrations_directory/struct.ReadMigrationScriptError.html\" title=\"struct schema_connector::migrations_directory::ReadMigrationScriptError\">ReadMigrationScriptError</a>) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<ReadMigrationScriptError>","schema_core::core_error::CoreError"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CSystemDatabase%3E-for-ConnectorError\" class=\"impl\"><a class=\"src rightside\" href=\"src/sql_schema_connector/error.rs.html#7\">source</a><a href=\"#impl-From%3CSystemDatabase%3E-for-ConnectorError\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;SystemDatabase&gt; for <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sql_schema_connector/error.rs.html#8\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(err: SystemDatabase) -&gt; <a class=\"struct\" href=\"schema_connector/error/struct.ConnectorError.html\" title=\"struct schema_connector::error::ConnectorError\">ConnectorError</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<SystemDatabase>","schema_core::core_error::CoreError"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()