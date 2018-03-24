/* eslint-disable no-undef */
export const fetchName = jest.fn().mockImplementation(() =>
  Promise.resolve("Luke Skywalker"));