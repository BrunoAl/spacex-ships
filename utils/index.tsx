export function isEmailValid(email: string): boolean {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

type addPagesToPathsReturnType = { params: { sortBy: string; page?: string } }[];

export function addPagesToPaths(paths: { params: object }[], numberOfPages: number): addPagesToPathsReturnType {
  return Array(numberOfPages)
    .fill(null)
    .reduce((acc, page, index) => {
      return [...acc, ...paths.map(path => ({ ...path, params: { ...path.params, page: `${index + 1}` } }))];
    }, []);
}

type getShipsInputType = { page?: number; sortBy?: string };
type getShipsReturnType = Promise<{ totalPages: number; docs: [] }>;

export async function getShips({ page = 1, sortBy = 'name' }: getShipsInputType): getShipsReturnType {
  const res = await fetch('https://api.spacexdata.com/v4/ships/query', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      options: {
        limit: 10,
        page,
        sort: sortBy,
      },
    }),
  });
  return await res.json();
}
