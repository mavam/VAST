# chart_bar

Visualizes events on an bar chart.

```tql
chart_bar x=field, y=any, [x_min=any, x_max=any, resolution=duration,
            x_log=bool, y_log=bool, group=any, position=string]
```

## Description

Visualizes events with an bar chart on the [Tenzir
Platform](https://app.tenzir.com).

### `x = field`

Label for each bar.

### `y = any`

Positions on the y-axis for each data point.
Multiple data points for the same group can be be aggregated using an
[aggregation function](../functions.md#aggregations).

Multiple `y` values and their labels can be specified by using the record
syntax: `{name: value, ...}`.

For example, `y = {"Avg. Load": mean(load)}` calculates the
[mean](../functions/mean.md) of the `load` field and labels it as `Avg. Load`.

### `x_min = any (optional)`

If specified, only charts events where `x >= x_min`.
If `resolution` is specified, `x_min` is _floored_ to create a full bucket.

### `x_max = any (optional)`

If specified, only charts events where `x <= x_max`.
If `resolution` is specified, `x_max` is _ceiled_ to create a full bucket.

### `resolution = duration (optional)`

This option can be specified to create buckets of given resolution on the
x-axis.

For example, if the resolution is set to `15min`, the `x` values are _floored_
to create buckets of 15 minutes. Any aggregations specified act on that bucket.

### `x_log = bool (optional)`

If `true`, use a logarithmic scale for the x-axis.

Defaults to `false`.

### `y_log = bool (optional)`

If `true`, use a logarithmic scale for the y-axis.

Defaults to `false`.

### `group = any (optional)`

Optional expression to group the aggregations with.

### `position = string (optional)`

Determines how the `y` values are displayed. Possible values:
- `grouped`
- `stacked`

Defaults to `grouped`.

## Examples
