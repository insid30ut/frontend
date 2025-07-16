declare module 'gray-matter' {
  interface GrayMatterFile<T extends object> {
    data: T;
    content: string;
    excerpt?: string;
    isEmpty: boolean;
    excerpt_separator?: string;
  }

  function matter<T extends object = { [key: string]: any }>(
    file: string | Buffer,
    options?: {
      excerpt?: boolean | ((file: GrayMatterFile<T>, options: any) => void);
      excerpt_separator?: string;
      engines?: { [key: string]: any };
      language?: string;
      delimiters?: string | string[];
    }
  ): GrayMatterFile<T>;

  namespace matter {}
  export = matter;
}