This was created during my time as a student at Code Chrysalis.

# Title TBD

## Table of Contents

1. [Introduction](#introduction)
2. [Setup: Getting Started](#setup-getting-started)
3. [About the Data](#about-the-data)
4. [Endpoints](#endpoints)
5. [Features to Add](#features-to-add)

## Introduction

This is a RESTful API with data for all 140 queens who have competed on RuPaul's Drag Race. Created by @followdiallo.

## Setup: Getting Started

Install dependencies:

```
yarn install
```

Run migrations and set up the database:

```
yarn migrate
```

Start the server:

```
yarn start
```

_\*If you want to click any of the examples below, make sure the server is running first._

## About the Data

A lot of the data comes from the [RuPaul-Predict-A-Looza Spreadsheet](https://docs.google.com/spreadsheets/d/1Sotvl3o7J_ckKUg5sRiZTqNQn3hPqhepBSeOpMTK15Q/edit#gid=1613421713).

The data in this API does not include data from All Stars seasons. Queens who have appeared in multiple seasons (Shangela Laquifa Wadley, Cynthia Lee Fontaine, Eureka, and Vanessa Vanjie Mateo) are included twice, with a different object for each season. (So Season 2 Shangela is treated as a separate queen from Season 3 Shangela.)

Queen data is returned in the following format:

```
{
    "id": 113,
    "name": "Nina Bo'nina Brown",
    "season": 9,
    "ranking": 6,
    "congeniality": false,
    "snatch_game": false,
    "first_win": true,
    "entrance": 12,
    "wins": 1
  }
```

**id**: Unique id for each queen. Based on Werk Room entrance by season (starting with Shannel as 1, and Soju as 144).

**name**: The queen's name.

**season**: The season in which the queen competed.

**ranking**: The queen's placement in her season. Queens with a ranking of 1 won their season.

**congeniality**: Boolean indicating whether or not the queen won Miss Congeniality.

**snatch_game**: Boolean indicating whether or not the queen won Snatch Game.

**first_win**: Boolean indicating whether or not the queen won the first challenge of her season.

**entrance**: The order in which the queen entered the Werk Room on her season. (Queens with entrance 1 were the first to enter, queens with entrance 2 were the second to enter, etc.)

**wins**: The number of maxi challenges the queen won during her season. Note that this number includes neither mini challenges nor All Stars challenges.

## Endpoints

### GET

`/api/queens`: Returns all queens. [(Example)](http://localhost:3000/api/queens)

`/api/queens/:name`: Returns queen by name. _Note that names are case-sensitive, and you must search by the queen's full name._ [(Example)](http://localhost:3000/api/queens/Victoria%20Porkchop%20Parker)

`/api/queens/seasons/:season`: Returns all queens for the specified season. [(Example)](http://localhost:3000/api/seasons/9)

`/api/queens/seasons/:season/top/:ranking`: Returns all queens who placed `:ranking` or higher in the specified season; `top/3/` returns the top three, etc. [(Example)](http://localhost:3000/api/seasons/11/top/5)

`/api/queens/wins/:win`: Returns all queens who won at least `:win` maxi challenges. [(Example)](http://localhost:3000/api/wins/3)

`/api/winners`: Returns all winners of RuPaul's Drag Race. [(Example)](http://localhost:3000/api/winners)

`/api/winners/:season`: Returns the winner for the specified season. [(Example)](http://localhost:3000/api/winners/7)

`/api/congeniality`: Returns all Miss Congenialities. [(Example)](http://localhost:3000/api/congeniality)

`/api/congeniality/:season`: Returns the Miss Congeniality for the specified season. [(Example)](http://localhost:3000/api/congeniality/4)

`/api/snatch_game`: Returns all Snatch Game winners. [(Example)](http://localhost:3000/api/snatch_game)

`/api/snatch_game/:season`: Returns the Snatch Game winner(s) for the specified season. [(Example)](http://localhost:3000/api/snatch_game/7)

`/api/first_win`: Returns all queens who won the first challenge of their season. [(Example)](http://localhost:3000/api/first_win)

`/api/first_win/:season`: Returns the queen(s) who won the first challenge of her season. [(Example)](http://localhost:3000/api/first_win/6)

### POST

`/api/queens/`: Adds a new queen with the information specified in the request body.

### PATCH

`/api/queens/:name`: Updates the information of the selected queen. _Note that names are case-sensitive, and you must indicate the queen's full name._

### DELETE

`/api/queens/:name`: Deletes the selected queen. _Note that names are case-sensitive, and you must indicate the queen's full name._

## Features to Add

- Making name search case-insensitive
- Combining data for queens who have appeared in multiple seasons
- LSFYL data
