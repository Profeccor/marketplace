const { Account } = require("../models");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = class {
  static verify(req, res, next) {
    try {
      const accesstoken = req.headers.accesstoken;
      const secretKey = process.env.SECRETKEYS;
      const jwtdecoded = jwt.verify(accesstoken, secretKey);
      Account.findByPk(jwtdecoded.id)
        .then((result) => {
          if (result) {
            res.status(200).json({ status: "ok" });
          } else {
            res.status(404).json({ status: "gagal" });
          }
        })
        .catch((err) => {
            res.status(404).json(err);
        });
    } catch (err) {
        res.status(500).json({ status: "gagal dalam proses trycatch" });
    }
  }
  static login(req, res) {
    const { password, email } = req.body;
    Account.findOne({
      where: {
        email,
      },
    })
      .then((result) => {
        if (result) {
          const isValid = bcrypt.compareSync(password, result.password);
          if (isValid) {
            // login success
            const secretKey = process.env.SECRETKEYS;
            const payload = {
              id: result.id,
            };
            const generatedToken = jwt.sign(payload, secretKey, {
              // expiresIn: "12h",
            });
            res.status(200).json({ accessToken: generatedToken });
          } else {
            next({ code: 401 });
          }
        } else {
          next({ code: 401 });
        }
      })
      .catch((err) => {
        next({ code: 500, msg: err });
      });
  }
};
