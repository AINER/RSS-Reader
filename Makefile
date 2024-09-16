install:
	npm ci

test:
	npm test

lint:
	npx eslint .

develop:
	npx webpack serve --mode development

build:
	NODE_ENV=production npx webpack
