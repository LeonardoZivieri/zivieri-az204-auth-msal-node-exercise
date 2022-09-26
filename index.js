const msal = require("@azure/msal-node");
const open = require("open");

(async () => {
    const clientConfig = {
        auth: {
            clientId: "850b5004-a09c-4672-9cbb-678d99b57a86",
            authority: "https://login.microsoftonline.com/f514e6b4-5226-45a1-8370-1c187a89457a",
        }
    };
    const pca = new msal.PublicClientApplication(clientConfig);

    const accessToken = await pca.acquireTokenInteractive({
        openBrowser: (url) => open(url)
    });

    console.log(`Token: ${accessToken.accessToken}`)
})()