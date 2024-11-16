const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await db.User.create({ ...req.body, password: hashedPassword });
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await db.User.findOne({ where: { mtaId: req.body.mtaId } });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).send({ message: 'Credenciais inválidas' });
    }
    const token = jwt.sign({ id: user.id }, 'SECRET_KEY', { expiresIn: '1h' });
    res.send({ token });
  } catch (err) {
    res.status(400).send(err);
  }
};
