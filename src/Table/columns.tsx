import { ColumnDef } from "@tanstack/react-table";

type ColumnType = Record<string, unknown>;

export function getColumns(data: ColumnType): ColumnDef<ColumnType>[] {
	if (!data) {
		return [];
	}

	return Object.keys(data).map((key) => ({
		accessorKey: key,
		header: camelCaseTransformation(key),
	}));
}

function camelCaseTransformation(key: string): string {
	const result = key.replace(/([A-Z])/g, " $1");
	return result.charAt(0).toUpperCase() + result.slice(1);
}
