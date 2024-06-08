enum SearchEngineType {
  GOOGLE = "google",
  BING = "bing",
  DUCK_DUCK_GO = "duck-duck-go",
}

type SearchResult = {
  title: string;
  url: string;
  description?: string;
};

type SearchQueryResult = {
  query: string;
  searchEngine: SearchEngineType;
  results: SearchResult[];
};

interface SearchEngine {
  init(): Promise<void>; // initializes the search engine
  search(query: string): Promise<boolean>; // searches for query and returns true if search was successful
  nextPage(): Promise<SearchResult[]>; // navigates to the next page of search results
  getResults(): Promise<SearchQueryResult>; // returns the current search results
}

export { SearchQueryResult, SearchResult, SearchEngine };
