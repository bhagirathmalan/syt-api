const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const { dateToString } = require("../../helpers/date");


module.exports = {
    createUser: async (args) => {
        try {
          const userID = await User.findOne({ phone: args.userInput.phone });

        if (userID) {
          throw new Error("user exists already.");
        }
         
          const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

          const user = new User({
              fullname:args.userInput.fullname,
              email:args.userInput.email,
              phone:args.userInput.phone,
              password:hashedPassword
          });

          const userResult = await user.save();
          return {
            ...userResult._doc,
            password: null,
            _id: userResult.id,
            createdAt: dateToString(userResult._doc.createdAt),
            updatedAt: dateToString(userResult._doc.updatedAt),
          };
        } catch (err) {
          throw err;
        }
      },
    
};