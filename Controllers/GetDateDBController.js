import Repo from '../Models/Models.js';
import { Op } from 'sequelize';

// get all repositories

export const getAllRepos = async(req,res) => {
    try {
        const repos = await Repo.findAll();
        res.status(200).json(repos);
    } catch (error) {
        res.status(500).json(error);
    }
};


// get repositories by name or ID

export const getRepoByNameOrId = async(req,res) => {
    const { search }  = req.params;
    try {
        const repo = await Repo.findAll({
            where: {
                [Op.or]: [
                    {name: {[Op.like]: `%${search}%` }}, 
                    {id: search}
                ]
            }
        });
        res.status(200).json(repo);
    } catch (error) {
        res.status(500).json(error);
    }
};

