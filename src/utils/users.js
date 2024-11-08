[
    {
        /* This data stored in db at the time of signup */
        id: uid,
        fName: "",
        sName: "",
        mobileNumber: "",
        email: "",
        dob: "",
        gender: "",
        signupTimestamp: "",
        lastLoginTimestamp: null, //update this null value everytime when user login

        /* Profile Related Data */
        profilePicture: null,
        coverPhoto: null,
        bio: "",
        friends: [
            {
                friend1
            },
            {
                friend2
            },
            {
                friend3
            }
        ],


        /* Post Related Data */
        posts: [
            {
                postId: "",
                author: "",
                content: "",
                timestamp: "",
                likes: [
                    {
                        friend1
                    },
                    {
                        friend2
                    }
                ],
                comments: [
                    {
                        author: "",
                        content: "",
                        timestamp: "",
                    },
                    {
                        author: "",
                        content: "",
                        timestamp: "",
                    },
                    {
                        author: "",
                        content: "",
                        timestamp: "",
                    }
                ]
            },
            {
                postId: "",
                author: "",
                content: "",
                timestamp: "",
                likes: [
                    {
                        friend3
                    }
                ],
                comments: []
            }
        ],

    }
]