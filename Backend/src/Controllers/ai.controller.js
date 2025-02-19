const aiService = require("../Services/ai.service")


module.exports.getResponse = async (req,res)=>{
    const prompt = req.query.prompt;

    if(!prompt){
        return res.status(400).send("Prompt is required!")
    }

    const response = await aiService(prompt);

    res.send(response);
}