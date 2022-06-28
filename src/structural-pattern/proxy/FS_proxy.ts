/**
 * Provided a surrogate or placeholder for another object to control access to it
 */

export default class FS_Proxy {
  constructor(private fs: any) {}

  readFile(
    path: string,
    format: string,
    callback: (error?: Error, content?: string) => {}
  ) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error(`Can only read Markdown files.`), "");
    }

    this.fs.readFile(path, format, (error: Error, contents: string) => {
      if (error) {
        console.error(error);
        return callback(error, "");
      }

      return callback(undefined, contents);
    });
  }
}
