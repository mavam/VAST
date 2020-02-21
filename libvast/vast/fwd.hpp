/******************************************************************************
 *                    _   _____   __________                                  *
 *                   | | / / _ | / __/_  __/     Visibility                   *
 *                   | |/ / __ |_\ \  / /          Across                     *
 *                   |___/_/ |_/___/ /_/       Space and Time                 *
 *                                                                            *
 * This file is part of VAST. It is subject to the license terms in the       *
 * LICENSE file found in the top-level directory of this distribution and at  *
 * http://vast.io/license. No part of VAST, including this file, may be       *
 * copied, modified, propagated, or distributed except according to the terms *
 * contained in the LICENSE file.                                             *
 ******************************************************************************/

#pragma once

#include <caf/intrusive_cow_ptr.hpp>
#include <caf/intrusive_ptr.hpp>

namespace vast {

// -- classes ------------------------------------------------------------------

class abstract_type;
class address;
class arrow_table_slice;
class arrow_table_slice_builder;
class bitmap;
class chunk;
class column_index;
class command;
class data;
class default_table_slice;
class default_table_slice_builder;
class event;
class ewah_bitstream;
class expression;
class json;
class meta_index;
class path;
class pattern;
class port;
class schema;
class segment;
class segment_builder;
class segment_store;
class store;
class subnet;
class synopsis;
class table_slice;
class table_slice_builder;
class type;
class uuid;
class value;
class value_index;

// -- structs ------------------------------------------------------------------

struct address_type;
struct alias_type;
struct attribute_extractor;
struct bool_type;
struct count_type;
struct curried_predicate;
struct data_extractor;
struct duration_type;
struct enumeration_type;
struct flow;
struct integer_type;
struct key_extractor;
struct map_type;
struct none_type;
struct offset;
struct pattern_type;
struct port_type;
struct predicate;
struct real_type;
struct record_type;
struct set_type;
struct string_type;
struct subnet_type;
struct time_type;
struct vector_type;

// -- templates ----------------------------------------------------------------

template <class>
class scope_linked;

// -- free functions -----------------------------------------------------------

void intrusive_ptr_add_ref(const table_slice*);
void intrusive_ptr_release(const table_slice*);
table_slice* intrusive_cow_ptr_unshare(table_slice*&);

void intrusive_ptr_add_ref(const table_slice_builder*);
void intrusive_ptr_release(const table_slice_builder*);

// -- smart pointers -----------------------------------------------------------

using chunk_ptr = caf::intrusive_ptr<chunk>;
using column_index_ptr = std::unique_ptr<column_index>;
using default_table_slice_ptr = caf::intrusive_cow_ptr<default_table_slice>;
using synopsis_ptr = caf::intrusive_ptr<synopsis>;
using table_slice_builder_ptr = caf::intrusive_ptr<table_slice_builder>;
using table_slice_ptr = caf::intrusive_cow_ptr<table_slice>;
using value_index_ptr = std::unique_ptr<value_index>;

// -- miscellaneous ------------------------------------------------------------

using ids = bitmap; // temporary; until we have a real type for 'ids'

} // namespace vast
