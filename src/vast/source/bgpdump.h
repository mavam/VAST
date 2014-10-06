#ifndef VAST_SOURCE_BGPDUMP_H
#define VAST_SOURCE_BGPDUMP_H

#include "vast/schema.h"
#include "vast/source/file.h"

namespace vast {
namespace source {

/// A BGPDump txt file source.
class bgpdump : public file<bgpdump>
{
public:
  /// Spawns a BGPDump source.
  /// @param sch The schema to prefer over the auto-deduced type.
  /// @param filename The name of the BGPDump txt file.
  /// @param sniff If `true`, sniff and print the schema, then exit. If
  ///              `false`, parse events..
  bgpdump(schema sch, std::string const& filename, bool sniff = false);

  result<event> extract_impl();

  std::string describe() const final;

  std::vector<std::string> split(const std::string &s, char delim);

private:

  schema schema_;
  bool sniff_;
  std::string separator_ = "|";
  std::string set_separator_;
  std::string empty_field_;
  std::string unset_field_;
  type type_;
};

} // namespace source
} // namespace vast

#endif
