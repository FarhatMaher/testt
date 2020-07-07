const config = require("../config/auth.config");
const db = require("../models/index");
const Sauce = db.sauce;

//var jwt = require("jsonwebtoken");

/*exports.addSauce = (req, res) => {

    console.log("sauceName: ", req.body.name);
  const sauce = new Sauce({
    userId: req.body.userId,
    name: req.body.name ,
    manufacturer: req.body.manufacturer ,
    description: req.body.description,
    mainPepper: req.body.mainPepper ,
    imageUrl: req.body.imageUrl ,
    heat: req.body.heat
  });

  sauce.save((err, sauce) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(201).send({
      message: "Sauce was registered successfully!"
    })
  });
};*/

exports.addSauce = (req, res) => {
    console.log("On veut ajouter une sauce");
    Sauce.create(req.body)
        .then(() => res.status(201).json({message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({error}));
};

exports.updateSauce = (req, res) => {
    Sauce.findByIdAndUpdate(req.params.sauceId, {
        $set: req.body
    }, {new: true})
        .then((sauce) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.status(201).json({message: 'Objet modifié !'})
        }).catch((err) => next(err));
}

exports.allSauces = (req, res) => {
    Sauce.find()
        .then((sauces) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(sauces)
        }).catch((err) => next(err));
}


/* expriration
exports.signup = (req, res) => {
  console.log("email: " + req.body.email);
  console.log("password: " + req.body.password);

  const user = new User({
    userId: req.body.userId,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.role) {
      Role.find(
        {
          name: { $in: req.body.role}
        },
        (err, role) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.role = role.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
          });
        }
      );
    }
    res.status(201).send({
      message: "User was registered successfully!"
    })
  });
};*/
