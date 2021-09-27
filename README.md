# ETL-Challenge

ETL (Extract, Transform and Load).

On this challenge, I had to:

1. EXTRACT all unordered numbers from a given API;
1. TRANSFORM them, ordering them ascendingly;
1. LOAD the ordered numbers over an API.

## How to use it

Live demo running at https://etl-challenge.herokuapp.com/numbers/1

- `GET /numbers` - returns a JSON file with all numbers;
- `GET /numbers/:id` - returns numbers by page id (int starting from 1).

## Technologies

The following tools and frameworks were used in the construction of the project:

<p>
  <img style='margin: 5px;' src='https://shields.io/badge/-TypeScript-3178C6?logo=TypeScript&logoColor=white&style=for-the-badge'> 
	<img style='margin: 5px;' src='https://shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white&style=for-the-badge'>
  <img style='margin: 5px;' src='https://shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational'>
	<img style='margin: 5px;' src='https://shields.io/badge/-Redis-DC382D?logo=Redis&logoColor=white&style=for-the-badge'>
	<img style='margin: 5px;' src='https://shields.io/badge/-Jest-C21325?logo=Jest&logoColor=white&style=for-the-badge'>
</p>

## How to run

1. Clone and `cd` into this repository

2. Copy the file `.env.example` to your own `.env`. This app uses a provided API. You still have to provide a `REDIS_URL` env.

```bash
cp .env.example .env
```

3. Install the dependencies

```bash
npm i
```

4. Run the app. It may take a few minutes to download all numbers.

```bash
npm run dev
```
