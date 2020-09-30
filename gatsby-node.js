exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "/go",
    toPath: "/",
  })
  createRedirect({ fromPath: "/accepted", toPath: "/" })
}
