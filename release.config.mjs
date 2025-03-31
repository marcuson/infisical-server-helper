import * as ciInfo from "ci-info";

const mainBranch = "main";
const isCI = ciInfo.isCI;
const isGHOk = !!(process.env.GH_TOKEN || process.env.GITHUB_TOKEN);
const changelogName = `docs/CHANGELOG.md`;

const ref = process.env.GITHUB_REF;
const branch = ref ? ref.split("/").pop() : "_none_";

const newLatestTag = branch === mainBranch ? "latest" : `latest-${branch}`;

console.log("Branch name:", branch);
console.log("Is CI?:", isCI);
console.log("Is GH config ok?:", isGHOk);

if (!isGHOk) {
  console.warn("GITHUB_TOKEN is not set, GH release won't be created");
}

const plugs = [
  [
    "@semantic-release/commit-analyzer",
    {
      preset: "angular",
    },
  ],
  "@semantic-release/release-notes-generator",
  branch === mainBranch
    ? [
      "@semantic-release/changelog",
      {
        changelogFile: `${changelogName}`,
      },
    ]
    : undefined,
  [
    "@semantic-release/npm",
    {
      npmPublish: false,
    },
  ],
  [
    "@semantic-release/exec",
    {
      prepareCmd:
        "npm run release:prepare -- ${nextRelease.version} " + newLatestTag,
      publishCmd:
        "npm run release:publish -- ${nextRelease.version} " + newLatestTag,
    },
  ],
  [
    "@semantic-release/git",
    {
      assets: ["docs", "package*.json"],
      message:
        "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
    },
  ],
  isGHOk ? ["@semantic-release/github"] : undefined,
];

const cfg = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    mainBranch,
    {
      name: "beta",
      prerelease: "beta",
    },
    {
      name: "alpha",
      prerelease: "alpha",
    },
  ],
  tagFormat: "${version}",
  plugins: plugs.filter((x) => x !== null && x !== undefined),
};

export default cfg;
