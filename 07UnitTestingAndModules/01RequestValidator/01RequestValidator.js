function requestValidator(object = {}) {

    let isValid = true;
    let property = ``;

    if (!object.hasOwnProperty('method')) {

        property = `Method`;
        isValid = false;
    } else {

        let array = [`GET`, `POST`, `DELETE`, `CONNECT`];

        if (!array.includes(object.method)) {

            property = `Method`;
            isValid = false;
        }
    }

    if (!object.hasOwnProperty('uri')) {

        property = `URI`;
        isValid = false;
    } else {

        let array = [`<`, `>`, `\\`, `&`, `'`, `"`, `%`, `-`, `$`, ` `];
        array.map(x => {
            if (object.uri.includes(x) || object.uri === ``) {

                property = `URI`;
                isValid = false;
            }
        })
        
    }

    if (!object.hasOwnProperty('version')) {

        property = `Version`;
        isValid = false;
    } else {

        let array = [`HTTP/0.9`, `HTTP/1.0`, `HTTP/1.1`, `HTTP/2.0`];

        if (!array.includes(object.version)) {

            property = `Version`;
            isValid = false;
        }
    }

    if (!object.hasOwnProperty('message')) {

        property = `Message`;
        isValid = false;
    } else {

        let array = [`<`, `>`, `\\`, `&`, `'`, `"`];

        if (array.includes(object.message)) {

            property = `Message`;
            isValid = false;
        }
    }

    if (isValid) {
        console.log(object);
    } else {
        console.log(`Invalid request header: Invalid ${property}". `);
    }
}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
)