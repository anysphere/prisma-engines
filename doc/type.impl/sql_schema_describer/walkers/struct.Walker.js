(function() {var type_impls = {
"sql_schema_describer":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Walker%3C'a,+Id%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sql_schema_describer/walkers.rs.html#47-52\">source</a><a href=\"#impl-Walker%3C'a,+Id%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Id&gt; <a class=\"struct\" href=\"sql_schema_describer/walkers/struct.Walker.html\" title=\"struct sql_schema_describer::walkers::Walker\">Walker</a>&lt;'a, Id&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.walk\" class=\"method\"><a class=\"src rightside\" href=\"src/sql_schema_describer/walkers.rs.html#49-51\">source</a><h4 class=\"code-header\">pub fn <a href=\"sql_schema_describer/walkers/struct.Walker.html#tymethod.walk\" class=\"fn\">walk</a>&lt;I&gt;(self, other_id: I) -&gt; <a class=\"struct\" href=\"sql_schema_describer/walkers/struct.Walker.html\" title=\"struct sql_schema_describer::walkers::Walker\">Walker</a>&lt;'a, I&gt;</h4></section></summary><div class=\"docblock\"><p>Jump to the item identified by <code>other_id</code>.</p>\n</div></details></div></details>",0,"sql_schema_describer::walkers::column::index_column::IndexColumnWalker","sql_schema_describer::walkers::column::table_column::TableColumnWalker","sql_schema_describer::walkers::column::view_column::ViewColumnWalker","sql_schema_describer::walkers::column::ColumnWalker","sql_schema_describer::walkers::default::table_default::TableDefaultValueWalker","sql_schema_describer::walkers::default::view_default::ViewDefaultValueWalker","sql_schema_describer::walkers::default::DefaultValueWalker","sql_schema_describer::walkers::enum::EnumWalker","sql_schema_describer::walkers::enum::EnumVariantWalker","sql_schema_describer::walkers::foreign_key::ForeignKeyWalker","sql_schema_describer::walkers::index::IndexWalker","sql_schema_describer::walkers::namespace::NamespaceWalker","sql_schema_describer::walkers::table::TableWalker","sql_schema_describer::walkers::user_defined_type::UserDefinedTypeWalker","sql_schema_describer::walkers::view::ViewWalker"],["<section id=\"impl-Copy-for-Walker%3C'a,+Id%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sql_schema_describer/walkers.rs.html#31\">source</a><a href=\"#impl-Copy-for-Walker%3C'a,+Id%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"sql_schema_describer/walkers/struct.Walker.html\" title=\"struct sql_schema_describer::walkers::Walker\">Walker</a>&lt;'a, Id&gt;</h3></section>","Copy","sql_schema_describer::walkers::column::index_column::IndexColumnWalker","sql_schema_describer::walkers::column::table_column::TableColumnWalker","sql_schema_describer::walkers::column::view_column::ViewColumnWalker","sql_schema_describer::walkers::column::ColumnWalker","sql_schema_describer::walkers::default::table_default::TableDefaultValueWalker","sql_schema_describer::walkers::default::view_default::ViewDefaultValueWalker","sql_schema_describer::walkers::default::DefaultValueWalker","sql_schema_describer::walkers::enum::EnumWalker","sql_schema_describer::walkers::enum::EnumVariantWalker","sql_schema_describer::walkers::foreign_key::ForeignKeyWalker","sql_schema_describer::walkers::index::IndexWalker","sql_schema_describer::walkers::namespace::NamespaceWalker","sql_schema_describer::walkers::table::TableWalker","sql_schema_describer::walkers::user_defined_type::UserDefinedTypeWalker","sql_schema_describer::walkers::view::ViewWalker"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Walker%3C'_,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sql_schema_describer/walkers.rs.html#39-45\">source</a><a href=\"#impl-Debug-for-Walker%3C'_,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"sql_schema_describer/walkers/struct.Walker.html\" title=\"struct sql_schema_describer::walkers::Walker\">Walker</a>&lt;'_, I&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sql_schema_describer/walkers.rs.html#40-44\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","sql_schema_describer::walkers::column::index_column::IndexColumnWalker","sql_schema_describer::walkers::column::table_column::TableColumnWalker","sql_schema_describer::walkers::column::view_column::ViewColumnWalker","sql_schema_describer::walkers::column::ColumnWalker","sql_schema_describer::walkers::default::table_default::TableDefaultValueWalker","sql_schema_describer::walkers::default::view_default::ViewDefaultValueWalker","sql_schema_describer::walkers::default::DefaultValueWalker","sql_schema_describer::walkers::enum::EnumWalker","sql_schema_describer::walkers::enum::EnumVariantWalker","sql_schema_describer::walkers::foreign_key::ForeignKeyWalker","sql_schema_describer::walkers::index::IndexWalker","sql_schema_describer::walkers::namespace::NamespaceWalker","sql_schema_describer::walkers::table::TableWalker","sql_schema_describer::walkers::user_defined_type::UserDefinedTypeWalker","sql_schema_describer::walkers::view::ViewWalker"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Walker%3C'a,+Id%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sql_schema_describer/walkers.rs.html#31\">source</a><a href=\"#impl-Clone-for-Walker%3C'a,+Id%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Id: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"sql_schema_describer/walkers/struct.Walker.html\" title=\"struct sql_schema_describer::walkers::Walker\">Walker</a>&lt;'a, Id&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sql_schema_describer/walkers.rs.html#31\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"sql_schema_describer/walkers/struct.Walker.html\" title=\"struct sql_schema_describer::walkers::Walker\">Walker</a>&lt;'a, Id&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","sql_schema_describer::walkers::column::index_column::IndexColumnWalker","sql_schema_describer::walkers::column::table_column::TableColumnWalker","sql_schema_describer::walkers::column::view_column::ViewColumnWalker","sql_schema_describer::walkers::column::ColumnWalker","sql_schema_describer::walkers::default::table_default::TableDefaultValueWalker","sql_schema_describer::walkers::default::view_default::ViewDefaultValueWalker","sql_schema_describer::walkers::default::DefaultValueWalker","sql_schema_describer::walkers::enum::EnumWalker","sql_schema_describer::walkers::enum::EnumVariantWalker","sql_schema_describer::walkers::foreign_key::ForeignKeyWalker","sql_schema_describer::walkers::index::IndexWalker","sql_schema_describer::walkers::namespace::NamespaceWalker","sql_schema_describer::walkers::table::TableWalker","sql_schema_describer::walkers::user_defined_type::UserDefinedTypeWalker","sql_schema_describer::walkers::view::ViewWalker"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()