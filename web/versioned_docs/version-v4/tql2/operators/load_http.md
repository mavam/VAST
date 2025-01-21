# load_http

Loads a byte stream via HTTP.

```tql
load_http url:string, [data=record, params=record, headers=record,
          method=string, form=bool, chunked=bool, multipart=bool,
          skip_peer_verification=bool, skip_hostname_verification=bool, verbose=bool]
```

## Description

The `load_http` operator performs a HTTP request and returns the response.

### `url: string`

The URL to request from. The `http://` scheme can be omitted.

### `method = string (optional)`

The HTTP method, such as `POST` or `GET`.

The default is `"GET"`.

### `params = record (optional)`

The query parameters for the request.

### `headers = record (optional)`

The headers for the request.

### `data = record (optional)`

The request body as a record of key-value pairs. The body is encoded as JSON
unless `form=true` has been set.

### `form = bool (optional)`

Submits the HTTP request body as form-encoded data.

This automatically sets the `Content-Type` header to
`application/x-www-form-urlencoded`.

Defaults to `false`.

### `chunked = bool (optional)`

Whether to enable [chunked transfer
encoding](https://en.wikipedia.org/wiki/Chunked_transfer_encoding). This is
equivalent to manually setting the header `Transfer-Encoding: chunked`.

Defaults to `false`.

### `multipart = bool (optional)`

Whether to encode the HTTP request body as [multipart
message](https://en.wikipedia.org/wiki/MIME#Multipart_messages).

This automatically sets the `Content-Type` header to
`application/form-multipart; X` where `X` contains the MIME part boundary.

Defaults to `false`.

### `skip_peer_verification = bool (optional)`

Whether to skip TLS peer verification.

Defaults to `false`.

### `skip_hostname_verification = bool (optional)`

Whether to skip TLS peer verification.

Defaults to `false`.

<!-- ### `verbose = bool (optional)` -->
<!---->
<!-- Whether to emit verbose output. -->
<!---->
<!-- Defaults to `false`. -->

## Examples

### Perform an API call and get the response

```tql
load_http "example.org/api", headers={"X-API-Token": "0000-0000-0000"}
```

## See Also

[`save_http`](save_http.md)
