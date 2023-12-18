import {
    getFilteredRowModel,
    useReactTable,
    getCoreRowModel,
    ColumnDef,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table';

interface ReactTableProps<TData> {
    data: TData[];
    columns: ColumnDef<TData, any>[];
    globalFilter: string;
}

const Table = <T extends object>({ data, columns, globalFilter }: ReactTableProps<T>) => {
    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
        },
        getFilteredRowModel: getFilteredRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div>
            <table className=' w-full text-left'>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => {
                        return (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} className='capitalize px-3.5 py-2'>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )}
                                    </th>
                                ))}
                            </tr>
                        );
                    })}
                </thead>
                <tbody>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map((row, i: number) => (
                            <tr
                                className={`${i % 2 == 0 && 'bg-zinc-800'}`}
                                key={row.id}
                            >
                                {row.getVisibleCells().map((cells) => (
                                    <td className='px-3.5 py-2 '>
                                        {flexRender(
                                            cells.column.columnDef.cell,
                                            cells.getContext(),
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr className='text-center h-32'>
                            <td colSpan={12}>No Record Found!</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className='flex items-center justify-end mt-2 gap-2 '>
                <button
                    onClick={() => {
                        table.previousPage();
                    }}
                    disabled={!table.getCanPreviousPage()}
                    className='p-1 border border-amber-600 px-2 disabled:opacity-30'
                >
                    {'<'}
                </button>
                <button
                    onClick={() => {
                        table.nextPage();
                    }}
                    disabled={!table.getCanNextPage()}
                    className='p-1 border border-amber-600 px-2 disabled:opacity-30'
                >
                    {'>'}
                </button>

                <span className='flex items-center gap-1 flex-wrap'>
                    <div>Page</div>
                    <strong>
                        {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                    </strong>
                </span>
                <span className='flex items-center gap-1 flex-wrap'>
                   <span className='text-amber-600'>|</span>  Go to page :
                    <input
                        type='number'
                        defaultValue={0}
                        className='border p-1 rounded  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-16 bg-transparent  border-amber-600'
                        onChange={(e) => {
                            const page: number = e.target.value ? Number(e.target.value) - 1 : 0;
                            table.setPageIndex(page);
                        }}
                    />
                </span>
                <select
                    name='page'
                    id='page'
                    className='p-2 bg-transparent border border-amber-600'
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                        table.setPageSize(Number(e.target.value));
                    }}
                >
                    {[5, 10, 15, 20, 25].map((pageSizes) => (
                        <option key={pageSizes} value={pageSizes} className='text-white bg-zinc-700  border-0'>show {pageSizes}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Table;
