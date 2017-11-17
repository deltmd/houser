module.exports= {
    
    login: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;
    
        dbInstance.read_users()
        .then( user => {
            user.find( user => user.username === username && user.password === password )
            console.log( user )

            if( user ){
                req.session.user.username = user.username;
                req.session.user.id = user.ID
                res.status(200).send( req.session.user );
            }else {
                res.status( 500 ).send( 'Unauthorized' );
            }
        })

    },

    register: ( req, res, next) => {
        const dbInstance = req.app.get('db');
        const { session } = req;
        const { username, password } = req.body;
        
        dbInstance.create_user([ username, password ])
        .then( user => {
            session.user.username = username;
            session.user.id = user.ID;
            res.status(200).send( session.user ) 
        });
        
    },

    logOut: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { session } = req;

        session.destroy();
        res.status(200).send('This session has ended');

    }

    
}