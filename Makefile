lint:
	npx eslint .

install:
	npm install

start:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

publish:
	npm publish --dry-run
	
