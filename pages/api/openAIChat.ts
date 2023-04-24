import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configration = new Configuration({
    apiKey: process.env.OPENAIA_API_KEY,
});

const openai = new OpenAIApi(configration);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: req.body.messages,
    })

    res.status(200).json({result: completion.data})
}