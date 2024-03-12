import "dotenv/config";
import { Octokit, App } from "octokit";

const octokit = new Octokit({
  auth: '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',
});

const owner = "Ezequiel-Menneck"
const repo = "studies"
const message = "Commit"
const author = {
    name: "Ezequiel Menneck",
    email: "zeeeee.peeeeetryyy@gmail.com",
    date: new Date().getDay
}

const req = await octokit.request('GET /repos/{owner}/{repo}/commits', {
  owner,
  repo,
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})

// const req2 = await octokit.request('POST /repos/{owner}/{repo}/git/commits', {
//     owner: owner,
//     repo: repo,
//     message: message,
//     author: author,
//     tree: 'd670460b4b4aece5915caf5c68d12f560a9fe3e4',
//     headers: {
//       'X-GitHub-Api-Version': '2022-11-28'
//     }
//   })

console.log(req)

console.log(process.env.GITHUB_KEY);
