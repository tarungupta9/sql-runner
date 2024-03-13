import { FormEvent, useRef, useState } from "react";
import { CSVLink } from "react-csv";
import "./App.css";
import { DataTable } from "./Table";
import { queryData } from "./data";
import { getColumns } from "./Table/columns";

const defaultQuery = "select * from employees;";

function App() {
	const queryInput = useRef<HTMLTextAreaElement>(null);
	const [data, setData] = useState<Array<Record<string, number | string>>>([]);

	const columns = getColumns(data?.[0]);

	const csvData = [
		Object.keys(data?.[0] || {}),
		...data.map((row) => Object.values(row)),
	];

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);

		const query = String(formData.get("query")) || "";
		setData(queryData[query]);
	};

	const handleReset = () => {
		if (queryInput.current) {
			queryInput.current.value = "";
			queryInput.current.focus();
			setData([]);
		}
	};

	return (
		<main>
			<form className="flex flex-col items-start" onSubmit={handleSubmit}>
				<label
					htmlFor="query"
					className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
					Enter Query
				</label>
				<textarea
					id="query"
					name="query"
					ref={queryInput}
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
					aria-label="enter query"
					rows={5}
					defaultValue={defaultQuery}
				/>
				<div className="flex self-end">
					<button
						type="button"
						className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
						onClick={handleReset}>
						Reset
					</button>
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 focus:outline-none">
						Execute
					</button>
				</div>
			</form>
			{data.length > 0 ? (
				<div className="flex flex-col mt-4">
					<CSVLink className="self-end" filename="export.csv" data={csvData}>
						<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 focus:outline-none">
							Export CSV
						</button>
					</CSVLink>
					<DataTable data={data} columns={columns} />
				</div>
			) : null}
		</main>
	);
}

export default App;
