import { useSearchContext } from "contexts/SearchContext";
import { useRequestsApi } from "hooks/useRequestApi";

export function SearchInput() {
  const { handleInput } = useRequestsApi();
  const { setSearch } = useSearchContext();
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400"
        placeholder="Pequise"
        required
        onKeyDown={handleInput}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
