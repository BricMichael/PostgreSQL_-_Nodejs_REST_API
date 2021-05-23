

export const createProject = (req,res) => {
    const reqBody = req.body;
    console.log(reqBody)
    res.json({reqBody})
}