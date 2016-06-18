/* Client-Secret Downloaded from Google Development */
var clientSecret = {
    installed: {
        client_id: "k677725446467-6li25pcqgkcllsoh6f6dijcvse64n9pf.apps.googleusercontent.com",
        project_id: "clean-node-119606",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://accounts.google.com/o/oauth2/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_secret: "kF7DvoA_ZrNfa65GnU2zQBgw7",
        redirect_uris: [
            "urn:ietf:wg:oauth:2.0:oob",
            "http://localhost"
        ]
    }
};

var gmailNode = require('../');

// Message
var testMessage = {
    to: 'guptkashish@proptiger.com',
    subject: 'Test Subject',
    message: 'Test Email'
};

// ClientSecret:
gmailNode.init(clientSecret, './token.json', initComplete);

function initComplete(err, dataObject) {
    if(err){
        console.log('Error ', err);
    }else {
        gmailNode.send(testMessage, function (err, data) {
            console.log(data);
        });

        gmailNode.clearToken();
    }
}



