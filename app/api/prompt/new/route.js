import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

connectToDB

export const POST = async (req) => {
    const {userId, prompt, tag} = await req.json();

    try {
        await connectToDB(); 
        const newPrompt = new Prompt({creator:userId , prompt, tag});

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), {
            satus: 201
        })
    } catch (error) {
        return new Response("failed to crete a new prompt", {
            status: 500
        })
        
    }
};