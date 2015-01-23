# Is It Food?

Primary reposity for `Is It Food?` server backend.

See `pushbyte/is_it_food_ios` for the iOS App.

This server is currently up and running at [http://isitfood.herokuapp.com](http://isitfood.herokuapp.com).

## Overview

- It's an Express server.
- There's a static list of quotes in `quotes.json`. On `GET /` requests, the server chooses a random quote from this list and responds with the author and text of the quote.

## Routes

- `GET /` responds with a random quotation regarding food.
	- Responses take the format: `{ "author":"...", "text":"..." }`