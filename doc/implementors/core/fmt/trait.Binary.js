(function() {var implementors = {
"bitvec":[["impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/vec/struct.BitVec.html\" title=\"struct bitvec::vec::BitVec\">BitVec</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,</span>"],["impl&lt;A, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/array/struct.BitArray.html\" title=\"struct bitvec::array::BitArray\">BitArray</a>&lt;A, O&gt;<span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    A: <a class=\"trait\" href=\"bitvec/view/trait.BitViewSized.html\" title=\"trait bitvec::view::BitViewSized\">BitViewSized</a>,</span>"],["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/index/struct.BitSel.html\" title=\"struct bitvec::index::BitSel\">BitSel</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,</span>"],["impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/boxed/struct.BitBox.html\" title=\"struct bitvec::boxed::BitBox\">BitBox</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,</span>"],["impl&lt;T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/slice/struct.BitSlice.html\" title=\"struct bitvec::slice::BitSlice\">BitSlice</a>&lt;T, O&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,</span>"],["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/index/struct.BitIdx.html\" title=\"struct bitvec::index::BitIdx\">BitIdx</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,</span>"],["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/index/struct.BitPos.html\" title=\"struct bitvec::index::BitPos\">BitPos</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,</span>"],["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/index/struct.BitMask.html\" title=\"struct bitvec::index::BitMask\">BitMask</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,</span>"],["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"bitvec/index/struct.BitEnd.html\" title=\"struct bitvec::index::BitEnd\">BitEnd</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: <a class=\"trait\" href=\"bitvec/mem/trait.BitRegister.html\" title=\"trait bitvec::mem::BitRegister\">BitRegister</a>,</span>"],["impl&lt;'a, T, O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"enum\" href=\"bitvec/domain/enum.Domain.html\" title=\"enum bitvec::domain::Domain\">Domain</a>&lt;'a, <a class=\"struct\" href=\"bitvec/ptr/struct.Const.html\" title=\"struct bitvec::ptr::Const\">Const</a>, T, O&gt;<span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"bitvec/order/trait.BitOrder.html\" title=\"trait bitvec::order::BitOrder\">BitOrder</a>,\n    T: <a class=\"trait\" href=\"bitvec/store/trait.BitStore.html\" title=\"trait bitvec::store::BitStore\">BitStore</a>,</span>"]],
"deranged":[["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u32.html\">u32</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u32.html\">u32</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"deranged/struct.RangedU32.html\" title=\"struct deranged::RangedU32\">RangedU32</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i64.html\">i64</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i64.html\">i64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"deranged/struct.RangedI64.html\" title=\"struct deranged::RangedI64\">RangedI64</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u64.html\">u64</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u64.html\">u64</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"deranged/struct.RangedU64.html\" title=\"struct deranged::RangedU64\">RangedU64</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i8.html\">i8</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i8.html\">i8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"deranged/struct.RangedI8.html\" title=\"struct deranged::RangedI8\">RangedI8</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i16.html\">i16</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i16.html\">i16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"deranged/struct.RangedI16.html\" title=\"struct deranged::RangedI16\">RangedI16</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.usize.html\">usize</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"deranged/struct.RangedUsize.html\" title=\"struct deranged::RangedUsize\">RangedUsize</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u128.html\">u128</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u128.html\">u128</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"deranged/struct.RangedU128.html\" title=\"struct deranged::RangedU128\">RangedU128</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u8.html\">u8</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"deranged/struct.RangedU8.html\" title=\"struct deranged::RangedU8\">RangedU8</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i128.html\">i128</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i128.html\">i128</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"deranged/struct.RangedI128.html\" title=\"struct deranged::RangedI128\">RangedI128</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.isize.html\">isize</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.isize.html\">isize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"deranged/struct.RangedIsize.html\" title=\"struct deranged::RangedIsize\">RangedIsize</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u16.html\">u16</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"deranged/struct.RangedU16.html\" title=\"struct deranged::RangedU16\">RangedU16</a>&lt;MIN, MAX&gt;"],["impl&lt;const MIN: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i32.html\">i32</a>, const MAX: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/std/primitive.i32.html\">i32</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"deranged/struct.RangedI32.html\" title=\"struct deranged::RangedI32\">RangedI32</a>&lt;MIN, MAX&gt;"]],
"enumflags2":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"enumflags2/struct.BitFlags.html\" title=\"struct enumflags2::BitFlags\">BitFlags</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"enumflags2/trait.BitFlag.html\" title=\"trait enumflags2::BitFlag\">BitFlag</a>,\n    T::Numeric: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>,</span>"]],
"itertools":[["impl&lt;'a, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"itertools/structs/struct.Format.html\" title=\"struct itertools::structs::Format\">Format</a>&lt;'a, I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>,\n    I::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.72.1/core/iter/traits/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::traits::iterator::Iterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>,</span>"]],
"js_sys":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"js_sys/struct.BigInt.html\" title=\"struct js_sys::BigInt\">BigInt</a>"]],
"lsp_types":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"lsp_types/struct.WatchKind.html\" title=\"struct lsp_types::WatchKind\">WatchKind</a>"]],
"mysql_common":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/constants/struct.CapabilityFlags.html\" title=\"struct mysql_common::constants::CapabilityFlags\">CapabilityFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/packets/struct.BinlogDumpFlags.html\" title=\"struct mysql_common::packets::BinlogDumpFlags\">BinlogDumpFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/binlog/consts/struct.RowsEventFlags.html\" title=\"struct mysql_common::binlog::consts::RowsEventFlags\">RowsEventFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/constants/struct.StmtExecuteParamFlags.html\" title=\"struct mysql_common::constants::StmtExecuteParamFlags\">StmtExecuteParamFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/binlog/consts/struct.UserVarFlags.html\" title=\"struct mysql_common::binlog::consts::UserVarFlags\">UserVarFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/constants/struct.StatusFlags.html\" title=\"struct mysql_common::constants::StatusFlags\">StatusFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/binlog/consts/struct.SemiSyncFlags.html\" title=\"struct mysql_common::binlog::consts::SemiSyncFlags\">SemiSyncFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/binlog/consts/struct.GtidFlags.html\" title=\"struct mysql_common::binlog::consts::GtidFlags\">GtidFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/constants/struct.StmtExecuteParamsFlags.html\" title=\"struct mysql_common::constants::StmtExecuteParamsFlags\">StmtExecuteParamsFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/constants/struct.SqlMode.html\" title=\"struct mysql_common::constants::SqlMode\">SqlMode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/constants/struct.CursorType.html\" title=\"struct mysql_common::constants::CursorType\">CursorType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/constants/struct.Flags2.html\" title=\"struct mysql_common::constants::Flags2\">Flags2</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/constants/struct.ColumnFlags.html\" title=\"struct mysql_common::constants::ColumnFlags\">ColumnFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"mysql_common/binlog/consts/struct.EventFlags.html\" title=\"struct mysql_common::binlog::consts::EventFlags\">EventFlags</a>"]],
"napi":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"napi/struct.PropertyAttributes.html\" title=\"struct napi::PropertyAttributes\">PropertyAttributes</a>"]],
"num_bigint":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"num_bigint/struct.BigInt.html\" title=\"struct num_bigint::BigInt\">BigInt</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"num_bigint/struct.BigUint.html\" title=\"struct num_bigint::BigUint\">BigUint</a>"]],
"num_complex":[["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"num_complex/struct.Complex.html\" title=\"struct num_complex::Complex\">Complex</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> + <a class=\"trait\" href=\"num_traits/trait.Num.html\" title=\"trait num_traits::Num\">Num</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"]],
"num_rational":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"num_rational/struct.Ratio.html\" title=\"struct num_rational::Ratio\">Ratio</a>&lt;T&gt;"]],
"openssl":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspFlag.html\" title=\"struct openssl::ocsp::OcspFlag\">OcspFlag</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslSessionCacheMode.html\" title=\"struct openssl::ssl::SslSessionCacheMode\">SslSessionCacheMode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslVerifyMode.html\" title=\"struct openssl::ssl::SslVerifyMode\">SslVerifyMode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslMode.html\" title=\"struct openssl::ssl::SslMode\">SslMode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/cipher_ctx/struct.CipherCtxFlags.html\" title=\"struct openssl::cipher_ctx::CipherCtxFlags\">CipherCtxFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/x509/verify/struct.X509VerifyFlags.html\" title=\"struct openssl::x509::verify::X509VerifyFlags\">X509VerifyFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/pkcs7/struct.Pkcs7Flags.html\" title=\"struct openssl::pkcs7::Pkcs7Flags\">Pkcs7Flags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/x509/verify/struct.X509CheckFlags.html\" title=\"struct openssl::x509::verify::X509CheckFlags\">X509CheckFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ssl/struct.ShutdownState.html\" title=\"struct openssl::ssl::ShutdownState\">ShutdownState</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ssl/struct.ExtensionContext.html\" title=\"struct openssl::ssl::ExtensionContext\">ExtensionContext</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/cms/struct.CMSOptions.html\" title=\"struct openssl::cms::CMSOptions\">CMSOptions</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"openssl/ssl/struct.SslOptions.html\" title=\"struct openssl::ssl::SslOptions\">SslOptions</a>"]],
"quaint_test_setup":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"quaint_test_setup/struct.Tags.html\" title=\"struct quaint_test_setup::Tags\">Tags</a>"]],
"rusqlite":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rusqlite/struct.OpenFlags.html\" title=\"struct rusqlite::OpenFlags\">OpenFlags</a>"]],
"rustix":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/io/struct.FdFlags.html\" title=\"struct rustix::io::FdFlags\">FdFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/io/struct.ReadWriteFlags.html\" title=\"struct rustix::io::ReadWriteFlags\">ReadWriteFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/struct.RenameFlags.html\" title=\"struct rustix::fs::RenameFlags\">RenameFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/struct.MemfdFlags.html\" title=\"struct rustix::fs::MemfdFlags\">MemfdFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/struct.XattrFlags.html\" title=\"struct rustix::fs::XattrFlags\">XattrFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/struct.OFlags.html\" title=\"struct rustix::fs::OFlags\">OFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/termios/struct.ControlModes.html\" title=\"struct rustix::termios::ControlModes\">ControlModes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/struct.AtFlags.html\" title=\"struct rustix::fs::AtFlags\">AtFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/struct.Access.html\" title=\"struct rustix::fs::Access\">Access</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/inotify/struct.CreateFlags.html\" title=\"struct rustix::fs::inotify::CreateFlags\">CreateFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/struct.FallocateFlags.html\" title=\"struct rustix::fs::FallocateFlags\">FallocateFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/termios/struct.InputModes.html\" title=\"struct rustix::termios::InputModes\">InputModes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/termios/struct.OutputModes.html\" title=\"struct rustix::termios::OutputModes\">OutputModes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/termios/struct.LocalModes.html\" title=\"struct rustix::termios::LocalModes\">LocalModes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/struct.SealFlags.html\" title=\"struct rustix::fs::SealFlags\">SealFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/inotify/struct.WatchFlags.html\" title=\"struct rustix::fs::inotify::WatchFlags\">WatchFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/struct.Mode.html\" title=\"struct rustix::fs::Mode\">Mode</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/struct.ResolveFlags.html\" title=\"struct rustix::fs::ResolveFlags\">ResolveFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/io/struct.DupFlags.html\" title=\"struct rustix::io::DupFlags\">DupFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/struct.StatVfsMountFlags.html\" title=\"struct rustix::fs::StatVfsMountFlags\">StatVfsMountFlags</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"rustix/fs/struct.StatxFlags.html\" title=\"struct rustix::fs::StatxFlags\">StatxFlags</a>"]],
"saturating":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"saturating/struct.Saturating.html\" title=\"struct saturating::Saturating\">Saturating</a>&lt;T&gt;"]],
"tinyvec":[["impl&lt;A: <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt;<span class=\"where fmt-newline\">where\n    A::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>,</span>"],["impl&lt;A: <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt;<span class=\"where fmt-newline\">where\n    A::<a class=\"associatedtype\" href=\"tinyvec/trait.Array.html#associatedtype.Item\" title=\"type tinyvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>,</span>"],["impl&lt;'s, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>,</span>"]],
"tracing_subscriber":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"tracing_subscriber/filter/struct.FilterId.html\" title=\"struct tracing_subscriber::filter::FilterId\">FilterId</a>"]],
"wyz":[["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.UpperExp.html\" title=\"trait core::fmt::UpperExp\">UpperExp</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperExp.html\" title=\"struct wyz::fmt::FmtUpperExp\">FmtUpperExp</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.UpperHex.html\" title=\"trait core::fmt::UpperHex\">UpperHex</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtUpperHex.html\" title=\"struct wyz::fmt::FmtUpperHex\">FmtUpperHex</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtBinary.html\" title=\"struct wyz::fmt::FmtBinary\">FmtBinary</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtList.html\" title=\"struct wyz::fmt::FmtList\">FmtList</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    for&lt;'a&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/core/primitive.reference.html\">&amp;'a T</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>,\n    for&lt;'a&gt; &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.72.1/core/primitive.reference.html\">&amp;'a T</a> as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.72.1/core/iter/traits/collect/trait.IntoIterator.html#associatedtype.Item\" title=\"type core::iter::traits::collect::IntoIterator::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>,</span>"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Pointer.html\" title=\"trait core::fmt::Pointer\">Pointer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtPointer.html\" title=\"struct wyz::fmt::FmtPointer\">FmtPointer</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Octal.html\" title=\"trait core::fmt::Octal\">Octal</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtOctal.html\" title=\"struct wyz::fmt::FmtOctal\">FmtOctal</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtDisplay.html\" title=\"struct wyz::fmt::FmtDisplay\">FmtDisplay</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.LowerHex.html\" title=\"trait core::fmt::LowerHex\">LowerHex</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerHex.html\" title=\"struct wyz::fmt::FmtLowerHex\">FmtLowerHex</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.LowerExp.html\" title=\"trait core::fmt::LowerExp\">LowerExp</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.72.1/core/fmt/trait.Binary.html\" title=\"trait core::fmt::Binary\">Binary</a> for <a class=\"struct\" href=\"wyz/fmt/struct.FmtLowerExp.html\" title=\"struct wyz::fmt::FmtLowerExp\">FmtLowerExp</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()