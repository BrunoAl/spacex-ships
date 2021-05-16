export function isEmailValid(email: string): boolean {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// export function addPagesToPaths(paths: { params: object }[], pages: string[]): string[] {
//   return pages.reduce(
//     (prev, next) => [...prev, paths.map(path => ({ ...path, params: { ...path.params, page: '1' } }))],
//     [],
//   );
// }

export function addPagesToPaths(paths, pages) {
  return pages.reduce((acc, page) => {
    return [...acc, ...paths.map(path => ({ ...path, params: { ...path.params, page } }))];
  }, []);
  // return [...one, ...two, ...three];
}
