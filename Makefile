
default: build

build:
	npm run build

deploy:
	netlify deploy --prod -d dist

freshdeploy: build deploy

clean:
	@rm -rf dist
