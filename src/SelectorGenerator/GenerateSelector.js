const GenerateSelector = () =>
{
    return `
    const getBaseURL =  "http://localhost:3000";
    
    export default getBaseURL;`;
}

module.exports = {GenerateSelector}