import axios from 'axios';
import Repo from '../Models/Models.js';

// fetch data from GitHub API

const fetchGitHubData = async(req,res) => {
    try {
        const result = await axios.get(
        `https://api.github.com/search/repositories?q=stars:%3E=1&sort=stars&order=desc`
        );

        const repos = await result.data.items;

        const reposFromDb = await Repo.bulkCreate(
            repos.map((repo) => ({
                    id: (repo.id).toString(),
                    name: repo.name,
                    url: repo.html_url,
                    avatar_url: repo.owner.avatar_url,
                    description: repo.description,
                    stars: repo.stargazers_count,
                    language: repo.language,
                })),
                { ignoreDuplicates: true }
          );

        res.status(200).json(reposFromDb);

    } catch (error) {
        console.log(error)
    }
};


export const entervalFetch = async () => {
    const intervalCall = await fetchGitHubData();

    setTimeout(entervalFetch, 300000);
};


