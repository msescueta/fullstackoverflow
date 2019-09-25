# Boilerplate & Guidelines

Betko - Design

## Setup

#### Requirements
* NodeJS (https://nodejs.org/en/)
* Gulp (http://gulpjs.com/)

To make sure you have Node, npm, and gulp installed, run three simple commands to see what version of each is installed:
* To see if Node is installed, type `node -v` in Terminal. This should print the version number.
* To see if NPM is installed, type `npm -v` in Terminal. This should print the version number.
* To see if gulp is installed, type `gulp -v` in Terminal. This should print the version number.

#### Installation
1. **Download the Template**  
  Clone or download [ZIP]()


2. **Run npm for one-time installation of development dependencies**  
  `sudo npm install`


3. **Run gulp to compile and watch**  
  `gulp`

## Coding Convention

### CSS: dash-separated, cuddle brackets

	.my-selector {
		positioning (coordinates);
		float/clear ();
		display/visibility;
		spacing (margin, padding, border);
		dimensions (width, height);
		typography-related (line-height, color, etc.);
		miscellaneous (list-style, cursors, etc.);
	}

### Javascript: camel case, cuddle brackets

You may read on Crockford's [Javascript Code Convention](http://javascript.crockford.com/code.html).

	function myFunction {
		// do something here
	}

### Nesting

Always indent (1 tab space) nested statements inside a code block.

### Commenting

Be nice to other developers by adding useful comments in the code. This is particularly useful when merging files in a specific hunk.

## Images

### Alt Text
for Google Image Search

	<img src='jpg' alt='Please give me a name!'>

### Sprite Sheet
Global UI images, icons, logo, etc. NO CONTENT! 

### Fontawesome Icons
![Icons Cheatsheet](http://fontawesome.io/icons/)
Global UI images, icons, logo, etc. 

## Optimization

### Minify CSS and Javascript

Download Minimus. Based on YUI JS and CSS Compressor. Make sure all statements terminate with semicolon.

### Images

Images in the sprite sheet should be laid out horizontally. Optimize the images using ImageOptim.

### Page Performance Analysis

Use PageSpeed by Google or YSlow by Yahoo!

## Site Map Reference
Always check built pages against the site tree. Shade boxes that are finished.

## Git-Flow

Always use gitflow. If you don't have git-flow use this [guide](https://github.com/nvie/gitflow/wiki/Mac-OS-X) to install it.
Another way to get git-flow is to install the latest release of [sourcetree](http://www.sourcetreeapp.com/), they already integrated the git-flow to their app.

## Commit Message

#### Pattern
[PREFIX] {files/folders affected} {brief commit message}

(full commit details if able)

#### Prefixes

- **NEW** for added files/folders
- **UPDATE** for updates
- **REMOVE** for deleted files/folders
- **INITIAL** for initial commit


## Changelogs
- **1.0** - Sept. 22, 2019 by Kel Escueta
