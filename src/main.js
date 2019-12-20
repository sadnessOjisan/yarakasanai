console.log("二度とやらかしません！！！！");
if (process.env.NODE_ENV === "prd") {
  throw new Error("すみませんでした！！！！！！！！");
}
