export const getListProperties = <T extends Record<string, any>, R>(list: T[], key: string): R[] => {
  const options: R[] = list.map(({ [key]: prop }: T) => prop).filter(Boolean);
  return [...new Set(options)]; // delete duplicates
}
