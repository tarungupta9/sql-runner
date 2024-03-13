# SQL Runner

SQL Runner contains predefined queries which are mapped to corresponding results. The results are shown in table

### Features
- Input box to take in query
- Display query output in the nice paginated table
- Supports export of query data output to CSV 

### Constraints
Presently, the input box only supports some predefined queries
- `select * from customers;`
- `select * from employees;`
- `select * from orders;`

### Future Scope
- SQL queries can get complex at times, we can allow users to save the SQL queries so that it would be convenient for them to reference it in future.
- Output table can have additional functionality like searching, sorting and filtering on columns

## Tech

SQL runner uses
- ReactJS
- Typescript
- TailwindCSS
- Vite
- Tanstack React Table
- React CSV
- Other couple of dev dependencies

## Installation
Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/tarungupta9/sql-runner.git
cd sql-runner
npm i
npm run dev
```

### Demo Video
> [URL](https://drive.google.com/file/d/1Xd2n4-QHYFTeMjT5BeuFpcDM8Dfzgm1g/view?usp=sharing)

### Page Speed
I have kept things simple for this application. Although RSC with NextJS can help further optimise the load times by rendering and fetching data on the server.

### Deployed URL
> [SQL Runner](https://sql-runner-seven.vercel.app/)
