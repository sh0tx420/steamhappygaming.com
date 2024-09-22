import nodea2s from "node-a2s";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    //if (body) {
    //    const players = nodea2s.players(body[0]);
    //    return players; 
    //}

    return "";
});
