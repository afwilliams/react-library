/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/github",
            {
                "assets": ["dist/**"]
            }
        ],
        [
            "@semantic-release/changelog",
            {
                changelogFile: "CHANGELOG.md",
            },
        ],
        "@semantic-release/npm",
        [
            "@semantic-release/git",
            {
                assets: ["package.json", "CHANGELOG.md"],
                message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
            },
        ],
    ],
    "preset": "angular"
}