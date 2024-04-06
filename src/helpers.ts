import mime from "mime";

export function readFileSystemFile(fileEntry: FileSystemFileEntry) {
  return new Promise<File>((res, rej) => {
    fileEntry.file(
      (file) => res(file),
      (err) => rej(err),
    );
  });
}
export function readFileSystemDirectory(directory: FileSystemDirectoryEntry) {
  return new Promise<FileSystemEntry[]>((res, rej) => {
    directory.createReader().readEntries(
      (entries) => res(entries),
      (err) => rej(err),
    );
  });
}

/** returns the file extension for the provided MIME type */
export function getExtension(type?: string) {
  if (!type) return;
  const ext = mime.getExtension(type);
  return ext ? "." + ext : undefined;
}
