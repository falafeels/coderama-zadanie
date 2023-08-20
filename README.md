# Example project for Coderama

How to run it:
- Create a `.env.local` file on the root, containing `VITE_OMDB_API_KEY` variable. Fill this variable with your own OMDb API key.
- Run these commands from the root:
```console
   npm install
   npm run dev
```
Alternatively, you can build it and preview it.

## Notes about the project

I used this opportunity to use stuff I never have until now, to make it a bit more interesting + the value of learning it.
These include using Vite, Emotion and the new React router v6.

I didn't use any global state manager because there was no use-case for it. When using React query it's very rare you need to use anything else. The functionality is preserved as was specified.

Also I didn't make any Jest tests because it seems integrating it into a Vite project is way way harder than I expected and I didn't want to waste hours trying to set it up.

The build chunks are as specified, with the addition of "index" which seems to be some core Vite files and therefore not possible to omit.

I also tried this new file naming convention that I read is the new best thing, with file names being in kebab-case but I don't like it so won't be doing that again.

That's about it, hope you like it.
