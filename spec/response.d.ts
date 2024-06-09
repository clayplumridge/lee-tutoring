/**
 * Top-skip pages response
 */
export interface Paged<T> {
    page: number;
    pageSize: number;
    response: T;
}
