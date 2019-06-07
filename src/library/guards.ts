export const isValue = <P>(prop: P): prop is NonNullable<P> => {
    return typeof prop !== 'undefined' && prop !== null;
};
