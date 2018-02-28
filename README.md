BrandonGregoryCreative.com
==========================

Just a little site to present my professional self and accomplishments. The site is built with compiled HTML using Jekyll. Also uses SASS for CSS, Gulp for the build system, and NPM for package management.

Quick rundown on the file structure:

- **src**: The raw, uncompiled files. This is where I develop.
- **dev**: Compiled, but not minified files. I test things here.
- **dist**: Final minified files. This is what gets uploaded to the server.

For a complete build, you'd run these commands from the CLI:

- `jekyll build` to build the HTML files
- `gulp` to compile the SASS
- `gulp package` to minify everything and get it ready for deployment

I chose to separate out the packaging process, since that's typically not done until after I'm done testing.

*Note: Speaking page is not done. I need to figure out how to speak first.*