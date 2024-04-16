import express, { Request } from "express";
import User from "../models/user";
import UserCreateRequest from "../payloads/request/userCreateRequest";
import Log from "../models/log";
import LogsCreateRequest from "../payloads/request/logsCreateRequest";
import SuccessFulResponse from "../payloads/response/successfulResponse";
import rateLimit from "express-rate-limit";

const router = express.Router();

const limiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 10,
    message: "Too many requests, please try again later."
});

router.post('/users', async (req, res) => {
    try {
        const request = req.body as UserCreateRequest;

        const user = await User.create({ email: request.email });

        await Log.create({ level: 1, message: `${user.dataValues.email} created successfully`, userId: user.dataValues.id });

        return res.send({ message: `${user.dataValues.email} created successfully` } as SuccessFulResponse);
    } catch (e) {
        console.log(e);
        res.status(500).send("Something went wrong");
    }
});

router.delete('/users/:id', async (req, res) => {

    try {
        const id = req.params.id;

        const user = await User.findByPk(id);

        await user.destroy();

        return res.send({ message: "User Deleted successfully" } as SuccessFulResponse);
    } catch (e) {
        console.log(e);
        res.status(500).send("Something went wrong");
    }
});

router.post('/logs', limiter, async (req, res) => {

    try {

        const { level, message, userEmail } = req.body as LogsCreateRequest;

        const user = await User.findOne({ where: { email: userEmail } });

        await Log.create({ level, message, userId: user.dataValues.id });

        return res.send({ message: "Logs added successfully" } as SuccessFulResponse);
    } catch (e) {
        console.log(e);
        res.status(500).send("Something went wrong");
    }
});

router.get('/logs', async (req, res) => {
    try {
        const all = await Log.findAll({ attributes: { exclude: ['id'] } });

        return res.send(all.map(a => a.dataValues));
    } catch (e) {
        console.log(e);
        res.status(500).send("Something went wrong");
    }
});

router.get('/logs/:levelId', async (req, res) => {
    try {
        const logs = await Log.findAll({ where: { level: req.params.levelId }, attributes: { exclude: ['id'] } });

        return res.send(logs.map(a => a.dataValues));
    } catch (e) {
        console.log(e);
        res.status(500).send("Something went wrong");
    }
});

export default router;