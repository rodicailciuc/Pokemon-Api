# Search Pokemon By Id

> PokeFetch is an app for accessing Pokémon data from the Pokémon API. It lets
> users search for Pokémon by name or ID, view details like abilities and stats,
> mark favorites, and explore random Pokémon.

## Table of contents

- [Search Pokemon By Id](#search-pokemon-by-id)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Code Examples](#code-examples)
  - [Status](#status)
  - [Contact](#contact)

## General info

> The objective of the project is to practice separation of concern in
> JavaScript.

## Screenshots

![Example screenshot](./assets/Capture%20d’écran%202024-05-17%20090052.png)

## Technologies

- JavaScript
- HTML5
- CSS3
- VSC code

## Setup

clone the repo and start using the stop watch.

## Code Examples

```js
if (Number.isNaN(id) || id <= 0) {
	pokemonData.id = null;
	dom.error.innerText = 'Please enter a valid Pokémon ID.';
	dom.root.append(dom.error);
	if (pokemonExist) {
		pokemonExist.remove();
	}
	return;
}
```

## Status

Project is: _in progress_

## Contact

[Rodica](https://github.com/rodicailciuc)
