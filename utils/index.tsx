export function isEmailValid(email: string): boolean {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function addPagesToPaths(paths: { params: object }[], pages: string[]) {
  return pages.reduce((acc, page) => {
    return [...acc, ...paths.map(path => ({ ...path, params: { ...path.params, page } }))];
  }, []);
}
