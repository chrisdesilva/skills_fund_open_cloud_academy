exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "https://opencloudacademy.skills.fund/*",
    toPath: "https://rca.skills.fund/:splat",
    isPermanent: true,
    force: true,
  })
  createRedirect({
    fromPath: "/go",
    toPath: "/",
  })
  createRedirect({
    fromPath: "/go",
    toPath: "/",
  })
  createRedirect({ fromPath: "/accepted", toPath: "/" })
}
