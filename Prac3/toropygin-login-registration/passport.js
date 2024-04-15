const passport = require("passport");
const bcrypt = require("bcryptjs");

const GoogleStrategy = require("passport-google-oauth2").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;

const dbConnection = require("./utils/dbConnection");

passport.use(
    new GoogleStrategy(
        {
            clientID:
                "",
            clientSecret: "",
            callbackURL: "http://localhost:5000/auth/google/callback",
            scope: ["email", "profile"],
        },
        async function (accessToken, refreshToken, profile, done) {
            const [row] = await dbConnection.execute(
                "SELECT * FROM `users`WHERE `email`=?",
                [profile.email]
            );
            console.log(row[0]);
            console.log(row == null);
            if (row[0] == undefined) {
                await dbConnection.execute(
                    "INSERT INTO `users`(`name`,`email`,`password`) VALUES(?,?,?)",
                    [
                        profile.displayName,
                        profile.email,
                        await bcrypt.hash(accessToken, 12),
                    ]
                );
            }
            done(null, profile);
        }
    )
);

passport.use(
    new GitHubStrategy(
        {
            clientID: "",
            clientSecret: "",
            callbackURL: "http://localhost:5000/auth/github/callback",
            scope: ["email", "profile"],
        },
        async function (accessToken, refreshToken, profile, done) {
            const [row] = await dbConnection.execute(
                "SELECT * FROM `users`WHERE `email`=?",
                [profile.username]
            );

            if (row[0] == undefined) {
                await dbConnection.execute(
                    "INSERT INTO `users`(`name`,`email`,`password`) VALUES(?,?,?)",
                    [
                        profile.displayName,
                        profile.username,
                        await bcrypt.hash(accessToken, 12),
                    ]
                );
            }
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
