export default () => {
  if (process.env.NODE_ENV === "production") {
    throw new Error("すみませんでした！！！！！！！！");
  }
};
