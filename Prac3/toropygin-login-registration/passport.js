const passport = require("passport");
const bcrypt = require("bcryptjs");

const GoogleStrategy = require("passport-google-oauth2").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;

const dbConnection = require("./utils/dbConnection");

passport.use(
    new GoogleStrategy(
        {
            clientID:
                "349921063891-hl2jqfpg9e1h47vrhmqqeda2udkamjlr.apps.googleusercontent.com",
            clientSecret: "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",
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
            clientID: "95ea4b3c7fdec5552953",
            clientSecret: "8b3e9c55136524c7ed1c51516e9ec1e9f5b77500",
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
