export default () => {
  if (
    process.env.NODE_ENV === "production" ||
    process.env.NODE_ENV === "staging"
  ) {
    throw new Error("すみませんでした！！！！！！！！");
  }
};
