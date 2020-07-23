export default ({ req }: any) => {
  return {
    user: req.user || null,
  };
};
