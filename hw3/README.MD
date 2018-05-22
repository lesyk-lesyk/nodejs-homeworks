# Usage examples

### 1. Reverse string from process.stdin to process.stdout
`npm start -- -a reverse`

`npm start -- --action=reverse`



### 2. Convert string to uppercase from process.stdin to process.stdout

`npm start -- -a transform`

`npm start -- --action=transform`



### 3. Read file and print to console

`npm start -- -a outputFile -f users.txt`

`npm start -- --action=outputFile --file=users.txt`



### 4. Read .csv file, convert to JSON and print to console

`npm start -- -a convertFromFile -f users.csv`

`npm start -- --action=convertFromFile --file=users.csv`


### 5. Read .csv file, convert to JSON and write to .json file with the same name

`npm start -- -a convertToFile -f users.csv`

`npm start -- --action=convertToFile --file=users.csv`


### 6. Bundle all css files from given folder and add extra css styles for own file

`npm start -- -a cssBundler -p ./assets/css`

`npm start -- --action=cssBundler --path=./assets/css`
